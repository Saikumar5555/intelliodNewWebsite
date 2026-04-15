const ASPIRE = () => {
  const features = [
    {
      title: 'Proven Airport Operations',
      desc: 'Handles large-scale airport operations with real-time efficiency.',
    },
    {
      title: 'AI-Driven Analytics',
      desc: 'Transforms data into predictive insights for smarter decisions.',
    },
    {
      title: 'Scalable Architecture',
      desc: 'Ensures seamless integration with future-ready infrastructure.',
    },
  ];

  return (
    <section id="aspire" className="bg-gradient-to-b from-[#FDF6EE] to-white pt-16 lg:pt-24 pb-8 lg:pb-10 relative overflow-hidden">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-12 lg:mb-16">
          {/* Left */}
          <div className="max-w-xl">
            <p className="text-[18px] font-bold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                 AIRPORT INTELLIGENCE
               </span>
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#111827] mb-3 tracking-tight leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>ASPIRE</h2>
            <h3 className="text-2xl lg:text-[1.75rem] font-bold text-[#1F2937] mb-5 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Airport Spatial Platform for<br />Intelligent Real-time Eco-system
            </h3>
            <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="font-bold text-[#111827]">ASPIRE</span> is an advanced airport digital twin solution that transforms complex airport operations into a real-time, intelligent, and collaborative ecosystem. Built on proven platforms, it delivers unmatched operational insight, scalability, and compliance.
            </p>
            <a href="#" className="inline-flex items-center justify-center bg-[#18181B] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Request ASPIRE Demo &rarr;
            </a>
          </div>

          {/* Right — Two arch-shaped overlapping images */}
          <div className="relative h-[420px] lg:h-[460px] flex justify-end items-center">
            {/* Back image — Left Arch */}
            <div 
              className="absolute top-0 right-32 lg:right-48 w-[260px] lg:w-[300px] h-[340px] lg:h-[380px] overflow-hidden z-10" 
              style={{ borderRadius: '150px 150px 20px 20px', backgroundColor: '#e5e7eb' }}
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
              className="absolute bottom-4 lg:bottom-8 right-0 w-[220px] lg:w-[260px] h-[300px] lg:h-[340px] overflow-hidden z-20" 
              style={{ borderRadius: '130px 130px 20px 20px', backgroundColor: '#e5e7eb' }}
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
        <div className="bg-[#FFF3E6] rounded-[2rem] p-8 lg:p-10  border border-white/50">
          <div className="grid md:grid-cols-3 gap-8 md:gap-14">
            {features.map((f, i) => (
              <div key={f.title} className="flex flex-col">
                <h3 className="font-semibold text-[#111827] text-lg lg:text-xl mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
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
