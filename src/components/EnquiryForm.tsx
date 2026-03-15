import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const EnquiryForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const submission = { ...data, service, budget, submittedAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("enquiries") || "[]");
    localStorage.setItem("enquiries", JSON.stringify([...existing, submission]));

    toast({
      title: "Inquiry Received!",
      description: "We'll get back to you within 24 hours.",
    });

    reset();
    setService("");
    setBudget("");
  };

  return (
    <section id="contact" className="bg-hero py-24">
      <div ref={ref} className="container mx-auto max-w-2xl px-4 lg:px-8">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in Touch</p>
          <h2 className="font-heading text-3xl font-bold text-hero-foreground sm:text-4xl">
            Let's build something extraordinary.
          </h2>
          <p className="mt-4 text-sm text-hero-foreground/50">
            Fill out the form below and our team will reach out within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`glass rounded-2xl p-8 transition-all duration-700 sm:p-10 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Input
                placeholder="Full Name *"
                {...register("name", { required: true })}
                className={`border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground placeholder:text-hero-foreground/30 ${errors.name ? "border-destructive" : ""}`}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address *"
                {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                className={`border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground placeholder:text-hero-foreground/30 ${errors.email ? "border-destructive" : ""}`}
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                {...register("phone")}
                className="border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground placeholder:text-hero-foreground/30"
              />
            </div>
            <div>
              <Input
                placeholder="Company Name"
                {...register("company")}
                className="border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground placeholder:text-hero-foreground/30"
              />
            </div>
            <div>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground data-[placeholder]:text-hero-foreground/30">
                  <SelectValue placeholder="Service Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO & Search</SelectItem>
                  <SelectItem value="paid">Paid Media & PPC</SelectItem>
                  <SelectItem value="social">Social Media Marketing</SelectItem>
                  <SelectItem value="content-creation">Content Creation</SelectItem>
                  <SelectItem value="content-strategy">Content Strategy</SelectItem>
                  <SelectItem value="ai">AI Optimization</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="analytics">Analytics & Reporting</SelectItem>
                  <SelectItem value="influencer">Influencer Marketing</SelectItem>
                  <SelectItem value="international">International SEO & Localization</SelectItem>
                  <SelectItem value="brand">Brand Strategy & Identity</SelectItem>
                  <SelectItem value="cro">Conversion Rate Optimization</SelectItem>
                  <SelectItem value="full">Full-Service Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground data-[placeholder]:text-hero-foreground/30">
                  <SelectValue placeholder="Monthly Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-3k">$1,000 – $3,000</SelectItem>
                  <SelectItem value="3k-5k">$3,000 – $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                  <SelectItem value="10k+">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5">
            <Textarea
              placeholder="Tell us about your project..."
              rows={4}
              {...register("message")}
              className="border-hero-foreground/10 bg-hero-foreground/5 text-hero-foreground placeholder:text-hero-foreground/30"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="gradient-primary mt-6 flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
