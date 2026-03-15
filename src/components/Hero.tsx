import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero pt-16">
      {/* Gradient orb */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />

      <div
        ref={ref}
        className={`container relative z-10 mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-hero-foreground/70">San Diego's Premier Digital Agency</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-hero-foreground sm:text-5xl lg:text-7xl">
            Where Brands Scale.{" "}
            <span className="gradient-text">Where Markets Move.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-hero-foreground/60">
            We engineer data-driven digital strategies that transform ambitious brands into market leaders — across every channel, every market, every metric that matters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="gradient-primary group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/10 px-7 py-3.5 text-sm font-semibold text-hero-foreground/80 transition-colors hover:border-hero-foreground/20 hover:text-hero-foreground"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
