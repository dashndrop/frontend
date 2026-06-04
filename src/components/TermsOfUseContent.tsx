import { Link } from "react-router-dom";
import { companyContact } from "@/lib/companyContact";

type TermsSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  secondaryListIntro?: string;
  secondaryList?: string[];
  closingParagraphs?: string[];
  linkPhrase?: { phrase: string; href: string };
};

const renderParagraph = (text: string, linkPhrase?: TermsSection["linkPhrase"]) => {
  if (!linkPhrase || !text.includes(linkPhrase.phrase)) {
    return text;
  }

  const parts = text.split(linkPhrase.phrase);
  return (
    <>
      {parts[0]}
      <Link to={linkPhrase.href} className="text-primary hover:underline">
        {linkPhrase.phrase}
      </Link>
      {parts.slice(1).join(linkPhrase.phrase)}
    </>
  );
};

const termsSections: TermsSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "These Terms of Use (“Terms”) govern your access to and use of Dash N Drop’s website, mobile application, rider/driver application, merchant dashboard, business portal, customer support channels, and related services.",
      "These Terms form a legally binding agreement between you and Dash N Drop LTD (“Dash N Drop”, “we”, “us”, or “our”).",
      "By creating an account, using our platform, placing a delivery request, registering as a rider, driver, merchant, vendor, or business customer, or otherwise using our services, you agree to be bound by these Terms.",
      "If you do not agree with these Terms, you must not use Dash N Drop.",
    ],
  },
  {
    title: "About Dash N Drop",
    paragraphs: [
      "Dash N Drop is a delivery and logistics platform that enables users to request, manage, track, and complete deliveries. Our services may include parcel delivery, merchant delivery, food delivery, grocery delivery, courier services, errand services, business logistics, and other related services.",
      "Dash N Drop may provide the technology platform directly and may also work with independent riders, drivers, merchants, vendors, logistics partners, and third-party service providers.",
    ],
  },
  {
    title: "Eligibility",
    paragraphs: ["To use Dash N Drop, you must:"],
    list: [
      "Be at least 18 years old, or use the platform under the supervision and consent of a parent or legal guardian.",
      "Have the legal capacity to enter into a binding agreement.",
      "Provide accurate and complete information during registration or order placement.",
      "Comply with these Terms and all applicable laws.",
    ],
    closingParagraphs: [
      "We may refuse, suspend, or terminate access where we believe a user is underage, has provided false information, or has breached these Terms.",
    ],
  },
  {
    title: "User Accounts",
    paragraphs: ["You may be required to create an account to access certain services.", "You agree to:"],
    list: [
      "Provide accurate, current, and complete account information.",
      "Keep your login details confidential.",
      "Accept responsibility for all activity carried out under your account.",
      "Notify us immediately if you suspect unauthorised access to your account.",
      "Update your account information when it changes.",
    ],
    closingParagraphs: [
      "We are not responsible for losses caused by your failure to protect your account credentials.",
    ],
  },
  {
    title: "User Categories",
    paragraphs: ["These Terms apply to all users of Dash N Drop, including:"],
    list: [
      "Customers requesting deliveries.",
      "Recipients receiving deliveries.",
      "Riders, drivers, dispatchers, and delivery partners.",
      "Merchants, vendors, restaurants, shops, pharmacies, supermarkets, and business sellers.",
      "Business customers using Dash N Drop for internal or external deliveries.",
      "Any person accessing or interacting with our website, application, or support channels.",
    ],
    closingParagraphs: [
      "Additional agreements, policies, onboarding terms, service-level agreements, or partner contracts may apply to riders, drivers, merchants, vendors, and business users.",
      "Where there is a conflict between these Terms and a signed commercial agreement, the signed agreement will prevail to the extent of the conflict.",
    ],
  },
  {
    title: "Our Services",
    paragraphs: ["Dash N Drop may allow users to:"],
    list: [
      "Request pickups and deliveries.",
      "Schedule deliveries.",
      "Track delivery status.",
      "Communicate with riders, drivers, merchants, or support teams.",
      "Make payments.",
      "Receive delivery confirmations.",
      "Manage merchant or business delivery operations.",
      "Access delivery history and receipts.",
      "Submit complaints, disputes, and feedback.",
    ],
    closingParagraphs: [
      "We may modify, suspend, restrict, replace, or discontinue any part of the platform or services at any time.",
    ],
  },
  {
    title: "Delivery Requests",
    paragraphs: ["When placing a delivery request, you agree to provide accurate details, including:"],
    list: [
      "Pickup address.",
      "Delivery address.",
      "Sender and recipient name.",
      "Sender and recipient phone number.",
      "Package description.",
      "Delivery instructions.",
      "Any special handling requirements.",
      "Accurate value declaration, where requested.",
    ],
    closingParagraphs: [
      "You are responsible for ensuring that the information provided is complete and correct. Dash N Drop will not be liable for failed, delayed, lost, or misdirected deliveries caused by incorrect or incomplete information supplied by you.",
    ],
  },
  {
    title: "Prohibited Items",
    paragraphs: [
      "You must not use Dash N Drop to send, deliver, transport, or request delivery of prohibited, illegal, unsafe, or restricted items.",
      "Prohibited items may include:",
    ],
    list: [
      "Illegal drugs, narcotics, or controlled substances.",
      "Firearms, ammunition, explosives, or weapons.",
      "Stolen goods.",
      "Counterfeit goods.",
      "Hazardous chemicals or toxic materials.",
      "Human remains, body parts, or biological samples unless expressly approved and legally permitted.",
      "Live animals, except where expressly permitted by Dash N Drop.",
      "Cash, negotiable instruments, or high-value financial documents unless expressly approved.",
      "Pornographic or obscene materials prohibited by law.",
      "Items requiring special licences or regulatory approval.",
      "Any item prohibited by Nigerian law or by our internal policies.",
    ],
    closingParagraphs: [
      "We may refuse, cancel, inspect, report, or dispose of any delivery that we reasonably suspect contains prohibited, dangerous, illegal, or improperly declared items.",
      "You are fully responsible for any loss, damage, penalty, claim, investigation, or liability arising from your attempt to send prohibited or restricted items.",
    ],
  },
  {
    title: "Package Responsibility and Packaging",
    paragraphs: ["You are responsible for properly packaging items before pickup.", "Packages should be:"],
    list: [
      "Securely sealed.",
      "Suitable for transport.",
      "Protected against leakage, breakage, spoilage, or damage.",
      "Properly labelled where necessary.",
      "Clearly described when placing the delivery request.",
    ],
    closingParagraphs: [
      "Dash N Drop may refuse to accept items that are poorly packaged, unsafe, leaking, fragile without adequate protection, or unsuitable for delivery.",
      "Unless otherwise agreed in writing, Dash N Drop is not responsible for damage caused by poor packaging, incorrect labelling, undisclosed fragility, inherent defects, perishable nature, or improper handling instructions supplied by the sender.",
    ],
  },
  {
    title: "Pickup and Delivery",
    paragraphs: [
      "We will make reasonable efforts to complete deliveries within the estimated timeframe shown on the platform or communicated to you.",
      "However, pickup and delivery times are estimates only and may be affected by:",
    ],
    list: [
      "Traffic.",
      "Weather.",
      "Rider or driver availability.",
      "Incorrect addresses.",
      "Recipient unavailability.",
      "Security checks.",
      "Vehicle breakdown.",
      "App, network, or payment issues.",
      "Force majeure events.",
      "Other circumstances outside our reasonable control.",
    ],
    closingParagraphs: [
      "Dash N Drop does not guarantee exact delivery times unless this is expressly agreed in writing under a specific service-level arrangement.",
    ],
  },
  {
    title: "Failed Deliveries",
    paragraphs: ["A delivery may fail where:"],
    list: [
      "The pickup or delivery address is incorrect.",
      "The sender or recipient is unavailable.",
      "The recipient refuses to accept the package.",
      "The package contains prohibited or restricted items.",
      "Payment is unsuccessful.",
      "Access to the pickup or delivery location is restricted.",
      "The rider or driver cannot safely complete the delivery.",
      "The user cancels the request after dispatch.",
      "We reasonably suspect fraud, abuse, or illegal activity.",
    ],
    closingParagraphs: [
      "Where a delivery fails, additional fees may apply for return, redelivery, waiting time, storage, or cancellation.",
    ],
  },
  {
    title: "Proof of Delivery",
    paragraphs: ["Dash N Drop may use one or more proof-of-delivery methods, including:"],
    list: [
      "Recipient signature.",
      "One-time password confirmation.",
      "Photo evidence.",
      "App confirmation.",
      "Rider or driver completion confirmation.",
      "Timestamped delivery status.",
      "GPS or location confirmation.",
      "Recipient name or phone confirmation.",
    ],
    closingParagraphs: [
      "Once delivery is confirmed through an approved method, the delivery may be treated as completed.",
    ],
  },
  {
    title: "Payments and Fees",
    paragraphs: [
      "You agree to pay all applicable fees shown or communicated before confirming a delivery request.",
      "Fees may include:",
    ],
    list: [
      "Delivery fees.",
      "Service fees.",
      "Distance-based charges.",
      "Waiting fees.",
      "Cancellation fees.",
      "Return or redelivery fees.",
      "Merchant or platform charges.",
      "Taxes, levies, or regulatory charges, where applicable.",
    ],
    closingParagraphs: [
      "Prices may vary based on location, demand, distance, package type, delivery speed, vehicle type, merchant arrangement, or other operational factors.",
      "We may update pricing at any time. The applicable fee will usually be the fee displayed or agreed at the time of order confirmation.",
    ],
  },
  {
    title: "Payment Processing",
    paragraphs: [
      "Payments may be processed through third-party payment providers, banks, wallet providers, card processors, transfer channels, or other payment systems.",
      "By making a payment, you agree to comply with the terms of the relevant payment provider.",
      "Dash N Drop is not responsible for payment delays, failed transactions, chargebacks, bank downtime, payment gateway errors, or other issues caused by third-party payment systems.",
    ],
  },
  {
    title: "Refunds",
    paragraphs: ["Refunds may be considered where:"],
    list: [
      "You were charged incorrectly.",
      "A delivery was cancelled before rider or driver dispatch.",
      "Dash N Drop failed to provide the paid service due to an issue within our reasonable control.",
      "A duplicate payment was made.",
      "A refund is required by law or approved by us after review.",
    ],
    secondaryListIntro: "Refunds may not be available where:",
    secondaryList: [
      "You provided incorrect delivery details.",
      "The recipient was unavailable.",
      "The delivery failed due to your fault or the recipient's fault.",
      "The item was prohibited, unsafe, illegal, or wrongly declared.",
      "You cancelled after a rider or driver had already been assigned or dispatched.",
      "The service was substantially performed.",
      "The issue arose from a third-party merchant or vendor outside our control.",
    ],
    closingParagraphs: [
      "Refunds may be processed to the original payment method, wallet, bank account, or another approved channel. Processing timelines may depend on banks and payment providers.",
    ],
  },
  {
    title: "Cancellation",
    paragraphs: [
      "You may cancel a delivery request through the platform or by contacting support, subject to our cancellation rules.",
      "Cancellation fees may apply where:",
    ],
    list: [
      "A rider or driver has already been assigned.",
      "The rider or driver has arrived at the pickup location.",
      "The rider or driver has started the trip.",
      "The cancellation causes operational cost or delay.",
      "The cancellation breaches a merchant or business arrangement.",
    ],
    closingParagraphs: [
      "Dash N Drop may cancel a delivery for safety, legal, payment, operational, fraud prevention, or compliance reasons.",
    ],
  },
  {
    title: "Merchant and Vendor Terms",
    paragraphs: ["Merchants and vendors using Dash N Drop agree to:"],
    list: [
      "Provide accurate business, product, price, and availability information.",
      "Prepare orders correctly and on time.",
      "Comply with food safety, product safety, licensing, tax, and regulatory obligations.",
      "Package items properly for delivery.",
      "Honour confirmed orders unless cancellation is unavoidable.",
      "Handle customer issues fairly and promptly.",
      "Avoid selling illegal, counterfeit, unsafe, expired, or prohibited items.",
      "Comply with any additional merchant agreement signed with Dash N Drop.",
    ],
    closingParagraphs: [
      "Dash N Drop may suspend, delist, restrict, or terminate merchants who breach these Terms, receive repeated complaints, create safety risks, or damage platform trust.",
    ],
  },
  {
    title: "Rider, Driver, and Delivery Partner Terms",
    paragraphs: ["Riders, drivers, and delivery partners agree to:"],
    list: [
      "Provide accurate identity, contact, vehicle, licence, and payout information.",
      "Comply with all road traffic, safety, licensing, and regulatory requirements.",
      "Handle packages responsibly.",
      "Follow reasonable delivery instructions.",
      "Maintain professional conduct with customers, merchants, recipients, and Dash N Drop staff.",
      "Avoid theft, fraud, harassment, violence, misconduct, or unsafe behaviour.",
      "Use the rider or driver application only for legitimate deliveries.",
      "Protect customer and recipient information.",
      "Report incidents, accidents, delays, lost items, or disputes promptly.",
      "Comply with any rider, driver, or partner agreement signed with Dash N Drop.",
    ],
    closingParagraphs: [
      "Unless expressly stated in a written employment agreement, riders, drivers, dispatchers, and logistics partners may operate as independent contractors or third-party service providers, not employees of Dash N Drop.",
    ],
  },
  {
    title: "Ratings, Reviews, and Feedback",
    paragraphs: [
      "Users may be allowed to rate, review, or provide feedback on deliveries, merchants, riders, drivers, or services.",
      "You agree that feedback must be honest, lawful, and not abusive, defamatory, threatening, discriminatory, false, misleading, or malicious.",
      "We may remove, moderate, or restrict reviews that breach these Terms or applicable law.",
      "By submitting feedback, you grant Dash N Drop a non-exclusive, royalty-free right to use, reproduce, publish, analyse, and display the feedback for service improvement, marketing, quality control, dispute resolution, and operational purposes.",
    ],
  },
  {
    title: "Promotions, Discounts, and Referral Codes",
    paragraphs: [
      "Dash N Drop may offer promotions, discounts, coupons, credits, referral bonuses, or other incentives.",
      "Such offers may be subject to additional terms, including expiry dates, eligibility criteria, usage limits, minimum order values, location restrictions, or service restrictions.",
      "We may cancel, withdraw, suspend, or modify promotions where we suspect misuse, fraud, technical error, or abuse.",
      "Promotional credits are not cash, may not be transferable, and may not be redeemable for cash unless expressly stated.",
    ],
  },
  {
    title: "Acceptable Use",
    paragraphs: ["You must not:"],
    list: [
      "Use Dash N Drop for unlawful, fraudulent, harmful, or abusive purposes.",
      "Provide false, misleading, or incomplete information.",
      "Interfere with the operation or security of the platform.",
      "Attempt to access another user's account.",
      "Reverse engineer, copy, scrape, or exploit our platform.",
      "Use bots, scripts, or automated systems without permission.",
      "Harass, threaten, abuse, or discriminate against any user, rider, driver, merchant, or staff member.",
      "Circumvent payment, commission, or platform fees.",
      "Manipulate ratings, promotions, referrals, or delivery records.",
      "Use the platform to transport prohibited or restricted items.",
      "Upload viruses, malware, harmful code, or illegal content.",
      "Misuse customer, merchant, rider, or recipient information.",
    ],
    closingParagraphs: ["We may suspend or terminate accounts that breach these rules."],
  },
  {
    title: "Platform Availability",
    paragraphs: [
      "We aim to keep Dash N Drop available and reliable, but we do not guarantee that the platform will always be available, uninterrupted, secure, or error-free.",
      "Access may be affected by:",
    ],
    list: [
      "Maintenance.",
      "Updates.",
      "Network failure.",
      "Third-party service downtime.",
      "Payment gateway issues.",
      "Cybersecurity incidents.",
      "Device or operating system incompatibility.",
      "Events outside our control.",
    ],
    closingParagraphs: [
      "We are not liable for losses caused by temporary unavailability of the platform.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Dash N Drop may integrate with third-party services, including payment gateways, map providers, cloud hosting providers, identity verification providers, communication tools, analytics tools, merchants, banks, and logistics partners.",
      "Your use of third-party services may be subject to their own terms and privacy policies.",
      "Dash N Drop is not responsible for third-party platforms, services, failures, acts, omissions, or content except where required by applicable law.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All rights in the Dash N Drop platform, brand, logo, software, design, content, trademarks, trade names, databases, graphics, text, workflows, and technology belong to Dash N Drop or its licensors.",
      "You may use the platform only for lawful purposes and in accordance with these Terms.",
      "You must not copy, reproduce, modify, distribute, sell, licence, exploit, reverse engineer, or create derivative works from any part of Dash N Drop without our prior written consent.",
    ],
  },
  {
    title: "User Content",
    paragraphs: [
      "You may submit content to Dash N Drop, including delivery instructions, profile details, images, support messages, complaints, reviews, ratings, business information, and documents.",
      "You confirm that your content is accurate, lawful, and does not infringe the rights of any third party.",
      "You grant Dash N Drop a non-exclusive, worldwide, royalty-free licence to use, store, process, reproduce, display, transmit, and adapt your content as necessary to operate the platform, provide services, resolve disputes, comply with law, and improve our services.",
    ],
  },
  {
    title: "Privacy and Data Protection",
    paragraphs: [
      "Our collection and use of personal data is governed by our Privacy Policy.",
      "By using Dash N Drop, you agree that we may collect and process personal data in accordance with our Privacy Policy and applicable data protection laws, including the Nigeria Data Protection Act 2023 where applicable. (ndpc.gov.ng)",
    ],
    linkPhrase: { phrase: "Privacy Policy", href: "/privacypolicy" },
  },
  {
    title: "Complaints and Disputes",
    paragraphs: [
      "If you have a complaint about a delivery, payment, rider, driver, merchant, order, refund, or account issue, you should contact Dash N Drop support as soon as possible.",
      "We may request supporting evidence, including:",
    ],
    list: [
      "Order reference.",
      "Payment receipt.",
      "Photos.",
      "Chat records.",
      "Delivery confirmation.",
      "Package description.",
      "Recipient confirmation.",
      "Any other relevant information.",
    ],
    closingParagraphs: [
      "We will review complaints reasonably and may make decisions based on platform records, rider/driver reports, merchant records, payment records, GPS data, proof of delivery, and available evidence.",
    ],
  },
  {
    title: "Lost, Damaged, or Delayed Items",
    paragraphs: [
      "You must report lost, damaged, or delayed items promptly through our support channels.",
      "Dash N Drop may investigate and determine whether compensation, refund, redelivery, or another remedy is appropriate.",
      "Unless expressly agreed in writing, Dash N Drop's liability for loss or damage may be limited to the lower of:",
    ],
    list: [
      "The declared value of the item.",
      "The delivery fee paid.",
      "A compensation cap set in our operational policy.",
      "The amount required by applicable law.",
    ],
    secondaryListIntro: "Dash N Drop will not be liable for loss or damage caused by:",
    secondaryList: [
      "Poor packaging.",
      "Incorrect address or recipient details.",
      "Prohibited or restricted items.",
      "Undeclared fragile or high-value items.",
      "Perishable goods.",
      "Recipient refusal or unavailability.",
      "Sender's negligence.",
      "Merchant error.",
      "Force majeure events.",
      "Circumstances outside our reasonable control.",
    ],
    closingParagraphs: [
      "For high-value items, users should request special handling or insurance where available before dispatch.",
    ],
  },
  {
    title: "Insurance",
    paragraphs: [
      "Dash N Drop may offer, arrange, or require insurance for certain deliveries, riders, vehicles, merchants, or business customers.",
      "Insurance availability, coverage, exclusions, claim limits, and claim procedures may vary by delivery type, item type, location, or partner arrangement.",
      "Unless expressly stated, standard deliveries may not include full insurance coverage for the value of the item.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: ["To the maximum extent permitted by law, Dash N Drop will not be liable for:"],
    list: [
      "Indirect, incidental, special, punitive, or consequential loss.",
      "Loss of profit, revenue, goodwill, business, data, or opportunity.",
      "Loss caused by third-party merchants, riders, drivers, payment providers, network providers, or technology providers.",
      "Loss caused by incorrect information provided by users.",
      "Loss arising from prohibited items or misuse of the platform.",
      "Delays caused by traffic, weather, strikes, insecurity, emergencies, or events outside our control.",
      "Unauthorised account access caused by your failure to protect your login details.",
    ],
    closingParagraphs: [
      "Nothing in these Terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Indemnity",
    paragraphs: [
      "You agree to indemnify and hold harmless Dash N Drop, its directors, officers, employees, contractors, agents, affiliates, partners, and service providers from any claims, losses, damages, liabilities, penalties, costs, and expenses arising from:",
    ],
    list: [
      "Your breach of these Terms.",
      "Your misuse of the platform.",
      "Your violation of applicable law.",
      "Your provision of false or misleading information.",
      "Your sending of prohibited, unsafe, illegal, or restricted items.",
      "Your infringement of third-party rights.",
      "Your negligence, fraud, misconduct, or wilful default.",
    ],
  },
  {
    title: "Suspension and Termination",
    paragraphs: ["We may suspend, restrict, or terminate your account or access to Dash N Drop where:"],
    list: [
      "You breach these Terms.",
      "You provide false information.",
      "You misuse the platform.",
      "You fail verification.",
      "You engage in fraud, theft, abuse, harassment, or misconduct.",
      "You create safety, legal, reputational, or operational risk.",
      "Required by law, regulator, court order, or security concern.",
      "Your account is inactive for an extended period.",
    ],
    closingParagraphs: [
      "You may stop using Dash N Drop at any time. You may request account deletion subject to legal, regulatory, operational, accounting, fraud prevention, and dispute resolution requirements.",
    ],
  },
  {
    title: "Force Majeure",
    paragraphs: [
      "Dash N Drop will not be responsible for failure or delay in performing obligations caused by events beyond our reasonable control, including:",
    ],
    list: [
      "Natural disasters.",
      "Fire, flood, or severe weather.",
      "War, terrorism, civil unrest, riots, or insecurity.",
      "Government action or regulatory restrictions.",
      "Strikes or labour disputes.",
      "Power, internet, telecoms, or payment infrastructure failure.",
      "Epidemics or public health emergencies.",
      "Road closures, traffic restrictions, or transport disruptions.",
      "Cyberattacks or technology failures outside our reasonable control.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time.",
      "Where changes are material, we may notify you through the platform, website, email, SMS, or other reasonable means.",
      "Your continued use of Dash N Drop after the updated Terms become effective means you accept the revised Terms.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria.",
    ],
  },
  {
    title: "Dispute Resolution",
    paragraphs: [
      "We encourage users to contact Dash N Drop first so that disputes can be resolved amicably.",
      "Where a dispute cannot be resolved through support or internal escalation, the parties may attempt mediation or other alternative dispute resolution methods before proceeding to court, unless urgent legal relief is required.",
      "Subject to applicable law, disputes arising from these Terms or your use of Dash N Drop shall be subject to the jurisdiction of the courts of Nigeria.",
    ],
  },
  {
    title: "Notices and Communication",
    paragraphs: ["We may send notices and communications through:"],
    list: [
      "Email.",
      "SMS.",
      "Phone calls.",
      "WhatsApp or other messaging channels.",
      "In-app notifications.",
      "Website notices.",
      "Push notifications.",
      "Physical address, where applicable.",
    ],
    closingParagraphs: ["You are responsible for keeping your contact details up to date."],
  },
  {
    title: "Severability",
    paragraphs: [
      "If any part of these Terms is found to be invalid, unlawful, or unenforceable, the remaining parts will continue to apply.",
    ],
  },
  {
    title: "No Waiver",
    paragraphs: [
      "If Dash N Drop does not immediately enforce any part of these Terms, this does not mean we waive our right to enforce it later.",
    ],
  },
  {
    title: "Assignment",
    paragraphs: [
      "You may not transfer your rights or obligations under these Terms without our prior written consent.",
      "Dash N Drop may transfer, assign, subcontract, or delegate its rights and obligations under these Terms in connection with a business transfer, restructuring, partnership, merger, acquisition, or operational arrangement.",
    ],
  },
  {
    title: "Entire Agreement",
    paragraphs: [
      "These Terms, together with our Privacy Policy and any applicable service-specific, merchant, rider, driver, or business agreement, form the entire agreement between you and Dash N Drop regarding your use of the platform.",
    ],
    linkPhrase: { phrase: "Privacy Policy", href: "/privacypolicy" },
  },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions, complaints, support, or legal notices, contact:",
      companyContact.legalName,
      `Email: ${companyContact.email}`,
      `Phone: ${companyContact.phones.join(" / ")}`,
      `Address: ${companyContact.address}`,
      `Website: ${companyContact.website}`,
    ],
  },
];

const TermsOfUseContent = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {termsSections.map((section, sectionIndex) => (
            <article key={`${section.title}-${sectionIndex}`} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {sectionIndex + 1}. {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {renderParagraph(paragraph, section.linkPhrase)}
                </p>
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

              {section.secondaryListIntro && (
                <p className="text-muted-foreground leading-relaxed">{section.secondaryListIntro}</p>
              )}

              {section.secondaryList && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.secondaryList.map((item, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.closingParagraphs?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {renderParagraph(paragraph, section.linkPhrase)}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseContent;
