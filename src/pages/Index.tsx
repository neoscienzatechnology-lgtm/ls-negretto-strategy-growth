import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import BenefitsSection from "@/components/BenefitsSection";
import MetodologiaSection from "@/components/MetodologiaSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ParaQuemSection />
      <BenefitsSection />
      <MetodologiaSection />
      <ComoFuncionaSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ApplicationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
