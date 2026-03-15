import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Discovery", desc: "We audit your brand, competitors, and market to identify growth levers." },
  { num: "02", title: "Strategy", desc: "A custom roadmap built around your goals, budget, and timeline." },
  { num: "03", title: "Execute", desc: "Our specialists launch and manage campaigns with surgical precision." },
  { num: "04", title: "Scale", desc: "We optimize, expand, and multiply what works to accelerate growth." },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Process</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            From insight to impact, in four steps.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <span className="font-heading text-6xl font-extrabold text-primary/10">{s.num}</span>
              <h3 className="mt-2 font-heading text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 bg-border lg:block" style={{ right: "-1rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
