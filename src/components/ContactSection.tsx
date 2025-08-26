import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      {/* Top Section with Orange Accent */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex items-center">
          <div className="w-2 h-16 bg-orange-500 mr-6"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              We're here for Users, Vendors & Riders alike.
            </h2>
            <p className="text-gray-600">Lorem ipsum dolor expensive.</p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Need Help? Let's Talk.</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white appearance-none">
                  <option>General</option>
                  <option>Support</option>
                  <option>Billing</option>
                  <option>Vendor</option>
                  <option>Rider</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Type here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white resize-none"
                ></textarea>
              </div>
              <div className="text-right">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="bg-orange-500 p-8 rounded-lg relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                <p className="text-orange-100">Lorem ipsum dolor expensive.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+234 700 DASHNDROP</span>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+234 800 DASHNDROP</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>support@dashndrop.com</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>vendors@dashndrop.com</span>
                </div>
                <div className="flex items-center text-white">
                  {/* <Mail className="h-5 w-5 mr-3" /> */}
                  
                  <span>riders@dashndrop.com</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Lagos Nigeria</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Stay in Touch</h4>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white  flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="w-10 h-10 bg-white  flex items-center justify-center">
                    <Twitter className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="w-10 h-10 bg-white  flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              </div>

              <div className=" p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Urgent? Can't wait</h4>
                <p className="text-blue-100 mb-3">Chat with one of our customer care Agent <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3">
                  Here
                </Button></p>
               
              </div>
            </div>
            
            {/* Background graphic - Person running silhouette */}
            <div className="absolute bottom-0 right-0 opacity-20">
              <User className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;