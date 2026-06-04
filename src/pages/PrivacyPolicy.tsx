import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import backgroundSvg from "@/assets/background.svg";
import shield from "@/assets/shield.svg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gray-800 relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundSvg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div
          className="container mx-auto px-4 py-20 relative z-10"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="max-w-2xl order-2 lg:order-1">
              <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-gray-300 text-lg">
                How we respect your privacy, and protect your information
              </p>
            </div>
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src={shield}
                alt=""
                aria-hidden="true"
                className="h-40 w-40 md:h-48 md:w-48 mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
