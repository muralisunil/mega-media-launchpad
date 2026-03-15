import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Can you support international growth?",
    a: "Absolutely. We run multi-market campaigns across North America, Europe, APAC, and LATAM — with localized strategy, multilingual content, and region-specific paid media expertise. Whether you're entering a new market or scaling globally, we have the frameworks and partnerships to make it happen.",
  },
  {
    q: "How do we measure the success of campaigns?",
    a: "We set clear KPIs before launch — traffic, leads, ROAS, CAC, LTV — and provide transparent, real-time dashboards so you always know exactly how every dollar performs. Monthly strategy calls keep you aligned on progress and next moves.",
  },
  {
    q: "My business is local only. What can you do for me?",
    a: "Local dominance is one of our specialties. From hyper-local SEO and Google Business Profile optimization to geo-targeted paid ads and community-focused social campaigns, we help local businesses own their market and become the go-to brand in their area.",
  },
  {
    q: "How long before I see results?",
    a: "Paid media campaigns typically show traction within the first 2–4 weeks. SEO and content strategies build momentum over 3–6 months, compounding over time. We set realistic timelines during onboarding and provide regular progress updates so there are no surprises.",
  },
  {
    q: "What makes Mega Media different from other agencies?",
    a: "We combine strategic depth with execution speed. No bloated teams, no generic playbooks — every strategy is custom-built for your business. You get senior-level attention, radical transparency, and a partner who's as invested in your growth as you are.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Every engagement is tailored. We don't believe in one-size-fits-all retainers. After our discovery session, we design a scope and budget that fits your goals — whether you need a full-funnel strategy or support on a specific channel.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="bg-background py-24">
      <div ref={ref} className="container mx-auto max-w-3xl px-4 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Questions we get asked most.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`rounded-xl border border-border bg-card px-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-card-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
