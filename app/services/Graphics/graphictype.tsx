
// WhoAreYou section as per provided image, themed with #5C0632
export default function WhoAreYou() {
  return (
    <section className="w-full min-h-[60vh] bg-transparent flex flex-col items-center justify-center px-4 md:px-0 py-20 font-sans">
      {/* Section Button, Heading and Description */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="flex items-center mb-10">
          <span className="flex items-center gap-3 px-7 py-3 rounded-full border border-[#5C0632]/20 bg-[#f6f5fa] text-black text-2xl md:text-3xl font-semibold shadow-sm font-sans transition-all duration-200 hover:shadow-md">
            <span className="w-3 h-3 rounded-full bg-[#5C0632] inline-block"></span>
           Our Services
          </span>
          
        </div>
       
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#5C0632] focus-within:border-[#5C0632] outline-none group cursor-pointer p-8 flex flex-col items-start min-h-[420px]">
          <div className="mb-8">
            {/* Example SVG icon for web dev */}
            <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#f6f5fa"/><path d="M16 40V16h24v24H16z" stroke="#5C0632" strokeWidth="2.5" strokeLinejoin="round"/><path d="M20 24h16M20 32h16" stroke="#5C0632" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">UI/UX Design</h2>
          <p className="text-lg text-gray-500">We build digital experiences that users love. Our UI/UX design service focuses on creating intuitive, responsive, and beautiful interfaces for websites and apps. We turn your vision into a user-centric design that converts visitors and builds loyalty.</p>
        </div>
        {/* Card 2 */}
        <div className="rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#5C0632] focus-within:border-[#5C0632] outline-none group cursor-pointer p-8 flex flex-col items-start min-h-[420px]">
          <div className="mb-8">
            {/* Example SVG icon for mobile app */}
            <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#f6f5fa"/><path d="M28 16v24M20 28h16" stroke="#5C0632" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">Logo & Brand Identity</h2>
          <p className="text-lg text-gray-500">Your logo is the face of your brand. We design memorable logos and complete brand identities that make you stand out. Our team creates cohesive visual systems—including colors, fonts, and guidelines—that connect with your audience and look professional everywhere.</p>
        </div>
        {/* Card 3 */}
        <div className="rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#5C0632] focus-within:border-[#5C0632] outline-none group cursor-pointer p-8 flex flex-col items-start min-h-[420px]">
          <div className="mb-8">
            {/* Example SVG icon for branding */}
            <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#f6f5fa"/><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="32" fontWeight="bold" fill="#5C0632">A</text></svg>
          </div>
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">Event Branding </h2>
          <p className="text-lg text-gray-500">Launch your event with a powerful brand. We design everything you need for a memorable experience, from event logos and social media kits to web banners and marketing collateral. We create a professional look that excites attendees and drives registrations.</p>
        </div>
        {/* Card 4 - Call to Action */}
        <div className="rounded-3xl bg-[#5C0632] shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent flex flex-col items-start justify-between p-8 min-h-[420px] relative overflow-hidden">
          <div>
            <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#f6f5fa"/><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="32" fontWeight="bold" fill="#5C0632">A</text></svg>
          
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">Social Media Graphics</h2>
            <p className="text-lg text-white/80">Capture attention on social media. We design a consistent stream of stunning, share-worthy graphics for Instagram, Facebook, LinkedIn, and more. Our custom posts, stories, and ad banners will boost your engagement and make your brand's profile stand out.</p>
       
          </div>
          {/* Example: Placeholder for image, replace with your own image if needed */}
          <div className="flex-1 flex items-end w-full">
            {/* You can add an image here if desired */}
          </div>
          <button className="mt-8 bg-white text-[#5C0632] font-bold rounded-full px-8 py-3 text-lg shadow transition-all duration-200 hover:bg-[#f6f5fa] focus:outline-none focus:ring-2 focus:ring-[#5C0632]">Let's Talk</button>
        </div>
      </div>
    </section>
  );
}
