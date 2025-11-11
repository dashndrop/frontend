import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import waitlistBg from "@/assets/waitlistbg.jpg";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/x.svg";
import threads from "@/assets/threads.svg";
import instagram from "@/assets/instagram.svg";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successData, setSuccessData] = useState<{ email: string; created_at: string } | null>(null);
  const [error, setError] = useState("");

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target launch date to January 12th, 2026
  const targetDate = new Date('2026-01-12T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const endpoint = import.meta.env.DEV
        ? "/api/v1/restaurants/waitlist"
        : "https://dashndrop.onrender.com/api/v1/restaurants/waitlist";

      const url = `${endpoint}?email=${encodeURIComponent(email)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "client-id": "restaurant",
        },
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null);

        if (response.status === 422 && errorPayload?.detail) {
          const validationMessage = errorPayload.detail
            .map((item: { msg: string }) => item.msg)
            .join("\n");
          setError(validationMessage || "Please provide a valid email address.");
        } else {
          setError(
            errorPayload?.detail?.message ||
              errorPayload?.message ||
              `Unable to join the waitlist (status ${response.status}). Please try again.`
          );
        }
        return;
      }

      const data = await response.json();

      setSuccessData({
        email: data.email ?? email,
        created_at: data.created_at ?? new Date().toISOString(),
      });
      setSubmitSuccess(true);
      setEmail("");

      setTimeout(() => {
        setSubmitSuccess(false);
        setSuccessData(null);
      }, 7000);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
        setError("Network error: Unable to reach the server. Please check your connection and try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section 
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${waitlistBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/30 shadow-2xl p-8 lg:p-16" style={{ backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)' }}>
            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-bold text-center text-gray-900 mb-8 leading-tight">
              Our new app is<br />on the way
            </h2>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-3 lg:gap-6 mb-8 flex-wrap">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="bg-primary w-20 h-20 lg:w-28 lg:h-28 rounded-none flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <span className="text-sm lg:text-base font-semibold text-gray-900 mt-3 uppercase tracking-wide">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-primary w-20 h-20 lg:w-28 lg:h-28 rounded-none flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <span className="text-sm lg:text-base font-semibold text-gray-900 mt-3 uppercase tracking-wide">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-primary w-20 h-20 lg:w-28 lg:h-28 rounded-none flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <span className="text-sm lg:text-base font-semibold text-gray-900 mt-3 uppercase tracking-wide">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="bg-primary w-20 h-20 lg:w-28 lg:h-28 rounded-none flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <span className="text-sm lg:text-base font-semibold text-gray-900 mt-3 uppercase tracking-wide">
                  Seconds
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-800 text-base lg:text-lg mb-8 font-medium">
              Sign up to be the first to know when it launches
            </p>

            {/* Email Form */}
            {submitSuccess ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center animate-fade-in mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">You're on the waitlist!</h3>
                {successData && (
                  <div className="text-sm text-green-700 space-y-1">
                    <p>
                      <strong>Email:</strong> {successData.email}
                    </p>
                    <p>
                      <strong>Joined:</strong> {new Date(successData.created_at).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mb-8">
                {/* Combined Input and Button */}
                <div className="flex bg-white rounded-none shadow-lg overflow-hidden">
                  <Input
                    type="email"
                    placeholder="Write Email Here...."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className="flex-1 h-16 px-6 text-lg bg-white border-0 focus:ring-0 focus:outline-none rounded-none"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-16 px-12 lg:px-16 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-none border-0 shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="text-red-600 text-sm mt-3 text-center font-medium">{error}</p>
                )}
              </form>
            )}

            {/* Social Media Icons */}
            <div className="flex justify-center gap-3">
              <a
                href="https://facebook.com/dashndrop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transform transition-all hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/dashndrop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transform transition-all hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <img src={twitter} alt="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="https://threads.net/dashndrop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transform transition-all hover:scale-110 shadow-lg"
                aria-label="Threads"
              >
                <img src={threads} alt="Threads" className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/dashndrop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transform transition-all hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;

