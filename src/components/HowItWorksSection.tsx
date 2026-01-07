import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import LazyImage from "./LazyImage";
import how1 from "@/assets/how1.svg";
import how2 from "@/assets/how2.svg";
import how3 from "@/assets/how3.svg";
import indicatorSvg2 from "@/assets/indicator2.svg";

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);
  const steps = [
    {
      image: how1,
      title: "Browse. Tap. Delivered.",
      description: "Find your favorite restaurants, groceries, pharmacies, or local vendors. Place your order in minutes and track it live.",
      bgColor: "bg-white",
      textColor: "text-foreground"
    },
    {
      image: how2,
      title: "Sell More. Stress Less.",
      description: "List your products, reach new customers, and manage orders with ease on the vendor dashboard.",
      bgColor: "bg-[#FF8C00]",
      textColor: "text-white"
    },
    {
      image: how3,
      title: "Earn on Your Schedule.",
      description: "Get delivery requests, pick your time slots, and get paid fast. No vehicle? We've got options.",
      bgColor: "bg-white",
      textColor: "text-foreground"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <LazyImage 
            src={indicatorSvg2} 
            alt="Active indicator" 
            className="mx-auto w-200"
            loading="lazy"
          />
        </div>
        
        <div className="grid md:grid-cols-3 relative">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`${step.bgColor} border-none overflow-hidden relative transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                borderRadius: "1px",
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              <CardContent className="text-center" style={{paddingTop: "7rem", paddingLeft: "5rem", paddingRight: "5rem", paddingBottom: "7rem"}}>
                <div className={`flex justify-center mb-6 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                  <LazyImage 
                    src={step.image} 
                    alt={step.title}
                    style={{height: "11rem"}}
                    className="w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${step.textColor} transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                  {step.title}
                </h3>
                <p className={`${step.textColor} leading-relaxed transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${500 + index * 150}ms` }}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Decorative orange bars */}
          <div className={`absolute -bottom-4 -left-4 w-2 h-16 bg-primary transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} style={{ transitionDelay: '800ms', transformOrigin: 'bottom' }}></div>
          <div className={`absolute -top-4 -right-4 w-2 h-16 bg-primary transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} style={{ transitionDelay: '900ms', transformOrigin: 'top' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;