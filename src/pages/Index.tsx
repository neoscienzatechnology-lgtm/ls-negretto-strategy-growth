import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionsSection from "@/components/SolutionsSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";
import EllasMentorySection from "@/components/EllasMentorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainSection />
      <SolutionsSection />
      <AuthoritySection />
      <AboutSection />
      <EllasMentorySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
