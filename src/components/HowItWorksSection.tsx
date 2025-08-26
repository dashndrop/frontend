import { Card, CardContent } from "@/components/ui/card";
import how1 from "@/assets/how1.svg";
import how2 from "@/assets/how2.svg";
import how3 from "@/assets/how3.svg";
import indicatorSvg2 from "@/assets/indicator2.svg";

const HowItWorksSection = () => {
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <img 
                src={indicatorSvg2} 
                alt="Active indicator" 
                className="mx-auto w-200"

              />
        </div>
        
        <div className="grid md:grid-cols-3 relative">
          {steps.map((step, index) => (
            <Card key={index} className={`${step.bgColor}  border-none overflow-hidden relative`} style={{borderRadius: "1px"}}>
              <CardContent className="text-center" style={{paddingTop: "7rem", paddingLeft: "5rem", paddingRight: "5rem", paddingBottom: "7rem"}}>
                <div className="flex justify-center mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    style={{height: "11rem"}}
                    className=" w-auto object-contain"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${step.textColor}`}>
                  {step.title}
                </h3>
                <p className={`${step.textColor} leading-relaxed`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Decorative orange bars */}
          <div className="absolute -bottom-4 -left-4 w-2 h-16 bg-primary"></div>
          <div className="absolute -top-4 -right-4 w-2 h-16 bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;