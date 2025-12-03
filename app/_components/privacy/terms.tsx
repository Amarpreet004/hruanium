"use client";

import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <div className="w-[97%] mt-14 mx-auto bg-white text-black py-16 px-6 md:px-12 rounded-3xl shadow-md">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#5C0632]"
      >
        Terms of Use
      </motion.h1>

      <div className="text-sm md:text-base text-black text-center mb-6">
        <strong>Last updated on:</strong> July 1, 2025
      </div>

      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        <p className="font-semibold">
          Terms of Use for www.hraniuminfotech.com and its subdomains (the "Website")
        </p>

        <p>
          The use of any product, service or feature (the "Materials") available through the internet websites accessible at
          <span className="font-semibold"> www.hraniuminfotech.com</span> and its subdomains (collectively, the
          "Website") by any user of the Website ("User", "You" or "Your") shall be governed by these Terms of Use. By
          accessing or using the Website, you acknowledge that you have read, understood and agree to be bound by these
          Terms. If you do not agree to these Terms, do not use the Website or download any Materials.
        </p>

        {/* NEW: Ownership / Design Credit */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Website Ownership & Design Credit</h2>
          <p>
            This Website has been <strong>designed and developed by Amarpreet Singh</strong>, Founder &amp; CEO of Falcon Web Solution.
            All design, layout, UI/UX, code, animations, copy, images, and other creative assets are the exclusive property
            of Falcon Web Solution unless expressly noted otherwise.
          </p>

          <p className="mt-3">
            <strong>Strict portfolio & logo restrictions:</strong> No individual, student, freelancer, agency, or company is
            permitted to include this Website, its pages, screenshots, code, or any portion of its design in a personal or
            professional portfolio, case study, demo reel, sample work, social media post, or any public or private showcase,
            without the prior written permission of Falcon Web Solution.
          </p>

          <p className="mt-3">
            All rights are strictly reserved. The Falcon Web Solution logo, trademarks, icons, color schemes and branding
            elements are protected by copyright and trademark laws. Unauthorized use, copying, modification, or distribution
            of the logo or any branding asset is strictly prohibited and may result in legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Definitions</h2>
          <p>
            <strong>User</strong> means any person or entity who browses, accesses or uses the Website. <strong>Materials</strong>
            means any information, downloads, documents, software, images, designs, text, graphics, or other content
            made available through the Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Limited License</h2>
          <p>
            This Website contains proprietary notices and copyright information that must be observed. Subject to your
            compliance with these Terms, Falcon Web Solution grants you a limited, non-exclusive, non-transferable license
            to access and display the Website and the Materials solely for your personal, non-commercial use, provided that
            you keep intact all copyright, trademark and other proprietary notices. You shall not modify, copy, republish,
            upload, post, transmit, distribute, sell, license, create derivative works from, mirror or otherwise exploit the
            Materials on the Website for any public or commercial purpose without Falcon Web Solution’s prior written consent.
          </p>

          <p className="mt-2">
            Specifically, you are prohibited from using the Website (or any portion thereof) in any portfolio, sample or
            promotional materials without express written permission from Falcon Web Solution. Any software or materials
            available for download from the Website may be subject to separate license terms; you agree to comply with
            those terms. Your failure to comply with these Terms will result in immediate termination of this license and
            you must destroy all copies of downloaded Materials in your possession.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Blogs & User Contributions</h2>

          <p>
            The Website may host blogs, articles, and other content contributed by Individuals (including Falcon employees
            and third parties). Such contributions represent the opinion of the author and not necessarily the official
            position of Falcon Web Solution. Falcon Web Solution retains copyright in blog content and grants the same
            limited license described above.
          </p>

          <p className="mt-2">
            If you are permitted to post comments or other content to the Website, you agree not to:
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Defame, harass, threaten or abuse Falcon or any third party;</li>
            <li>Upload or post content that is unlawful, obscene, defamatory, racist, pornographic, or otherwise objectionable;</li>
            <li>Publish confidential or proprietary information of others without authorization;</li>
            <li>Upload files containing viruses, malware or malicious code;</li>
            <li>Advertise, solicit or offer to sell goods or services without prior written permission;</li>
            <li>Impersonate another person or create a false identity;</li>
            <li>Remove or alter copyright, trademark or other proprietary notices;</li>
            <li>Upload content for which you do not have rights or permissions.</li>
          </ul>

          <p className="mt-2">
            Falcon Web Solution may monitor, remove, or edit any user-contributed content at its discretion and may pursue
            available remedies for violations of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Third-Party Content & Links</h2>

          <p>
            The Website may contain or provide access to third-party content, links, tools, or services ("Third-Party
            Content"). Falcon Web Solution does not control, endorse, or assume responsibility for any Third-Party Content.
            You acknowledge and agree that Falcon Web Solution is not responsible for the availability, accuracy, or
            content of such third-party sites, and that your use of such sites is at your own risk. Any personal data
            processing by third parties is governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Confidential Information</h2>

          <p>
            Do not send confidential or proprietary information to Falcon Web Solution via the Website. Any materials or
            information submitted to Falcon Web Solution will be deemed non-confidential and Falcon Web Solution shall
            have an unrestricted, irrevocable license to use such materials for any lawful purpose. Falcon Web Solution
            will not, however, publish your name in connection with submissions without your consent unless required by law.
            Personally-identifiable information submitted for service delivery will be handled in accordance with our
            Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">No Warranties</h2>
          <p>
            THE WEBSITE, THE INFORMATION AND MATERIALS ON THE SITE, AND ANY SOFTWARE MADE AVAILABLE ON THE WEBSITE ARE
            PROVIDED "AS IS" WITHOUT ANY REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. FALCON WEB
            SOLUTION DOES NOT WARRANT THAT THE WEBSITE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED.
            FALCON WEB SOLUTION DOES NOT WARRANT THAT FILES OR DATA YOU DOWNLOAD FROM THE WEBSITE WILL BE FREE OF VIRUSES.
          </p>

          <p className="mt-2">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY
            NOT APPLY TO YOU.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Limitation of Damages</h2>

          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FALCON WEB SOLUTION WILL NOT BE LIABLE FOR ANY DIRECT,
            INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE
            WEBSITE, ITS CONTENT, OR YOUR USE OF THE WEBSITE, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, BUSINESS
            INTERRUPTION, LOSS OF DATA, OR ANY OTHER PECUNIARY LOSS, EVEN IF FALCON WEB SOLUTION HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES.
          </p>

          <p className="mt-2">
            WHERE LIABILITY CANNOT BE EXCLUDED, FALCON WEB SOLUTION’S TOTAL LIABILITY ARISING OUT OF OR RELATING TO THESE
            TERMS OR YOUR USE OF THE WEBSITE SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO FALCON WEB SOLUTION IN THE SIX (6)
            MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM, OR INR 10,000, WHICHEVER IS LOWER.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Lawful Use of the Website</h2>

          <p>
            As a condition of your use of the Website, you shall not use the Website for unlawful purposes or in a manner
            that could damage, disable, overburden, or impair Falcon Web Solution's servers or networks. You shall not
            attempt to gain unauthorized access to any portion of the Website or any systems connected to the Website.
            Automatic data collection tools (such as robots, spiders, scrapers, or crawlers) are prohibited unless you
            have Falcon Web Solution’s express prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Indemnity</h2>

          <p>
            You agree to indemnify, defend and hold harmless Falcon Web Solution, its affiliates, officers, directors,
            employees and agents from and against any and all claims, losses, liabilities, damages, costs and expenses
            (including reasonable attorneys’ fees) arising out of or related to your use or misuse of the Website, breach
            of these Terms, or violation of any law or the rights of a third party.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Changes to Terms; Termination</h2>

          <p>
            Falcon Web Solution reserves the right, at its sole discretion, to change, modify, add, or remove portions of
            these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Website
            after such posting constitutes your acceptance of the changes.
          </p>

          <p className="mt-2">
            Falcon Web Solution may terminate, change, suspend, or discontinue any aspect of the Website or restrict your
            access at any time without notice or liability. Upon termination of the license granted above, you must
            immediately destroy any downloaded Materials in your possession.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">International Users & Choice of Law</h2>

          <p>
            The Site is controlled and operated by Falcon Web Solution from India. Falcon Web Solution makes no
            representation that Materials on the Website are appropriate or available for use in other locations.
            Accessing the Website from territories where its contents are illegal is prohibited. If you access the Website
            from outside India, you are responsible for compliance with local laws.
          </p>

          <p className="mt-2">
            These Terms are governed by the laws of India, and the courts located in Punjab, India shall have exclusive
            jurisdiction to resolve disputes arising under these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Severability; Entire Agreement</h2>

          <p>
            If any provision of these Terms is found to be unenforceable by a court of competent jurisdiction, such
            provision will be limited or eliminated to the minimum extent necessary and the remaining provisions will
            remain in full force and effect. These Terms constitute the entire agreement between you and Falcon Web
            Solution regarding your use of the Website.
          </p>

          <p className="mt-2">
            Any claim arising out of or relating to your use of the Website must be commenced within one (1) year after
            the cause of action arises, to the extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Feedback</h2>
          <p>
            Any feedback, comments or suggestions you send to the Website shall be deemed non-confidential and Falcon Web
            Solution shall be free to use such information on an unrestricted basis.
          </p>
        </section>

        {/* Copyright block reiterating design & logo rights */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Copyright & Logo Rights</h2>
          <p>
            This Website has been designed and developed by <strong>Amarpreet Singh, Founder &amp; CEO, Falcon Web Solution</strong>.
            All rights are reserved. The Falcon Web Solution name, logo, trademarks, designs and other brand elements are the
            exclusive property of Falcon Web Solution and may not be used, copied, reproduced, published, transmitted,
            displayed, modified or distributed without prior written authorization. Unauthorized use of any branding or
            design asset is strictly prohibited and may result in legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">Contact</h2>
          <p>If you have questions about these Terms of Use, contact us:</p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>Contact: <strong>Amarpreet Singh</strong></li>
            <li>Title: Founder &amp; CEO, Falcon Web Solution</li>
            <li>Address: Highland Park, Zirakpur, Punjab, India</li>
            <li>Phone: +91 62396 25959</li>
            <li>Email: <a href="mailto:falconsolutions492@gmail.com" className="text-[#5C0632] underline">falconsolutions492@gmail.com</a></li>
          </ul>
        </section>

        <div className="pt-6 border-t border-black">
          <p className="text-sm text-center">
            © 2025 Falcon Web Solution. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
