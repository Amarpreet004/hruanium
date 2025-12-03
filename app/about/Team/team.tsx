import React from "react";

export function TeamCard() {
  const teamData = [
    {
      name: "Amarpreet Singh",
      role: "CEO & Founder",
     
      image: "/founder.jpg"
    },
    {
      name: "Tejendra Singh",
      role: "App Developer",
     
      image: "/teju2.jpg"
    },
    {
      name: "Mayank Shivhare",
      role: "Full Stack Developer",
      
      image: "/mayank.jpg"
    },
    {
      name: "Krish Shivhare",
      role: "Web Developer",
      image: "/krish.jpg"
    },
    {
      name: "Daljit Kaur",
      role: "Graphic Designer",
      image: "/daljit.jpg"
    },
    {
      name: "Amandeep Singh",
      role: "Graphic Designer & Video Editor",
      image: "/amandeep.jpg"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="mb-8 w-full flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#5C0632] mb-4 text-center tracking-tight">
          Meet Our Team
        </h2>
        <div className="w-16 h-1 bg-[#5C0632] rounded-full mx-auto mb-4" />
        <p className="text-lg md:text-xl text-[#374151] text-center max-w-2xl">
          Our diverse team of experts brings together years of experience, creativity, and passion to deliver exceptional results for our clients.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-end w-full">
        {teamData.map((member, i) => (
          <div
            key={i}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[320px] h-[420px] sm:h-[480px] md:h-[520px] lg:h-[508px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white/10 border-2 border-[#5C0632] flex flex-col justify-end m-2 group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform"
            />
            <style>{`
              .group:hover .absolute.inset-0 {
                transform: scale(1.06);
              }
            `}</style>
            <div className="absolute bottom-0 left-0 w-full h-3/5 pointer-events-none" style={{WebkitMaskImage: 'radial-gradient(ellipse 120% 80% at 50% 100%, #000 80%, transparent 100%)', maskImage: 'radial-gradient(ellipse 120% 80% at 50% 100%, #000 80%, transparent 100%)', backdropFilter: 'blur(32px)'}} />
            <div className="relative z-10 p-4 sm:p-6 md:p-8 pb-8 md:pb-10 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 justify-center">
                {member.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base md:text-base text-white/80">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
