import { Button } from "@/components/ui/button";
import { Package, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import indicatorSvg from "@/assets/indicator.svg";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Closing menu
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      // Opening menu
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <img 
                src={logo} 
                alt="Box icon" 
                style={{
                  maxWidth: '100%',
                }}
                className=""
              />
           
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="relative font-medium transition-colors"
          >
            <span className={location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
              HOME
            </span>
            {location.pathname === "/" && (
              <img 
                src={indicatorSvg} 
                alt="Active indicator" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 "
              />
            )}
          </Link>
          <Link 
            to="/faq" 
            className="relative font-medium transition-colors"
          >
            <span className={location.pathname === "/faq" ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
              FAQs
            </span>
            {location.pathname === "/faq" && (
              <img 
                src={indicatorSvg} 
                alt="Active indicator" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              />
            )}
          </Link>
          <Link 
            to="/contact" 
            className="relative font-medium transition-colors"
          >
            <span className={location.pathname === "/contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
              CONTACT US
            </span>
            {location.pathname === "/contact" && (
              <img 
                src={indicatorSvg} 
                alt="Active indicator" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              />
            )}
          </Link>
        </nav>
        
        {/* Desktop Download App Button */}
        <Button 
          variant="default" 
          className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 px-6"
        >
          Download App
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden transition-all duration-300 hover:scale-110"
          onClick={toggleMobileMenu}
        >
          <Menu className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {(isMobileMenuOpen || isAnimating) && (
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-out ${
          isMobileMenuOpen && !isAnimating ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-0'
        }`}>
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Mobile Menu Header */}
            <div className={`flex items-center justify-between p-4 border-b border-border transition-all duration-500 ease-out delay-100 ${
              isMobileMenuOpen && !isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <div className="flex items-center space-x-2">
                <img 
                  src={logo} 
                  alt="DashnDrop Logo" 
                  className="h-8 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                className="transition-all duration-300 hover:scale-110 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Menu Navigation */}
            <nav className="p-4 space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/faq", label: "FAQs" },
                { path: "/contact", label: "Contact US" }
              ].map((item, index) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block py-3 px-4 rounded-lg transition-all duration-500 ease-out hover:scale-105 ${
                    location.pathname === item.path 
                      ? "bg-primary text-white shadow-lg transform scale-105" 
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                  }`}
                  onClick={closeMobileMenu}
                  style={{
                    transitionDelay: `${200 + (index * 100)}ms`
                  }}
                >
                  <span className={`transition-all duration-300 ${
                    isMobileMenuOpen && !isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Download App Button */}
            <div className={`p-4 border-t border-border transition-all duration-500 ease-out delay-500 ${
              isMobileMenuOpen && !isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                variant="default" 
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Download App
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute bottom-4 right-4 transition-all duration-700 ease-out delay-600 ${
              isMobileMenuOpen && !isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;