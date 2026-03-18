import { useState } from "react";
import { Palette, X } from "lucide-react";

const themes = {
  "Red (Current)": {
    "--primary": "3 100% 62%",
    "--accent": "14 100% 62%",
    "--ring": "3 100% 62%",
    "--background": { light: "0 0% 98%", dark: "0 0% 4%" },
    "--card": { light: "0 0% 100%", dark: "0 0% 7%" },
    "--muted": { light: "0 0% 94%", dark: "0 0% 12%" },
    "--secondary": { light: "0 0% 94%", dark: "0 0% 12%" },
    "--border": { light: "0 0% 90%", dark: "0 0% 14%" },
    "--hero-bg": { light: "0 0% 6%", dark: "0 0% 3%" },
    gradient: "linear-gradient(135deg, hsl(3,100%,62%), hsl(14,100%,62%))",
  },
  "Ocean Blue": {
    "--primary": "210 100% 50%",
    "--accent": "195 100% 50%",
    "--ring": "210 100% 50%",
    "--background": { light: "210 30% 97%", dark: "215 40% 6%" },
    "--card": { light: "210 25% 100%", dark: "215 35% 10%" },
    "--muted": { light: "210 20% 93%", dark: "215 30% 14%" },
    "--secondary": { light: "210 20% 93%", dark: "215 30% 14%" },
    "--border": { light: "210 15% 88%", dark: "215 25% 18%" },
    "--hero-bg": { light: "215 40% 8%", dark: "215 50% 4%" },
    gradient: "linear-gradient(135deg, hsl(210,100%,50%), hsl(195,100%,50%))",
  },
  "Royal Purple": {
    "--primary": "270 80% 55%",
    "--accent": "290 80% 60%",
    "--ring": "270 80% 55%",
    "--background": { light: "270 20% 97%", dark: "275 30% 5%" },
    "--card": { light: "270 15% 100%", dark: "275 25% 9%" },
    "--muted": { light: "270 15% 93%", dark: "275 20% 13%" },
    "--secondary": { light: "270 15% 93%", dark: "275 20% 13%" },
    "--border": { light: "270 10% 88%", dark: "275 15% 16%" },
    "--hero-bg": { light: "275 30% 7%", dark: "275 40% 3%" },
    gradient: "linear-gradient(135deg, hsl(270,80%,55%), hsl(290,80%,60%))",
  },
  "Emerald Green": {
    "--primary": "160 84% 39%",
    "--accent": "170 80% 45%",
    "--ring": "160 84% 39%",
    "--background": { light: "155 20% 97%", dark: "160 30% 5%" },
    "--card": { light: "155 15% 100%", dark: "160 25% 8%" },
    "--muted": { light: "155 15% 93%", dark: "160 20% 12%" },
    "--secondary": { light: "155 15% 93%", dark: "160 20% 12%" },
    "--border": { light: "155 10% 88%", dark: "160 15% 16%" },
    "--hero-bg": { light: "160 30% 7%", dark: "160 40% 3%" },
    gradient: "linear-gradient(135deg, hsl(160,84%,39%), hsl(170,80%,45%))",
  },
  "Sunset Gold": {
    "--primary": "35 100% 55%",
    "--accent": "25 100% 55%",
    "--ring": "35 100% 55%",
    "--background": { light: "35 25% 97%", dark: "30 25% 5%" },
    "--card": { light: "35 20% 100%", dark: "30 20% 8%" },
    "--muted": { light: "35 15% 93%", dark: "30 15% 12%" },
    "--secondary": { light: "35 15% 93%", dark: "30 15% 12%" },
    "--border": { light: "35 10% 88%", dark: "30 10% 16%" },
    "--hero-bg": { light: "30 25% 7%", dark: "30 30% 3%" },
    gradient: "linear-gradient(135deg, hsl(35,100%,55%), hsl(25,100%,55%))",
  },
  "Electric Teal": {
    "--primary": "180 100% 40%",
    "--accent": "165 100% 42%",
    "--ring": "180 100% 40%",
    "--background": { light: "178 20% 97%", dark: "180 30% 5%" },
    "--card": { light: "178 15% 100%", dark: "180 25% 8%" },
    "--muted": { light: "178 15% 93%", dark: "180 20% 12%" },
    "--secondary": { light: "178 15% 93%", dark: "180 20% 12%" },
    "--border": { light: "178 10% 88%", dark: "180 15% 16%" },
    "--hero-bg": { light: "180 30% 7%", dark: "180 40% 3%" },
    gradient: "linear-gradient(135deg, hsl(180,100%,40%), hsl(165,100%,42%))",
  },
};

type ThemeName = keyof typeof themes;

const swatchColors: Record<ThemeName, string> = {
  "Red (Current)": "hsl(3,100%,62%)",
  "Ocean Blue": "hsl(210,100%,50%)",
  "Royal Purple": "hsl(270,80%,55%)",
  "Emerald Green": "hsl(160,84%,39%)",
  "Sunset Gold": "hsl(35,100%,55%)",
  "Electric Teal": "hsl(180,100%,40%)",
};

const ThemePicker = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeName>("Red (Current)");

  const applyTheme = (name: ThemeName) => {
    const t = themes[name];
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const mode = isDark ? "dark" : "light";

    root.style.setProperty("--primary", t["--primary"]);
    root.style.setProperty("--accent", t["--accent"]);
    root.style.setProperty("--ring", t["--ring"]);
    root.style.setProperty("--background", t["--background"][mode]);
    root.style.setProperty("--card", t["--card"][mode]);
    root.style.setProperty("--muted", t["--muted"][mode]);
    root.style.setProperty("--secondary", t["--secondary"][mode]);
    root.style.setProperty("--border", t["--border"][mode]);
    root.style.setProperty("--input", t["--border"][mode]);
    root.style.setProperty("--hero-bg", t["--hero-bg"][mode]);

    const style = document.getElementById("theme-gradient-override") || (() => {
      const el = document.createElement("style");
      el.id = "theme-gradient-override";
      document.head.appendChild(el);
      return el;
    })();
    style.textContent = `
      .gradient-primary { background: ${t.gradient} !important; }
      .gradient-text { background: ${t.gradient} !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; }
    `;
    setActive(name);
  };

  // Re-apply when light/dark toggles
  const observer = new MutationObserver(() => {
    if (active) applyTheme(active);
  });

      .gradient-primary { background: ${t.gradient} !important; }
      .gradient-text { background: ${t.gradient} !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; }
    `;
    setActive(name);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {open && (
        <div className="mb-3 rounded-xl border border-border bg-card p-4 shadow-2xl w-56">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Color Theme</p>
          <div className="space-y-2">
            {(Object.keys(themes) as ThemeName[]).map((name) => (
              <button
                key={name}
                onClick={() => applyTheme(name)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === name ? "bg-primary/10 text-foreground font-semibold" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <span
                  className="h-4 w-4 rounded-full shrink-0 border border-border"
                  style={{ background: swatchColors[name] }}
                />
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="gradient-primary h-12 w-12 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
      >
        {open ? <X className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default ThemePicker;
