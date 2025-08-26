import { Button } from "@/components/ui/button";
import { Play, Apple } from "lucide-react";
import { useState, useEffect } from "react";
import deliveryHero from "@/assets/deliveryhero.png";
import backgroundSvg from "@/assets/background.svg";
import boxSvg from "@/assets/box.svg";
import change1 from "@/assets/box.svg";
import change2 from "@/assets/change2.svg";
import change3 from "@/assets/change3.svg";
import change4 from "@/assets/change4.svg";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/apple.svg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const changeImages = [change1, change2, change3, change4];

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % changeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [changeImages.length]);

  return (
    <section className="relative text-white overflow-visible">
      {/* Background SVG */}
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${backgroundSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 lg:py-10 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className={`space-y-8 order-1 transition-all duration-700 ease-out delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            <div className={`mb-8 transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <img 
                src={changeImages[currentImageIndex]} 
                alt="Box icon" 
                className="transition-all duration-500 ease-in-out"
                style={{
                  maxWidth: '150%',
                }}
              />
            </div>
            
            <div className={`space-y-6 transition-all duration-700 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Delivering More Than Just Food
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                From meals to medicine, groceries to packages — DashnDrop connects you to what you need, wherever you are.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
              style={{
                borderRadius: "1px",
                background: "#55555591",
                
                padding: "32px",
                color: "white",
              }}
                variant="secondary" 
                className=" text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-8 py-6 text-lg rounded-lg flex items-center gap-3"
              >
                <img 
                src={playstore} 
                alt="playstore icon" 
                
               
              />
                Download on Playstore
              </Button>
              <Button 
              style={{
                borderRadius: "1px",
                background: "#55555591",
                
                padding: "32px",
                color: "white",
              }}
                variant="secondary" 
                className=" text-white hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-8 py-6 text-lg rounded-lg flex items-center gap-3"
              >
                <img 
                src={appstore} 
                alt="appstore icon" 
                />
                Download on Appstore
              </Button>
            </div>
          </div>
          
          {/* Right Column - Scooter Illustration */}
          <div className={`relative order-2 lg:order-2 lg:flex lg:justify-end transition-all duration-700 ease-out delay-600 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-black/20 rounded-full blur-lg"></div>
              
              {/* Scooter Image */}
              <img 
                src={deliveryHero} 
                alt="Delivery person on scooter"
                className="w-full h-auto max-w-none lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl relative z-10"
                style={{
                  transform: 'translateY(30%)',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;