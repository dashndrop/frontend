import { companyContact } from "@/lib/companyContact";

type PolicySubsection = {
  label: string;
  intro?: string;
  paragraphs?: string[];
  items?: string[];
};

type PolicySection = {
  title: string;
  paragraphs?: string[];
  subsections?: PolicySubsection[];
  list?: string[];
  closingParagraphs?: string[];
};

const policySections: PolicySection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "Dash N Drop LTD (“Dash N Drop”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data.",
      "This Privacy Policy explains how we collect, use, store, share, and protect personal information when you use our website, mobile application, delivery platform, rider/driver platform, merchant platform, customer support channels, or any related services.",
      "By using Dash N Drop, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    title: "About Dash N Drop",
    paragraphs: [
      "Dash N Drop is a delivery and logistics platform that enables users to request, manage, and track deliveries, including parcel delivery, merchant deliveries, food or grocery delivery, courier services, and related logistics services.",
      "For the purpose of data protection laws, Dash N Drop LTD is the data controller for personal data collected through our platform, except where we process data strictly on behalf of another party.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    subsections: [
      {
        label: "a. Personal Identification Information",
        intro: "This may include:",
        items: [
          "Full name",
          "Phone number",
          "Email address",
          "Home, office, pickup, or delivery address",
          "Profile photo, where applicable",
          "Government-issued identification, where required for riders, drivers, vendors, or verification purposes",
        ],
      },
      {
        label: "b. Account Information",
        intro: "When you create or use an account, we may collect:",
        items: [
          "Login credentials",
          "Account preferences",
          "User type, such as customer, rider, driver, merchant, vendor, or business user",
          "Transaction and service history",
        ],
      },
      {
        label: "c. Delivery and Order Information",
        intro: "To provide delivery services, we may collect:",
        items: [
          "Pickup and drop-off locations",
          "Recipient name and phone number",
          "Delivery instructions",
          "Package details",
          "Order details",
          "Delivery status",
          "Proof of delivery, including signatures, photos, OTP confirmation, or recipient confirmation",
        ],
      },
      {
        label: "d. Location Information",
        intro: "Where necessary, we may collect location data to:",
        items: [
          "Match users with available riders or drivers",
          "Track active deliveries",
          "Provide estimated arrival times",
          "Improve routing and logistics operations",
          "Support safety, fraud prevention, and dispute resolution",
        ],
        paragraphs: [
          "Location data may be collected from the customer app, rider app, driver app, or merchant dashboard, depending on the service being used.",
        ],
      },
      {
        label: "e. Payment and Transaction Information",
        intro: "We may collect or process:",
        items: [
          "Payment references",
          "Transaction amounts",
          "Wallet balances, where applicable",
          "Bank account details for payouts to riders, vendors, or merchants",
          "Payment provider transaction IDs",
        ],
        paragraphs: [
          "We do not store full card details unless expressly stated. Card payments are typically processed by licensed third-party payment processors.",
        ],
      },
      {
        label: "f. Device and Technical Information",
        intro: "We may collect:",
        items: [
          "Device type",
          "IP address",
          "Browser type",
          "Operating system",
          "App version",
          "Device identifiers",
          "Log data",
          "Usage activity",
          "Cookies and similar tracking technologies",
        ],
      },
      {
        label: "g. Customer Support Information",
        intro: "When you contact us, we may collect:",
        items: [
          "Your complaint, enquiry, or feedback",
          "Call, chat, email, or support ticket records",
          "Evidence submitted for dispute resolution, such as screenshots, photos, receipts, or delivery confirmations",
        ],
      },
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: ["We use personal data to:"],
    list: [
      "Create and manage user accounts",
      "Process and fulfil delivery requests",
      "Connect customers, merchants, riders, drivers, and recipients",
      "Track deliveries and provide delivery updates",
      "Process payments, refunds, commissions, and payouts",
      "Verify users, riders, drivers, vendors, and merchants",
      "Prevent fraud, abuse, theft, or misuse of the platform",
      "Resolve complaints, delivery disputes, and support requests",
      "Improve our platform, services, routing, and user experience",
      "Send service notifications, delivery updates, and account alerts",
      "Send marketing messages, where permitted by law or with your consent",
      "Comply with legal, regulatory, tax, accounting, security, and law enforcement obligations",
    ],
  },
  {
    title: "Legal Basis for Processing Personal Data",
    paragraphs: [
      "We process personal data only where we have a lawful basis to do so. This may include:",
    ],
    list: [
      "Your consent",
      "Performance of a contract with you",
      "Compliance with legal obligations",
      "Our legitimate business interests",
      "Protection of vital interests, such as safety and emergency situations",
      "Performance of a task carried out in the public interest, where applicable",
    ],
    closingParagraphs: [
      "Where we rely on consent, you may withdraw your consent at any time, subject to legal, contractual, or operational limitations.",
    ],
  },
  {
    title: "Sharing of Personal Data",
    paragraphs: ["We may share your personal data with:"],
    subsections: [
      {
        label: "a. Riders, Drivers, Merchants, and Delivery Partners",
        paragraphs: [
          "We may share necessary delivery information, such as names, phone numbers, addresses, delivery instructions, and order details, to complete a delivery.",
        ],
      },
      {
        label: "b. Payment Processors and Financial Partners",
        paragraphs: [
          "We may share transaction data with payment gateways, banks, wallet providers, and payout partners to process payments and settlements.",
        ],
      },
      {
        label: "c. Technology and Service Providers",
        paragraphs: [
          "We may use third-party providers for hosting, cloud storage, analytics, maps, SMS, email, customer support, identity verification, security, and other platform services.",
        ],
      },
      {
        label: "d. Business Customers and Merchants",
        paragraphs: [
          "Where a merchant or business customer initiates or manages a delivery, relevant delivery data may be shared with that merchant or business customer.",
        ],
      },
      {
        label: "e. Regulators, Law Enforcement, and Public Authorities",
        paragraphs: [
          "We may disclose personal data where required by law, court order, regulatory request, fraud investigation, or lawful government authority request.",
        ],
      },
      {
        label: "f. Professional Advisers",
        paragraphs: [
          "We may share data with lawyers, auditors, accountants, insurers, and other professional advisers where necessary.",
        ],
      },
    ],
    closingParagraphs: ["We do not sell your personal data."],
  },
  {
    title: "Rider, Driver, and Merchant Data",
    paragraphs: [
      "If you register as a rider, driver, vendor, merchant, logistics partner, or business partner, we may collect additional information, including:",
    ],
    list: [
      "Identity documents",
      "Vehicle information",
      "Driver's licence",
      "Insurance details",
      "Guarantor or emergency contact information",
      "Bank account or payout information",
      "Background verification information",
      "Performance ratings",
      "Delivery completion records",
      "Incident and safety reports",
    ],
    closingParagraphs: [
      "This information is used for onboarding, verification, compliance, payment, safety, fraud prevention, and service quality monitoring.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Dash N Drop is not intended for use by children under the age of 18 without appropriate consent from a parent or guardian.",
      "We do not knowingly collect personal data from children. If we discover that we have collected personal data from a child without appropriate consent, we will take reasonable steps to delete such data.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    paragraphs: ["We may use cookies, pixels, analytics tools, and similar technologies to:"],
    list: [
      "Keep users logged in",
      "Remember preferences",
      "Improve website and app performance",
      "Understand how users interact with our platform",
      "Measure marketing effectiveness",
      "Detect fraud and security issues",
    ],
    closingParagraphs: [
      "You may control cookies through your browser settings, but disabling cookies may affect some platform functionality.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We keep personal data only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:",
    ],
    list: [
      "Providing our services",
      "Maintaining transaction and delivery records",
      "Resolving disputes",
      "Preventing fraud",
      "Meeting legal, tax, regulatory, accounting, and audit obligations",
    ],
    closingParagraphs: [
      "Where data is no longer required, we will delete, anonymise, or securely archive it, subject to applicable legal requirements.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We apply reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, disclosure, or destruction.",
      "These measures may include:",
    ],
    list: [
      "Access controls",
      "Encryption where appropriate",
      "Secure authentication",
      "System monitoring",
      "Staff access restrictions",
      "Data backup and recovery processes",
      "Vendor security controls",
    ],
    closingParagraphs: [
      "However, no electronic system is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "International Data Transfers",
    paragraphs: [
      "Some of our technology providers, cloud hosting providers, payment processors, or support tools may process data outside Nigeria.",
      "Where personal data is transferred outside Nigeria, we will take reasonable steps to ensure that appropriate safeguards are in place in accordance with applicable data protection laws.",
    ],
  },
  {
    title: "Your Data Protection Rights",
    paragraphs: ["Subject to applicable law, you may have the right to:"],
    list: [
      "Request access to your personal data",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your personal data",
      "Object to certain processing activities",
      "Withdraw consent where processing is based on consent",
      "Request restriction of processing",
      "Request data portability, where applicable",
      "Lodge a complaint with the Nigeria Data Protection Commission or other competent authority",
    ],
    closingParagraphs: [
      "To exercise your rights, contact us using the details in Section 17.",
    ],
  },
  {
    title: "Marketing Communications",
    paragraphs: [
      "We may send you promotional messages, offers, updates, or service announcements.",
      "You may opt out of marketing communications at any time by using the unsubscribe option, changing your notification settings, or contacting us directly.",
      "Even if you opt out of marketing messages, we may still send you important service-related messages, such as delivery updates, payment alerts, security notifications, and account notices.",
    ],
  },
  {
    title: "Third-Party Links and Services",
    paragraphs: [
      "Our platform may contain links to third-party websites, payment providers, merchant websites, or external services.",
      "We are not responsible for the privacy practices, security, or content of third-party platforms. You should review their privacy policies before providing them with personal data.",
    ],
  },
  {
    title: "Updates to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, technology, or business operations.",
      "Where changes are material, we may notify you through the app, website, email, SMS, or other reasonable means.",
      "Your continued use of Dash N Drop after an update means you accept the revised Privacy Policy.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions, complaints, or requests relating to this Privacy Policy or your personal data, please contact:",
      companyContact.legalName,
      `Email: ${companyContact.email}`,
      `Phone: ${companyContact.phones.join(" / ")}`,
      `Address: ${companyContact.address}`,
      "You may also contact us to request access, correction, deletion, or restriction of your personal data.",
    ],
  },
  {
    title: "Complaints",
    paragraphs: [
      "If you are not satisfied with how we handle your personal data or privacy request, you may contact us first so we can try to resolve the issue.",
      "You may also lodge a complaint with the relevant data protection authority in Nigeria, including the Nigeria Data Protection Commission.",
    ],
  },
];

const PrivacyPolicyContent = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {policySections.map((section, sectionIndex) => (
            <article key={section.title} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {sectionIndex + 1}. {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.subsections?.map((subsection) => (
                <div key={subsection.label} className="space-y-3">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {subsection.label}
                  </h3>
                  {subsection.intro && (
                    <p className="text-muted-foreground leading-relaxed">{subsection.intro}</p>
                  )}
                  {subsection.paragraphs?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {subsection.items && (
                    <ul className="list-disc pl-6 space-y-2">
                      {subsection.items.map((item, index) => (
                        <li key={index} className="text-muted-foreground leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.list && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.list.map((item, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.closingParagraphs?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
