import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load sections below the fold
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const WaitlistSection = lazy(() => import("@/components/WaitlistSection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const AppDownloadSection = lazy(() => import("@/components/AppDownloadSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HowItWorksSection />
        <FeaturesSection />
        <WaitlistSection />
        <WhyChooseSection />
        <AppDownloadSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
