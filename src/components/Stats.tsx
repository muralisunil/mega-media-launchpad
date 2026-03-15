import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "3x", label: "Average ROI" },
  { value: "12M+", label: "Leads Generated" },
  { value: "24/7", label: "Dedicated Support" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-hero py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Mega Media</p>
          <h2 className="font-heading text-3xl font-bold text-hero-foreground sm:text-4xl">
            Numbers that speak louder than promises.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="font-heading text-4xl font-extrabold gradient-text sm:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <p className="mt-2 text-sm font-medium text-hero-foreground/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
