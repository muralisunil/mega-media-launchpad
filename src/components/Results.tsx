import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const results = [
  { metric: "+340%", label: "Organic Traffic", desc: "E-commerce brand scaled organic sessions in 8 months with technical SEO and content." },
  { metric: "5x", label: "Return on Ad Spend", desc: "SaaS startup achieved 5x ROAS through precision-targeted Google and LinkedIn campaigns." },
  { metric: "+220%", label: "Lead Generation", desc: "B2B services firm tripled qualified leads with integrated paid and organic strategy." },
];

const Results = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="bg-hero py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Results</p>
          <h2 className="font-heading text-3xl font-bold text-hero-foreground sm:text-4xl">
            Performance you can measure. Growth you can see.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {results.map((r, i) => (
            <div
              key={r.label}
              className={`gradient-primary overflow-hidden rounded-xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">{r.metric}</div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">{r.label}</p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
