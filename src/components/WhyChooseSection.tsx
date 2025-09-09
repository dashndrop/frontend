import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RiderRegistrationModal from "./RiderRegistrationModal";
import six from "@/assets/66.svg";
import nine from "@/assets/99.svg";
import indicatorlong from "@/assets/indicatorlong.svg";
import why1 from "@/assets/why1.svg";
import why2 from "@/assets/why2.svg";
import why3 from "@/assets/why3.svg";
import why4 from "@/assets/why4.svg";
import why5 from "@/assets/why5.svg";
import why6 from "@/assets/why6.svg";
import why7 from "@/assets/why7.svg";
import why8 from "@/assets/why8.svg";

const WhyChooseSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isRiderModalOpen, setIsRiderModalOpen] = useState(false);

  const mainBenefits = [
    "Trusted by vendors, loved by users, and driven by reliable riders",
    "Consistent earnings for riders, zero listing fees for vendors, and fast delivery for users.",
    "We're building a local ecosystem — not just a service."
  ];

  const vendorBenefits = [
    "Get your store online in minutes",
    "Access marketing tools and analytics",
    "On-time payments and dedicated support"
  ];

  const riderBenefits = [
    "Flexible hours",
    "Low commission cuts", 
    "Get paid weekly or instantly"
  ];

  const testimonials = [
    {
      quote: "Since joining DashnDrop,I've grown my customer base by 40%.",
      author: "A local food vendor"
    },
    // {
    //   quote: "The best delivery platform I've ever used. Fast, reliable, and customer-focused.",
    //   author: "A satisfied customer"
    // },
    // {
    //   quote: "As a rider, I earn more with DashnDrop than any other platform.",
    //   author: "A delivery rider"
    // }
  ];

  const sections = [
    {
      title: "Why Choose DashnDrop? | Riders",
      subtitle: "Earn Fast. Deliver Easy.",
      images: [why7, why8, why3],
      benefits: riderBenefits,
      showTestimonial: false,
      ctaButton: "Register as a Rider"
    },
    {
      title: "Why Choose DashnDrop?",
      subtitle: "One App. Endless Possibilities.",
      images: [why1, why2, why3],
      benefits: mainBenefits,
      showTestimonial: true,
      ctaButton: null
    },
    {
      title: "Why Choose DashnDrop? | Vendors",
      subtitle: "Grow Your Business with DashnDrop",
      images: [why4, why5, why6],
      benefits: vendorBenefits,
      showTestimonial: false,
      ctaButton: "Register as a Vendor"
    },
   
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSection = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSection();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, currentSection]);

  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section 
      className="py-20 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          <div className="space-y-8">
            <div className={`transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h2 className="text-4xl lg:text-4xl font-bold text-foreground mb-6 relative">
                <span className="relative z-10">
                  {sections[currentSection].title}
                </span>
                <img
                  src={indicatorlong}
                  alt="Title underline"
                  className="absolute -bottom-2 left-0 w-90 h-auto z-0"
                />
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {sections[currentSection].subtitle}
              </p>
            </div>

           
            <div className={`space-y-4 transition-all duration-300 ease-in-out delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {sections[currentSection].benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 transition-all duration-300 ease-in-out"
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

           
            
            {sections[currentSection].showTestimonial && (
              <div className={`relative transition-all duration-300 ease-in-out delay-200 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              
                <div className="absolute -top-8 -left-4 w-16 h-16 flex items-center justify-center z-10 ">
                  <img
                    src={six}
                    alt="Opening quote mark"
                    className="w-16 h-16"
                  />
                </div>

                
                <div className="p-6 ml-8">
                  <p className="text-lg text-foreground mb-4 italic leading-relaxed text-center">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    — {testimonials[currentTestimonial].author}
                  </p>
                </div>

               
                <div className="absolute -bottom-8 -right-4 w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src={nine}
                    alt="Closing quote mark"
                    className="w-16 h-16"
                  />
                </div>
              </div>
            )}

           
            
            {sections[currentSection].ctaButton && (
              <div className={`pt-4 transition-all duration-300 ease-in-out delay-200 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                 <Button 
              style={{
                borderRadius: "1px",
                background: "#7D7D7D",
                
                padding: "32px",
                color: "#FFFFFF",
              }}
                variant="secondary" 
                className=" text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-8 py-6 text-lg rounded-lg flex items-center gap-3"
                onClick={() => {
                  if (sections[currentSection].ctaButton === "Register as a Rider") {
                    setIsRiderModalOpen(true);
                  }
                 
                }}
              >
               
               
             
               {sections[currentSection].ctaButton}
              </Button>
               
              </div>
            )}
          </div>

         
          <div className="relative">
           
            <div className={`flex gap-4 mb-4 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="w-1/2 aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={sections[currentSection].images[0]} 
                  alt="Section image 1"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    console.error('Failed to load image:', sections[currentSection].images[0]);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="w-1/2 aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={sections[currentSection].images[1]} 
                  alt="Section image 2"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    console.error('Failed to load image:', sections[currentSection].images[1]);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            
            <div className={`w-full aspect-[2/1] bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out delay-100 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <img 
                src={sections[currentSection].images[2]} 
                alt="Section image 3"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  console.error('Failed to load image:', sections[currentSection].images[2]);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

         
            <div className={`flex items-center justify-center space-x-4 mt-6 transition-all duration-300 ease-in-out delay-200 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                onClick={prevSection}
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-12 w-12 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                onClick={nextSection}
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
     
      <RiderRegistrationModal 
        isOpen={isRiderModalOpen}
        onClose={() => setIsRiderModalOpen(false)}
      />
    </section>
  );
};

export default WhyChooseSection;