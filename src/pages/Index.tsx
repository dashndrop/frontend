import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <WaitlistSection />
      <WhyChooseSection />
      <AppDownloadSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
