import { Button } from "@/components/ui/button";
import phoneApp from "@/assets/handandphone.svg";
import qrcode from "@/assets/qr.svg";

import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/apple.svg";

const AppDownloadSection = () => {
  return (
    <section className="bg-section-bg relative overflow-hidden">
      <div className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div className="relative min-h-[600px]">
            <div className="w-80 h-80 bg-orange-100 rounded-full absolute -top-20 -left-20 opacity-50"></div>
            <div className="w-60 h-60 bg-primary/20 rounded-full absolute top-32 left-48 opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0">
              <img 
                src={phoneApp} 
                alt="DashDrop mobile app"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div
            className="space-y-10 mb-10"
            style={{
              background: "rgba(255,255,255,0.15)",
             
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
              backdropFilter: "blur(4px)",
              padding: "2.5rem 2rem",
            }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
                Get the DashDrop App
              </h2>
              <p className="text-xl text-muted-foreground text-center">
                Order, manage, and deliver — all in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                style={{
                  borderRadius: "1px",
                  background: "#0C0C0C",
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
                  background: "#0C0C0C",
                  padding: "32px",
                  color: "#FFFFFF",
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
            
            <div className="border-t border-gray-300 pt-8">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Or scan below to download
              </p>
              <div className="flex justify-center">
                <div className=" flex items-center justify-center">
                  <img 
                    src={qrcode} 
                    alt="QR code" 
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;