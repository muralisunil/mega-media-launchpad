import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Zap, Eye, Handshake } from "lucide-react";

const pledges = [
  {
    icon: Zap,
    title: "Hungry > Comfortable",
    description:
      "We don't coast on retainers. Every campaign gets the energy of a team with something to prove.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No vanity metrics, no fluff reports. You see exactly what we see — real numbers, real talk.",
  },
  {
    icon: Handshake,
    title: "No Lock-In Contracts",
    description:
      "We earn your business every month. Stay because the results speak, not because of fine print.",
  },
  {
    icon: Shield,
    title: "Founder-Led Attention",
    description:
      "You won't be passed to a junior account manager. Your strategy gets senior-level focus from day one.",
  },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-hero py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Mega Media
          </p>
          <h2 className="font-heading text-3xl font-bold text-hero-foreground sm:text-4xl">
            Big agency results.{" "}
            <span className="gradient-text">Small agency heart.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-hero-foreground/60">
            We built Mega Media because brands deserve a partner that's all-in —
            not an account number in a revolving door.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pledges.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl border border-border/40 bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
              }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-hero-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hero-foreground/50">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
