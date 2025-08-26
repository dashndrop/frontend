import { useEffect, useRef, useState } from "react";
import Track1 from "@/assets/Track 1.svg";
import Track2 from "@/assets/Track 2.svg";
import Track3 from "@/assets/Track 3.svg";
import Track4 from "@/assets/Track 4.svg";
import Track9 from "@/assets/Track 9.svg";
import Track8 from "@/assets/Track 8.svg";
import indicatorwhite from "@/assets/indicatorwhite.svg";

const FeaturesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();

  const features = [
    {
      phoneImage: Track1,
      title: "Real-Time Tracking",
      description: "Know exactly where your order is or your rider's location.",
      calloutPosition: "top-left"
    },
    {
      phoneImage: Track2,
      title: "Multiple Payment Options",
      description: "Wallet, cards, cash on delivery.",
      calloutPosition: "bottom-left"
    },
    {
      phoneImage: Track3,
      title: "Marketplace Variety",
      description: "From hot meals to home essentials.",
      calloutPosition: "top-right"
    },
    {
      phoneImage: Track3,
      title: "24/7 Customer Support",
      description: "We've got you covered. Reach us anytime or call for fast help.",
      calloutPosition: "bottom-right"
    },
    {
      phoneImage: Track9,
      title: "Smart Dashboard for Vendors",
      description: "Manage orders, inventory, earnings, and delivery—effortlessly.",
      calloutPosition: "top-left"
    },
    {
      phoneImage: Track8,
      title: "Easy Onboarding for Riders",
      description: "Riders earn more, on their own terms. Sign up in minutes, work anytime.",
      calloutPosition: "bottom-left"
    }
  ];

  // Smooth auto-scroll with requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let lastTime = 0;
    const scrollSpeed = 0.8; // Slower, smoother scrolling
    
    const smoothScroll = (currentTime: number) => {
      // Throttle to ~60fps
      if (currentTime - lastTime >= 16) {
        if (!isDragging && !isPaused) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          
          if (scrollContainer.scrollLeft >= maxScroll - 1) {
            // Smooth reset to start
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += scrollSpeed;
          }
        }
        lastTime = currentTime;
      }
      
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    animationRef.current = requestAnimationFrame(smoothScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isPaused]);

  // Handle pause/resume logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isDragging) {
      setIsPaused(true);
    } else if (isPaused && !isDragging) {
      // Resume after 3 seconds of inactivity
      timer = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isDragging, isPaused]);

  // Enhanced drag functionality with smoother movement
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    const container = scrollContainerRef.current;
    if (container) {
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const container = scrollContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Reduced multiplier for smoother dragging
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Enhanced touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    const container = scrollContainerRef.current;
    if (container) {
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsDragging(false);
    if (!isDragging) {
      // Don't immediately resume - let the useEffect handle the delay
    }
  };

  const getCalloutPosition = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute -top-4 -left-4";
      case "top-right":
        return "absolute -top-4 -right-4";
      case "bottom-left":
        return "absolute -bottom-4 -left-4";
      case "bottom-right":
        return "absolute -bottom-4 -right-4";
      default:
        return "absolute -top-4 -left-4";
    }
  };

  const getDashedLinePosition = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-px border-t-2 border-dashed border-white";
      case "top-right":
        return "absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-px border-t-2 border-dashed border-white";
      case "bottom-left":
        return "absolute -left-8 bottom-1/2 transform translate-y-1/2 w-8 h-px border-t-2 border-dashed border-white";
      case "bottom-right":
        return "absolute -right-8 bottom-1/2 transform translate-y-1/2 w-8 h-px border-t-2 border-dashed border-white";
      default:
        return "absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-px border-t-2 border-dashed border-white";
    }
  };

  return (
    <section className="py-20 bg-[#FF8000] relative overflow-hidden">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .smooth-scroll-container {
            will-change: scroll-position;
            -webkit-overflow-scrolling: touch;
          }
        `}
      </style>
      
      {/* Title section with container */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            DashnDrop Features
          </h2>
          <img 
            src={indicatorwhite} 
            alt="Active indicator" 
            className="mx-auto w-48"
          />
        </div>
        </div>
        
      {/* Full-width scrolling container with adequate spacing */}
      <div className="w-full mt-5">
        <div 
          ref={scrollContainerRef}
          className="flex gap-12 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing hide-scrollbar px-8 py-24 smooth-scroll-container transition-all duration-150 ease-out"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'auto'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveContainer}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 lg:w-96 relative transform transition-transform duration-300 ease-out hover:scale-105"
              style={{
                transform: `translateY(${index % 2 === 0 ? '-50px' : '50px'})`,
                willChange: 'transform'
              }}
            >
              {/* Phone mockup */}
          <div className="relative">
            <img 
                  src={feature.phoneImage} 
                  alt={feature.title}
                  className="w-full h-auto mx-auto transition-all duration-200 ease-out"
                  style={{ willChange: 'transform' }}
                />
                
                {/* Dashed line connector */}
                <div className={getDashedLinePosition(feature.calloutPosition)}></div>
                
                {/* Text callout */}
                <div className={`${getCalloutPosition(feature.calloutPosition)} bg-white rounded-lg p-4 shadow-lg max-w-48 transition-all duration-200 ease-out hover:shadow-xl`}>
                  <h4 className="font-bold text-sm text-gray-900 mb-2">
                        {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;