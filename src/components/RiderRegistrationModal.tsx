import { useState, useEffect } from "react";
import { X, Eye, EyeOff, User, Mail, Phone, Lock, Car, Hash, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RiderRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RiderRegistrationModal = ({ isOpen, onClose }: RiderRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    vehicle_type: "",
    vehicle_number: "",
    area_of_operation: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  // Handle escape key to close modal and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isLoading) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus the first input when modal opens
      const firstInput = document.querySelector('#email') as HTMLInputElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isLoading]);

  const vehicleTypes = [
    "Motorcycle",
    "Bicycle", 
  ];


  // Test function to check API endpoint (remove this in production)
  const testAPIEndpoint = async () => {
    try {
      console.log('Testing API endpoint...');
      
      // Test with sample data
      const testData = {
        email: "test@example.com",
        full_name: "Test User",
        phone_number: "1234567890",
        password: "testpass123",
        vehicle_type: "Motorcycle",
        vehicle_number: "ABC123"
      };
      
      // Use proxy in development, direct URL in production
      const testUrl = import.meta.env.DEV 
        ? '/api/v1/riders/register' 
        : 'https://dashndrop.onrender.com/api/v1/riders/register';
        
      const response = await fetch(testUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'client-id': 'rider',
        },
        body: JSON.stringify(testData),
      });
      
      console.log('API Test - Status:', response.status);
      console.log('API Test - Headers:', response.headers);
      
      if (response.ok) {
        const data = await response.json();
        console.log('API Test - Success Response:', data);
        alert(`API Test Successful! Status: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
      } else {
        const errorData = await response.text();
        console.log('API Test - Error Response:', errorData);
        alert(`API Test Failed! Status: ${response.status}\nError: ${errorData}`);
      }
      
      return response.status;
    } catch (error) {
      console.error('API Test Error:', error);
      alert(`API Test Error: ${error.message}`);
      return 'Error';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.full_name) {
      newErrors.full_name = "Full name is required";
    } else if (formData.full_name.length < 2) {
      newErrors.full_name = "Full name must be at least 2 characters";
    }

    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    if (!formData.vehicle_type) {
      newErrors.vehicle_type = "Vehicle type is required";
    }

    if (!formData.vehicle_number) {
      newErrors.vehicle_number = "Vehicle number is required";
    }

    if (!formData.area_of_operation) {
      newErrors.area_of_operation = "Area of operation is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return; // Prevent multiple submissions
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Use proxy in development, direct URL in production
      const url = import.meta.env.DEV 
        ? '/api/v1/riders/register' 
        : 'https://dashndrop.onrender.com/api/v1/riders/register';
      const headers = {
        'Content-Type': 'application/json',
        'client-id': 'rider',
      };
      console.log('Making request to:', url);
      console.log('Request headers:', headers);
      console.log('Request body:', formData);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        data = { message: 'Invalid response from server' };
      }

      if (response.ok) {
        setSuccess(true);
        
        // Reset form
        setFormData({
          email: "",
          full_name: "",
          phone_number: "",
          password: "",
          confirm_password: "",
          vehicle_type: "",
          vehicle_number: "",
          area_of_operation: ""
        });
        
       
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 5000);
      } else {
       
        console.log('Error response data:', data);
        console.log('Response status:', response.status);
        
        if (response.status === 404) {
          setErrors({ submit: "API endpoint not found. Please check the server configuration." });
        } else if (data.message) {
          setErrors({ submit: data.message });
        } else if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ submit: `Registration failed with status ${response.status}. Please try again.` });
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setErrors({ submit: "CORS error: Unable to connect to the server. Please check if the server allows requests from this domain." });
      } else if (error instanceof TypeError && error.message.includes('NetworkError')) {
        setErrors({ submit: "Network error: Please check your internet connection and try again." });
      } else {
        setErrors({ submit: "An unexpected error occurred. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({
        email: "",
        full_name: "",
        phone_number: "",
        password: "",
        confirm_password: "",
        vehicle_type: "",
        vehicle_number: "",
        area_of_operation: ""
      });
      setErrors({});
      setSuccess(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) {
          handleClose();
        }
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out">
      
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Register as a Rider</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            disabled={isLoading}
            className="h-8 w-8 rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-4">Welcome to DashnDrop! Your rider account has been created successfully.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700">
                    <strong>Next Steps:</strong> Admin will review your application and get back to you soon.
                  </p>
                </div>
              </div>
          ) : (
            <>
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="full_name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="full_name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    className={`pl-10 ${errors.full_name ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.full_name && <p className="text-sm text-red-600">{errors.full_name}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone_number" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone_number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone_number}
                    onChange={(e) => handleInputChange("phone_number", e.target.value)}
                    className={`pl-10 ${errors.phone_number ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.phone_number && <p className="text-sm text-red-600">{errors.phone_number}</p>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm_password" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirm_password}
                    onChange={(e) => handleInputChange("confirm_password", e.target.value)}
                    className={`pl-10 pr-10 ${errors.confirm_password ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirm_password && <p className="text-sm text-red-600">{errors.confirm_password}</p>}
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <Label htmlFor="vehicle_type" className="text-sm font-medium text-gray-700">
                  Vehicle Type
                </Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                  <Select
                    value={formData.vehicle_type}
                    onValueChange={(value) => handleInputChange("vehicle_type", value)}
                    disabled={isLoading}
                  >
                    <SelectTrigger className={`pl-10 ${errors.vehicle_type ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.vehicle_type && <p className="text-sm text-red-600">{errors.vehicle_type}</p>}
              </div>

              {/* Vehicle Number */}
              <div className="space-y-2">
                <Label htmlFor="vehicle_number" className="text-sm font-medium text-gray-700">
                  Vehicle Number/Plate
                </Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="vehicle_number"
                    type="text"
                    placeholder="Enter your vehicle number"
                    value={formData.vehicle_number}
                    onChange={(e) => handleInputChange("vehicle_number", e.target.value)}
                    className={`pl-10 ${errors.vehicle_number ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.vehicle_number && <p className="text-sm text-red-600">{errors.vehicle_number}</p>}
              </div>

              {/* Area of Operation */}
              <div className="space-y-2">
                <Label htmlFor="area_of_operation" className="text-sm font-medium text-gray-700">
                  Area of Operation
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="area_of_operation"
                    type="text"
                    placeholder="Enter your preferred area (e.g., Victoria Island, Lekki)"
                    value={formData.area_of_operation}
                    onChange={(e) => handleInputChange("area_of_operation", e.target.value)}
                    className={`pl-10 ${errors.area_of_operation ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.area_of_operation && <p className="text-sm text-red-600">{errors.area_of_operation}</p>}
              </div>

             
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

             
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Registering...</span>
                  </div>
                ) : (
                  "Register as Rider"
                )}
              </Button>

             
              <p className="text-xs text-gray-500 text-center">
                By registering, you agree to our{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RiderRegistrationModal;
