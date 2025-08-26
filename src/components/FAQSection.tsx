import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("General Questions");
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: boolean }>({
    "How do I sign up as a vendor?": true,
  });

  const categories = [
    "General Questions",
    "Customers Questions", 
    "Vendors Questions",
    "Riders Questions"
  ];

  const faqData = {
    "General Questions": [
      {
        question: "How do I sign up as a vendor?",
        answer: "Visit the vendor section and follow our quick onboarding process."
      },
      {
        question: "What's required to become a rider?",
        answer: "You need a valid ID, vehicle registration, and to complete our safety training."
      },
      {
        question: "What can I order?",
        answer: "Food, groceries, medicine, and other essential items from local vendors."
      },
      {
        question: "How does delivery work?",
        answer: "Our riders pick up your order and deliver it to your location within the estimated time."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, card, and mobile money payments."
      },
      {
        question: "Is there a delivery fee?",
        answer: "Delivery fees vary based on distance and are clearly shown before checkout."
      },
      {
        question: "How can I track my order?",
        answer: "You can track your order in real-time through the app."
      }
    ],
    "Customers Questions": [
      {
        question: "How do I place my first order?",
        answer: "Download the app, create an account, and browse available vendors in your area."
      },
      {
        question: "Can I schedule orders in advance?",
        answer: "Yes, you can schedule orders up to 24 hours in advance."
      },
      {
        question: "What if my order is wrong?",
        answer: "Contact our support team immediately and we'll resolve the issue."
      }
    ],
    "Vendors Questions": [
      {
        question: "How do I get started as a vendor?",
        answer: "Complete our vendor application form and we'll guide you through the setup process."
      },
      {
        question: "What are the commission rates?",
        answer: "Commission rates vary by category and are clearly outlined in your vendor agreement."
      },
      {
        question: "How do I manage my menu?",
        answer: "Use our vendor dashboard to add, edit, and manage your menu items."
      }
    ],
    "Riders Questions": [
      {
        question: "How do I become a rider?",
        answer: "Apply through our rider portal and complete the required verification process."
      },
      {
        question: "What are the earnings like?",
        answer: "Earnings depend on delivery distance, time, and bonuses for peak hours."
      },
      {
        question: "What equipment do I need?",
        answer: "A reliable vehicle, smartphone, and our rider app are required."
      }
    ]
  };

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Navigation and Intro */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Frequently Asked<br />Questions
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at dapibus elit, in cursus eros.
              </p>
            </div>

            {/* Question Categories */}
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="space-y-6">
              {currentFAQs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <button
                    onClick={() => toggleQuestion(faq.question)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className={`text-lg font-medium transition-colors duration-300 ${
                      expandedQuestions[faq.question] 
                        ? "text-orange-500" 
                        : "text-gray-800 group-hover:text-gray-600"
                    }`}>
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {expandedQuestions[faq.question] ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {expandedQuestions[faq.question] && (
                    <div className="mt-4 pl-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default FAQSection;