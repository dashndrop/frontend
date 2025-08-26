import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/x.svg";
import threads from "@/assets/threads.svg";
import instagram from "@/assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
     
   
      
      <div className="container mx-auto px-4 py-12">
        
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center hover:bg-[#FF8C00]/80 transition-colors cursor-pointer">
            <img src={facebook} alt="Facebook" className="h-6 w-6" />
          </div>
          <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center hover:bg-[#FF8C00]/80 transition-colors cursor-pointer">
            <img src={twitter} alt="Twitter" className="h-6 w-6" />
          </div>
          <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center hover:bg-[#FF8C00]/80 transition-colors cursor-pointer">
            <img src={threads} alt="Email" className="h-6 w-6" />
          </div>
          <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center hover:bg-[#FF8C00]/80 transition-colors cursor-pointer">
            <img src={instagram} alt="Instagram" className="h-6 w-6" />
          </div>
        </div>
        
       
        <div className="flex justify-center space-x-8 mb-6 text-sm">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
          <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
        </div>
        
       
        <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Service</span>
          <span>|</span>
          <span>Lorem Ipsum</span>
          <span>|</span>
          <span>Lorem Ipsum</span>
        </div>
      </div>
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            Delivering More Than Just Food
          </p>
          <p className="text-xs mt-1 opacity-90">
            DASHNDROP© 2025 | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;