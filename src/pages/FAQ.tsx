import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Play, Apple, QrCode, Facebook, Twitter, Instagram, Phone, Mail, MapPin, User, Package } from "lucide-react";
import backgroundSvg from "@/assets/background.svg";
import question from "@/assets/question.svg";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import AppDownloadSection from "@/components/AppDownloadSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      
      <section className="bg-gray-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10" style={{marginTop: "5rem", marginBottom: "5rem"}}>
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="max-w-2xl order-2 lg:order-1">
              <h1 className="text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <img src={question} alt="question" className="h-32 w-32 text-gray-400 mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />

      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default FAQ;
