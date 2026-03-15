import { Search, Target, Share2, PenTool, Code, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Search, title: "SEO & Search", desc: "Dominate organic rankings with data-driven strategies that drive qualified traffic and long-term growth." },
  { icon: Target, title: "Paid Media & PPC", desc: "Maximize ROI with precision-targeted campaigns across Google, Meta, and programmatic channels." },
  { icon: Share2, title: "Social Media", desc: "Build engaged communities and convert followers into customers with strategic social content." },
  { icon: PenTool, title: "Content Strategy", desc: "Craft compelling narratives that position your brand as the authority in your industry." },
  { icon: Code, title: "Web Development", desc: "High-performance websites engineered for conversion, speed, and seamless user experience." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Transparent, real-time insights so you see exactly where every dollar delivers impact." },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="bg-background py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`mb-16 max-w-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Do</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Full-spectrum digital marketing, executed with precision.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
