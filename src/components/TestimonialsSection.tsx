import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import indicatorSvg2 from "@/assets/indicator2.svg";
import six from "@/assets/66.svg";
import nine from "@/assets/99.svg";
import testimonials1 from "@/assets/testimonial1.svg";
import testimonials2 from "@/assets/testimonial2.svg";
import testimonials3 from "@/assets/testimonial3.svg";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      image: testimonials1,
      quote: "I can order food, medicine, and groceries all from one app — it's a game changer!",
      author: "Amaka O., Lagos"
    },
    {
      image: testimonials2,
      quote: "Since joining DashnDrop, our restaurant's online orders have tripled. Setup was easy and support is amazing",
      author: "Chef Tunde, Owner, ChopLife Kitchen"
    },
    {
      image: testimonials3,
      quote: "I love the flexibility. I choose when to work and get paid without delays.",
      author: "Kelechi A., DashnDrop Rider"
    }
  ];

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, testimonials.length]);

  // Auto-cycling with improved performance
  useEffect(() => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Don't start interval if paused
    if (isPaused) return;
    
    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
        return next;
      });
    }, 3000); // Change every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  return (
    <section 
      className="py-20 bg-white relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Navigation Arrow */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-12 w-12 rounded-full border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
          onClick={prevTestimonial}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Right Navigation Arrow */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="default" 
          size="icon" 
          className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          onClick={nextTestimonial}
          disabled={isAnimating}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands of Happy Users
          </h2>
          <img 
            src={indicatorSvg2} 
            alt="Active indicator" 
            className="mx-auto w-200"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Portrait Image */}
          <div className="relative">
            {/* Orange vertical bar on the right edge */}
            {/* <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary z-20"></div> */}
            
            {/* Orange square in top-left */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary z-20"></div>
            
            {/* Portrait Image */}
            <div className="relative">
              {/* Colored border background - positioned behind the image */}
              <div 
                className={`absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-primary rounded-2xl z-0 md:w-[11rem] md:h-[12rem] md:mr-[8rem] w-32 h-36 mr-8 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              ></div>
              
              {/* Main image */}
              <img 
                src={testimonials[currentTestimonial].image} 
                alt="Happy DashDrop user"
                className={`w-full max-w-sm mx-auto rounded-2xl relative z-10 shadow-2xl transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
              />
            </div>
          </div>
          
          {/* Right Column - Testimonial Content */}
          <div className="space-y-8 relative">
            {/* Main Heading */}
            <div className={`transition-all duration-500 ease-in-out delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <p className="text-lg text-foreground mb-8 font-medium">
                Real stories from people who use DashnDrop every day! customers, vendors, and riders.
              </p>
            </div>
            
            {/* Testimonial Card */}
            <div className={`relative transition-all duration-500 ease-in-out delay-200 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {/* Opening Quote Mark (66) */}
              <div className="absolute -top-8 -left-4 w-16 h-16 flex items-center justify-center z-10">
                <img
                  src={six}
                  alt="Opening quote mark"
                  className="w-16 h-16"
                />
              </div>

              {/* Testimonial Content */}
              <div className="p-6 ml-8">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <p className="text-sm text-muted-foreground text-right">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>

              {/* Closing Quote Mark (99) */}
              <div className="absolute -bottom-8 -right-4 w-16 h-16 flex items-center justify-center z-10">
                <img
                  src={nine}
                  alt="Closing quote mark"
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;