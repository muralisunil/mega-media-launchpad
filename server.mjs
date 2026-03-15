import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 8080);
const dataDir = path.join(__dirname, "data");
const enquiriesFile = path.join(dataDir, "enquiries.json");
const distDir = path.join(__dirname, "dist");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

async function ensureDataFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(enquiriesFile);
  } catch {
    await fs.writeFile(enquiriesFile, "[]", "utf8");
  }
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) {
    return {};
  }
  return JSON.parse(raw);
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

async function appendEnquiry(payload) {
  await ensureDataFile();
  const raw = await fs.readFile(enquiriesFile, "utf8");
  const current = JSON.parse(raw);
  const next = [
    ...current,
    {
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      ...payload,
    },
  ];
  await fs.writeFile(enquiriesFile, JSON.stringify(next, null, 2), "utf8");
}

function sanitizePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^\/+/, "");
  if (normalized.includes("..")) {
    return "";
  }
  return normalized;
}

async function resolveStaticFile(urlPath) {
  const cleaned = sanitizePath(urlPath);
  const candidates = [];
  const distExists = await fs
    .stat(distDir)
    .then((s) => s.isDirectory())
    .catch(() => false);

  if (!cleaned || cleaned === "/") {
    if (distExists) {
      candidates.push(path.join(distDir, "index.html"));
    }
    candidates.push(path.join(__dirname, "index.html"));
  } else {
    if (distExists) {
      candidates.push(path.join(distDir, cleaned));
    }
    candidates.push(path.join(__dirname, cleaned));
    candidates.push(path.join(__dirname, "public", cleaned));
  }

  for (const filePath of candidates) {
    try {
      const stat = await fs.stat(filePath);
      if (stat.isFile()) {
        return filePath;
      }
    } catch {
      continue;
    }
  }

  return null;
}

const server = http.createServer(async (req, res) => {
  const method = req.method || "GET";
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/api/enquiries" && method === "POST") {
    try {
      const body = await readJsonBody(req);
      const name = String(body.name || "").trim();
      const email = String(body.email || "").trim();

      if (!name || !email) {
        return sendJson(res, 400, { ok: false, error: "name and email are required" });
      }

      await appendEnquiry({
        name,
        email,
        phone: String(body.phone || "").trim(),
        company: String(body.company || "").trim(),
        service: String(body.service || "").trim(),
        budget: String(body.budget || "").trim(),
        message: String(body.message || "").trim(),
      });

      return sendJson(res, 201, { ok: true });
    } catch {
      return sendJson(res, 500, { ok: false, error: "failed to save enquiry" });
    }
  }

  if (requestUrl.pathname === "/api/enquiries" && method === "GET") {
    try {
      await ensureDataFile();
      const raw = await fs.readFile(enquiriesFile, "utf8");
      const items = JSON.parse(raw);
      return sendJson(res, 200, { ok: true, data: items });
    } catch {
      return sendJson(res, 500, { ok: false, error: "failed to read enquiries" });
    }
  }

  if (method !== "GET" && method !== "HEAD") {
    sendJson(res, 405, { ok: false, error: "method not allowed" });
    return;
  }

  const filePath = await resolveStaticFile(requestUrl.pathname);
  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  try {
    const content = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(method === "HEAD" ? undefined : content);
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server Error");
  }
});

server.listen(PORT, async () => {
  await ensureDataFile();
  console.log(`Server running at http://localhost:${PORT}`);
});
