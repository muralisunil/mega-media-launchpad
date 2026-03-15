import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-b border-border bg-background py-12">
      <div
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by ambitious brands worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-30 lg:gap-16">
          {["TechFlow", "GreenScale", "NovaEdge", "PulseHQ", "Arclight"].map((name) => (
            <span key={name} className="font-heading text-lg font-bold text-foreground lg:text-xl">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
