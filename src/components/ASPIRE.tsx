// --- Icons ---
const AirportIcon = () => (
  <div className="w-12 h-12 bg-[#FFF9F5] rounded-xl flex items-center justify-center mb-6 border border-[#FDE1D3]/50 shadow-sm">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7627" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  </div>
);

const AnalyticsIcon = () => (
  <div className="w-12 h-12 bg-[#F0F8FF] rounded-xl flex items-center justify-center mb-6 border border-[#D7EEFE]/50 shadow-sm">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10"/>
      <path d="M18 20V4"/>
      <path d="M6 20v-4"/>
    </svg>
  </div>
);

const ArchitectureIcon = () => (
  <div className="w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center mb-6 border border-[#E9D5FF]/50 shadow-sm">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#763AE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  </div>
);

const ASPIRE = () => {
  const features = [
    {
      title: 'Proven Airport Operations',
      desc: 'Handles large-scale airport operations with real-time efficiency.',
      icon: <AirportIcon />
    },
    {
      title: 'AI-Driven Analytics',
      desc: 'Transforms data into predictive insights for smarter decisions.',
      icon: <AnalyticsIcon />
    },
    {
      title: 'Scalable Architecture',
      desc: 'Ensures seamless integration with future-ready infrastructure.',
      icon: <ArchitectureIcon />
    },
  ];

  return (
    <section id="aspire" className="pt-14 sm:pt-16 lg:pt-24 pb-8 lg:pb-10 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(180deg, #FDF6EE 0%, white 50%)' }}>
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center mb-10 sm:mb-12 lg:mb-16">
          {/* Left */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="text-[14px] sm:text-[18px] font-bold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                 AIRPORT INTELLIGENCE
               </span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 tracking-tight leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>ASPIRE</h2>
            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-[#1F2937] mb-4 sm:mb-5 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="block">Airport Spatial Platform for</span>
              <span className="block mt-2 md:mt-3">Intelligent Real-time Eco-system</span>
            </h3>
            <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-medium mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="font-bold text-[#111827]">ASPIRE</span> is an advanced airport digital twin solution that transforms complex airport operations into a real-time, intelligent, and collaborative ecosystem. Built on proven platforms, it delivers unmatched operational insight, scalability, and compliance.
            </p>
            <a href="#" className="inline-flex items-center justify-center bg-[#18181B] text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors text-sm sm:text-base">
              Request ASPIRE Demo &rarr;
            </a>
          </div>

          {/* Right — Two arch-shaped overlapping images */}
          <div className="relative h-[260px] sm:h-[320px] lg:h-[460px] flex justify-center lg:justify-end items-center mt-6 lg:mt-0 max-w-full">
            {/* Back image — Left Arch */}
            <div 
              className="absolute top-0 right-[30%] sm:right-[35%] lg:right-48 w-[140px] sm:w-[200px] lg:w-[300px] h-[190px] sm:h-[270px] lg:h-[380px] overflow-hidden z-10" 
              style={{ borderRadius: '150px 150px 0px 0px', backgroundColor: '#e5e7eb' }}
            >
              <img
                src="/images/Aspire1.jpg"
                alt="Airport interactive tablet view"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/aviation.png' }}
              />
            </div>
            {/* Front image — Right Arch */}
            <div 
              className="absolute bottom-4 lg:bottom-8 right-[5%] sm:right-[10%] lg:right-0 w-[120px] sm:w-[170px] lg:w-[260px] h-[160px] sm:h-[240px] lg:h-[340px] overflow-hidden z-20" 
              style={{ borderRadius: '130px 130px 0px 0px', backgroundColor: '#e5e7eb' }}
            >
              <img
                src="/images/Aspire2.jpg"
                alt="Airport aerial rendering"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/hero.png' }}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="bg-[#FFF3E6] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-white/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-14">
            {features.map((f, i) => (
              <div key={f.title} className="flex flex-col">
                {f.icon}
                <h3 className="font-semibold text-[#111827] text-base lg:text-xl mb-2 sm:mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
                <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASPIRE;
