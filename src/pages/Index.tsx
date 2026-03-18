import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ThemePicker from "@/components/ThemePicker";

const Index = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <SocialProof />
      <Services />
      <Stats />
      <Process />
      <Results />
      <FAQ />
      <EnquiryForm />
      <Footer />
      <Toaster />
      <ThemePicker />
    </div>
  );
};

export default Index;
