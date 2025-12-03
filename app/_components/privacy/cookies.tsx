"use client";

import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <div className="w-[97%] mt-14 mx-auto bg-white text-black py-16 px-6 md:px-12 rounded-3xl shadow-md">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#5C0632]"
      >
        Cookie Policy
      </motion.h1>

      <div className="text-sm md:text-base text-black text-center mb-6">
        <strong>Last updated on:</strong> 1st July 2025
      </div>

      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          Cookies are small text files that, like most other web servers, we place on the device you use to access our
          website. They help us recognise your device during a session or on future visits, primarily to provide a
          better user experience and to improve our site performance.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Types of cookies used</h2>
          <p>
            The cookies we deploy may be categorised by purpose or by duration (how long they remain on your device).
            Below we describe the main categories.
          </p>

          <h3 className="font-semibold mt-3">By purpose</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Strictly necessary cookies:</strong> Essential for the website to function. They are typically set
              in response to actions you take (logging in, filling forms, setting privacy preferences). These cookies
              cannot normally be switched off without affecting core functionality.
            </li>

            <li>
              <strong>Performance / Analytics cookies:</strong> Also called statistics cookies. These collect anonymous
              information about how visitors use our site (page visits, time on page, bounce rates, load times). We use
              aggregated data to improve site performance and user experience.
            </li>

            <li>
              <strong>Functional cookies:</strong> Enable enhanced functionality and personalization (remembering language,
              login preferences, or other UI choices). They are not strictly necessary but improve convenience.
            </li>

            <li>
              <strong>Targeting / Advertising cookies:</strong> Used to store visitor identifiers and help deliver
              relevant advertising. They enable functions such as ID synchronization, segmentation, modeling and reporting,
              and may be set by advertising partners. These cookies may also track interactions with embedded videos to
              display relevant ads across sites.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">By duration</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Session cookies:</strong> Exist only for the duration of a browser session and expire when you close
              the browser. Usually used for navigation and secure areas of the site.
            </li>
            <li>
              <strong>Persistent cookies:</strong> Remain on your device after the session ends and are used to remember
              preferences or recognise returning visitors. The lifespan varies depending on the cookie purpose.
            </li>
          </ul>

          <p className="mt-3">
            If you disable cookies via your browser, some parts of the website may not work correctly. You can delete
            existing cookies or prevent future cookies via your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Third-party cookies</h2>
          <p>
            Some cookies on our site are set by third parties (analytics providers, advertising networks, social media
            platforms). These third parties may collect information about your browsing across multiple sites. We use
            these providers to help measure site usage, run targeted advertising, and improve site features.
          </p>

          <p className="mt-2">
            To opt out of targeted advertising, you can set preferences with our advertising partners or use industry opt-out
            tools such as the Network Advertising Initiative or Digital Advertising Alliance.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="border-b py-2 pr-4">Name</th>
                  <th className="border-b py-2 pr-4">Purpose</th>
                  <th className="border-b py-2">Privacy / Cookie Policy (info & opt-out)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Google (Analytics / Ads)</td>
                  <td className="py-2 pr-4 align-top">Web analytics, performance measurement, targeted & re-targeted advertising</td>
                  <td className="py-2 align-top">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">
                      Google Privacy
                    </a>
                    <br />
                    Opt-out: <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="underline">adssettings.google.com</a>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 pr-4 align-top">Facebook / Meta</td>
                  <td className="py-2 pr-4 align-top">Targeted advertising, social widgets</td>
                  <td className="py-2 align-top">
                    <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noreferrer" className="underline">
                      Facebook Privacy
                    </a>
                    <br />
                    Opt-out: <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noreferrer" className="underline">ad settings</a>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 pr-4 align-top">LinkedIn</td>
                  <td className="py-2 pr-4 align-top">Targeted advertising and professional re-targeting</td>
                  <td className="py-2 align-top">
                    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="underline">
                      LinkedIn Privacy
                    </a>
                    <br />
                    Opt-out info: <a href="https://www.linkedin.com/help/linkedin/answer/62931/manage-advertising-preferences" target="_blank" rel="noreferrer" className="underline">manage-advertising-preferences</a>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 pr-4 align-top">YouTube (Google)</td>
                  <td className="py-2 pr-4 align-top">Embedded videos & targeted ads</td>
                  <td className="py-2 align-top">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">Google Privacy</a>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 pr-4 align-top">Other analytics / ad partners</td>
                  <td className="py-2 pr-4 align-top">Measurement, campaign analytics, advertising networks</td>
                  <td className="py-2 align-top">Please refer to each partner’s privacy/cookie policy for retention and opt-out options.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">First-party cookies</h2>
          <p>
            In addition to third-party cookies, we deploy first-party cookies directly to support essential site functions
            and personalization (session management, preference storage, analytics). These cookies help us provide a stable,
            personalised and efficient browsing experience.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="border-b py-2 pr-4">Name (example)</th>
                  <th className="border-b py-2 pr-4">Purpose</th>
                  <th className="border-b py-2">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">sessionid / __session</td>
                  <td className="py-2 pr-4 align-top">Session management (essential)</td>
                  <td className="py-2 align-top">Session (expires on browser close)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">cookie_pref</td>
                  <td className="py-2 pr-4 align-top">Stores cookie consent & preferences</td>
                  <td className="py-2 align-top">Persistent (varies – e.g., 6–12 months)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">analytics_id</td>
                  <td className="py-2 pr-4 align-top">Site analytics (first-party)</td>
                  <td className="py-2 align-top">Persistent (varies by purpose)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3">
            Other first-party cookies and their retention are described in the table above. Apart from strictly necessary
            cookies, you can opt out of non-essential cookies from our cookie banner or via your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Cookie retention</h2>
          <p>
            Information collected via cookies will not be retained longer than necessary to fulfil the purposes described
            in this policy, unless a longer retention period is required by law or for legitimate business purposes.
            Retention periods for third-party cookies are controlled by the third party and are available in their privacy
            or cookie policies (links provided above).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">How to manage or delete cookies</h2>
          <p>
            Most browsers allow you to block, restrict, or delete cookies via settings. Refer to your browser help pages
            (Chrome, Firefox, Edge, Safari) for instructions. Deleting or blocking cookies may affect site functionality
            (for example, staying logged in or remembering preferences).
          </p>

          <p className="mt-2">
            To opt out of interest-based advertising across multiple companies, you can visit:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><a href="http://optout.networkadvertising.org/" target="_blank" rel="noreferrer" className="underline">Network Advertising Initiative (NAI) opt-out</a></li>
            <li><a href="http://optout.aboutads.info/" target="_blank" rel="noreferrer" className="underline">Digital Advertising Alliance (DAA) / YourAdChoices</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Website ownership & copyright</h2>
          <p>
            This website, including its cookie implementations, UI/UX, design and code, is designed and developed by{" "}
            <strong>Amarpreet Singh, Founder &amp; CEO of Hranium Infotech</strong>. All rights are strictly reserved.
            No individual, agency, student, freelancer or company is permitted to copy, reuse, reproduce, screenshot,
            or showcase this website or its cookie implementations (in portfolios, case studies, demo reels or otherwise)
            without prior written permission from Hranium Infotech.
          </p>

          <p className="mt-3">
            The Hranium Infotech name, logo and brand assets are protected under copyright and trademark laws. Unauthorized
            use of any branding asset is strictly prohibited and may result in legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Contact</h2>
          <p>
            If you have questions about this cookie policy, or would like this policy in another format, contact:
          </p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>Contact: <strong>Amarpreet Singh</strong></li>
            <li>Position: Founder &amp; CEO, Hranium Infotech</li>
            <li>Address: Highland Park, Zirakpur, Punjab, India</li>
            <li>Phone: +91 62396 25959</li>
            <li>Email: <a href="mailto:falconsolutions492@gmail.com" className="text-[#5C0632] underline">falconsolutions492@gmail.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Translations & precedence</h2>
          <p>
            Where translations of this policy are provided, the English version shall prevail in case of inconsistency.
            Country or region-specific cookie statements may be published separately where required.
          </p>
        </section>

        <div className="pt-6 border-t border-black">
          <p className="text-sm text-center">
            This Cookie Policy is part of our broader Privacy Policy and is intended to comply with applicable laws.
            For specific legal advice, please consult a qualified attorney.
          </p>
        </div>
      </div>
    </div>
  );
}
