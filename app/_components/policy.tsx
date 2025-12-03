"use client";

import { motion } from "framer-motion";

export default function PrivacyStatement() {
  return (
    <div className="w-[97%] mx-auto bg-white text-black py-16 px-6 md:px-12 rounded-3xl shadow-md mt-14">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#5C0632]"
      >
        Privacy Statement
      </motion.h1>

      <div className="text-sm md:text-base text-gray-800 text-center mb-6">
        <strong>Last updated on:</strong> July 1, 2025
      </div>

      <div className="space-y-6 text-base md:text-lg leading-relaxed">

        <p>
          <strong>Hranium Infotech</strong> (hereinafter referred to as "Hranium Infotech", "we", "us" or "our") is committed to
          respecting your privacy and choices. This Privacy Statement (the "Statement") explains our privacy practices
          regarding Personal Information that we collect and process in compliance with applicable data protection laws.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">Objective</h2>
          <p>
            Through this Statement we provide a clear synopsis of our privacy practices regarding Personal Information
            that we collect and process about you through various sources. While the primary focus is on data collected
            through our websites (including www.hraniuminfotech.com and its sub-domains — collectively the "Hranium Infotech
            websites"), the principles below apply across Hranium Infotech's operations. Depending on the purpose of processing and
            your relationship with us, we may provide additional, tailored privacy notices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">Scope of this Statement</h2>
          <p>
            This Statement explains the categories of Personal Information we process, why and how we process it, who may
            receive it, and the rights available to you under applicable laws, including how to exercise those rights.
            The Statement is global in scope; region-specific supplements may apply depending on your country of
            residence. Where translations are provided, the English version will prevail in case of inconsistency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">1. Personal Information We Process</h2>

          <h3 className="font-semibold mt-2">1.1 Categories of Personal Information</h3>
          <p>We may collect the following categories of Personal Information:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              <strong>Website & Technical Data:</strong> IP address, device identifiers, browser type, operating system,
              telemetry, page views, referrer URLs, and cookie & tracking data collected when you visit the Hranium Infotech websites.
            </li>
            <li>
              <strong>Identity & Contact Details:</strong> Name, title, email address, telephone number, postal address,
              company/organization, job title, and professional profile URLs (e.g., LinkedIn).
            </li>
            <li>
              <strong>Account & Login Credentials:</strong> Username, password, and related authentication data when you
              register for our services.
            </li>
            <li>
              <strong>Communications:</strong> Messages, inquiries, feedback, and correspondence you send to us.
            </li>
            <li>
              <strong>Audio-Visual Data:</strong> Photographs, video recordings, or profile images provided by you or
              captured at events/webinars.
            </li>
            <li>
              <strong>Marketing Preferences:</strong> Newsletter subscriptions, communication preferences, interests and
              consent records.
            </li>
            <li>
              <strong>Payment & Billing Information:</strong> Billing address and transaction details when you purchase
              services (sensitive payment card data is handled by our payment processors).
            </li>
            <li>
              <strong>Event & Candidate Data:</strong> RSVP information, dietary preferences, CV/resume and recruitment
              related details when you apply for jobs or attend events.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">1.2 Sources of Personal Information</h3>
          <p>We collect Personal Information from various sources, including:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Directly from you via website forms, applications, emails, or phone calls.</li>
            <li>From our employees or representatives when required for service delivery.</li>
            <li>From your employer, business partners, or service providers where relevant.</li>
            <li>Publicly available sources, social media profiles, and business directories.</li>
            <li>Cookies, analytics tools and other tracking technologies when you visit Hranium Infotech websites.</li>
            <li>Third-party vendors, suppliers or partners engaged to provide services on our behalf.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">2. Purposes for Which We Use Personal Information</h2>
          <p>We process Personal Information for specific business purposes, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>To provide, operate and maintain our websites and services, and to manage user accounts where applicable.</li>
            <li>To communicate with you, respond to inquiries, and provide customer support or service updates.</li>
            <li>To create login credentials and authenticate users.</li>
            <li>To personalize content, recommendations and improve your user experience.</li>
            <li>For marketing, lead generation, sales communications and to invite you to events or promotions (subject to your preferences).</li>
            <li>To publish testimonials, award announcements, or event participant details where consent has been provided.</li>
            <li>To perform analytics, reporting, and business intelligence to improve our products, services and marketing efforts.</li>
            <li>To ensure information security, detect and prevent fraud, and protect Hranium Infotech's systems and assets.</li>
            <li>To comply with legal obligations, respond to legal process and defend or enforce our rights.</li>
            <li>To use AI/ML tools for analytics and service improvement where applicable, ensuring responsible AI practices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">3. Legal Bases for Processing (where applicable)</h2>
          <p>Depending on the jurisdiction, we rely on one or more of the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Contractual necessity:</strong> Processing necessary to perform a contract or take steps prior to entering into a contract with you.</li>
            <li><strong>Legitimate interests:</strong> Processing for Falcon’s legitimate business interests (subject to balancing your rights), such as site analytics and security.</li>
            <li><strong>Consent:</strong> Where we rely on consent (e.g., marketing communications or cookies), you can withdraw consent at any time.</li>
            <li><strong>Legal obligation:</strong> Processing required to comply with laws, regulations, or legal process.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">4. Consequences of Not Providing Personal Information</h2>
          <p>
            If you choose not to provide Personal Information that is necessary to fulfill a request, we may be unable to
            provide the requested service, complete a transaction, register you for an event, or respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">5. Recipients, Sharing & International Transfers</h2>

          <h3 className="font-semibold mt-2">5.1 Who we share with</h3>
          <p>We may share Personal Information with:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Hranium Infotech entities, affiliates or group companies where required for business purposes.</li>
            <li>Service providers and processors such as hosting providers, analytics vendors, email & CRM providers, payment processors and marketing platforms.</li>
            <li>Professional advisors, auditors, and legal counsel where necessary.</li>
            <li>Government authorities, regulators, law enforcement agencies or courts as required by law or legal process.</li>
            <li>Business partners and event organizers for event-related communications where you have consented or it is necessary to perform the service.</li>
          </ul>

          <h3 className="font-semibold mt-3">5.2 International Transfers</h3>
          <p>
            Personal Information may be transferred to and processed in countries outside your country of residence where
            Falcon or our service providers operate. These countries may have different data protection laws. When we make
            such transfers, we will take reasonable steps to protect your Personal Information in accordance with
            applicable law (for example, by using standard contractual clauses or other lawful transfer mechanisms).
          </p>

          <p className="mt-2">
            If you would like additional information about the safeguards we use for international transfers, please
            contact us using the details in the "Contact Us" section below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">6. Data Retention</h2>
          <p>
            We retain Personal Information only for as long as necessary to fulfill the purposes set out in this Statement,
            to comply with legal obligations, to resolve disputes, and to enforce our agreements. After the retention
            period ends, we will delete or anonymize Personal Information in a secure manner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">7. Data Security</h2>
          <p>
            We maintain administrative, physical and technical safeguards designed to protect Personal Information against
            unauthorized or unlawful processing and against accidental loss, destruction or damage. Measures include
            access controls, encryption in transit, secure hosting and regular security assessments. However, no
            transmission over the internet is completely secure and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">8. Your Data Subject Rights</h2>
          <p>
            Subject to applicable law, you may have rights including the right to: access, correct, update, or request
            deletion of your Personal Information; restrict or object to processing; request portability of your data;
            and withdraw consent where processing is based on consent.
          </p>
          <p className="mt-2">
            To exercise your rights, we may need to verify your identity. Please contact us using the details below. Your
            rights may vary by jurisdiction and some rights may be limited in certain situations as permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">9. Preference & Consent Center</h2>
          <p>
            Where applicable, you may update your marketing and communication preferences through our preference center or
            by following opt-out instructions included in our emails. If you withdraw consent, this will not affect the
            lawfulness of processing before withdrawal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">10. Children’s Privacy</h2>
          <p>
            The Falcon Websites are not directed to children under the age of 13. We do not knowingly collect Personal
            Information from children under 13. If we learn that we have collected Personal Information from a child
            under 13 in a manner not permitted by law, we will take steps to delete the information as required.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">11. Linked & Third-Party Websites</h2>
          <p>
            The Falcon Websites may contain links to third-party websites, plug-ins and services. These third-party sites
            have their own privacy policies. Falcon is not responsible for the privacy practices or content of such
            third parties. We encourage you to review their privacy notices before providing Personal Information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">12. Contact Your Local Data Protection Authority</h2>
          <p>
            If you are dissatisfied with our handling of your Personal Information, you may have the right to lodge a
            complaint with the data protection authority in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">13. How to Contact Us</h2>
          <p>If you have questions, requests, or need this Statement in an alternative format, contact:</p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>Contact: <strong>Amarpreet Singh</strong></li>
            <li>Position: Founder &amp; CEO, Hranium Infotech</li>
            <li>Address: Highland Park, Zirakpur, Punjab, India</li>
            <li>Phone: +91 62396 25959</li>
            <li>Email: <a href="mailto:falconsolutions492@gmail.com" className="text-[#5C0632] underline">falconsolutions492@gmail.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">14. Updates to this Privacy Statement</h2>
          <p>
            We may modify this Statement from time to time. Material changes will be published on this page with an
            updated "Last updated" date. Continued use of our websites following changes constitutes acceptance of the
            updated Statement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-2">15. Additional Notices for Candidates & Applicants</h2>
          <p>
            If you apply for a role with Hranium Infotech, a separate candidate privacy notice will explain the categories of
            information we collect (e.g., name, contact details, CV/resume, qualifications, employment history, identity
            documents where applicable), the purposes of processing (recruitment, background checks, onboarding) and the
            legal bases relied upon. Candidate data may be shared with our authorized recruitment partners and processed
            in accordance with applicable laws.
          </p>
        </section>

        <div className="pt-6 border-t border-black">
          <p className="text-sm text-center">
            This Privacy Statement is intended to align with applicable legal frameworks, including the Indian IT Act,
            GDPR (EU), and CCPA (USA) where relevant. For specific legal advice please consult a qualified attorney.
          </p>
        </div>
      </div>
    </div>
  );
}
