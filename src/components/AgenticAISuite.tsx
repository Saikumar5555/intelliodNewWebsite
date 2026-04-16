import React from 'react';

const BlueCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
    <circle cx="12" cy="12" r="10" fill="#2563EB"/>
    <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomBulletIcon = () => (
  <img src="/images/Icon.png" alt="bullet" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex-shrink-0 mt-0.5 object-contain" />
);


 const TrendUpIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5 text-[#FF7627]">
     <path d="M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M21 7H15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M21 7V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
 );

 const AgenticAISuite = () => {
  return (
    <section id="products" className="bg-white pt-16 sm:pt-24 pb-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 relative">
          
          {/* Abstract Decorations */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block">
            <img src="/images/Butterfly.png" alt="Butterfly decoration" width="84" height="84" className="object-contain" />
          </div>
          <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block">
            <img src="/images/Explosion.png" alt="Explosion decoration" width="80" height="80" className="object-contain" />
          </div>

          <p className="text-[14px] sm:text-[18px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
               AGENTIC AI SUITE
             </span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A24] leading-[1.05] mb-4 sm:mb-5 tracking-tight">
             <span className="block">AI Agents That Work</span>
             <span className="block mt-2 md:mt-3">While You Sleep</span>
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-[14px] sm:text-[15px] font-medium leading-relaxed px-2 sm:px-0">
             Two purpose-built agentic AI products that automate outreach, career building and<br className="hidden sm:block" />
             hospitality - <span className="text-transparent bg-clip-text font-extrabold" style={{ backgroundImage: 'linear-gradient(to right, #8d44c5, #c15b7f, #f97330)' }}>all under one roof.</span>
          </p>
        </div>

        {/* OyeSell + Hospyra Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
          
          {/* OyeSell Card */}
          <div className="bg-gradient-to-tr from-white to-[#FFF1EA] rounded-[40px] p-5 sm:p-7 border border-gray-200 relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[280px] h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="relative z-10 w-full sm:w-[80%] lg:w-[70%] flex-1 flex flex-col">
              <h3 className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 mb-4 sm:mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="text-[22px] sm:text-[26px] font-bold text-[#111827] tracking-tight whitespace-nowrap">OyeSell</span>
                <span className="text-[14px] sm:text-[16px] font-bold text-[#374151] whitespace-nowrap">– AI Sales Agent</span>
              </h3>
              
              <ul className="space-y-2.5 mb-5 sm:mb-7 flex-grow">
                {[
                  'Instant lead engagement',
                  'WhatsApp + SMS outreach',
                  'AI-powered lead qualification',
                  'Personalized outreach at scale',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-[14px] sm:text-[15px] text-[#4B5563]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <BlueCheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-[#18181B] hover:bg-black text-white text-[13px] sm:text-[14px] font-semibold py-3 px-6 sm:px-8 rounded-full transition-all inline-flex items-center gap-2 w-fit shadow-md hover:shadow-lg mt-auto">
                Explore OyeSell <span className="text-base">→</span>
              </button>
            </div>
            
            {/* Monkey Mascot Image */}
            <div className="absolute right-[-1%] bottom-[-25px] sm:bottom-[-40px] w-[32%] sm:w-[36%] h-auto z-0 pointer-events-none">
               <img 
                 src="/images/oyesell.png" 
                 alt="OyeSell AI Mascot" 
                 className="w-full h-full object-contain object-bottom"
               />
            </div>
          </div>

          {/* Hospyra Card */}
          <div className="bg-gradient-to-tr from-white to-[#EBF5FF] rounded-[40px] p-5 sm:p-7 border border-gray-200 relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[280px] h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="relative z-10 w-full sm:w-[80%] lg:w-[70%] flex-1 flex flex-col">
              <h3 className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 mb-4 sm:mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                 <span className="text-[22px] sm:text-[26px] font-bold text-[#111827] tracking-tight whitespace-nowrap">Hospyra</span>
                 <span className="text-[14px] sm:text-[16px] font-bold text-[#374151] whitespace-nowrap">– The Future of Hospitality</span>
              </h3>

              <ul className="space-y-2.5 mb-5 sm:mb-7 flex-grow">
                {[
                  'AI Concierge & WhatsApp automation',
                  'AI-powered check-in & front desk',
                  'Smart room control & personalization',
                  'Predictive operations & analytics',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-[14px] sm:text-[15px] text-[#4B5563]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    <CustomBulletIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#18181B] hover:bg-black text-white text-[13px] sm:text-[14px] font-semibold py-3 px-6 sm:px-8 rounded-full transition-all inline-flex items-center gap-2 w-fit shadow-md hover:shadow-lg mt-auto">
                Explore Hospyra <span className="text-base">→</span>
              </button>
            </div>

            {/* Robot Mascot Image */}
            <div className="absolute right-[2%] bottom-[-10px] sm:bottom-[-15px] w-[24%] sm:w-[28%] h-auto z-0 pointer-events-none">
               <img 
                 src="/images/Hospyra.png" 
                 alt="Hospyra AI Robot" 
                 className="w-full h-full object-contain object-bottom"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Lexsyra Section */}
      <div className="w-full mt-16 sm:mt-24" style={{ backgroundImage: 'linear-gradient(180deg, #f3eefe 0%, white 40%)' }}>
        <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Left Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                    AI EDUCATION
                  </span>
                </p>
                <h3 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#111827] leading-[1.05] mb-4 sm:mb-5 tracking-tight">
                  Lexsyra – AI Tutor
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[16px] font-medium leading-relaxed mb-6 sm:mb-0">
                  Your emotionally aware, personalised AI tutor. Lexsyra adapts to each student's unique pace - delivering custom adaptive lessons, real-time feedback, gamified quests, and rich progress reports across all core subjects. Learning, Simplified.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 my-6 sm:my-8 w-full">
                {[
                  'Custom adaptive lessons',
                  'Real-time personalisation',
                  'Gamified quests & challenges',
                  'Parent progress reports',
                  'Writing, Math, Science, Languages'
                ].map(pill => (
                  <div key={pill} className="flex items-center gap-2 bg-[#F3EFFE] border border-[#F1E9E3] text-[#374151] px-3.5 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#8064ED] flex-shrink-0"></div>
                    {pill}
                  </div>
                ))}
              </div>

              <div className="bottom-group">
                {/* Tagline Banner */}
                <div className="inline-flex items-center gap-2.5 bg-[#F0F9F9] border border-[#CFEBED] rounded-xl px-4 sm:px-5 py-3 mb-16 sm:mb-16 w-fit shadow-sm whitespace-nowrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#DE8633] flex-shrink-0">
                     <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
                  </svg>
                  <span className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#4B5563]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Smarter Learning • Confident Students • Better Outcomes
                  </span>
                </div>

                <div className="w-full">
                  <button className="group bg-[#18181B] hover:bg-gray-800 text-white text-[14px] sm:text-[15px] font-bold py-3.5 sm:py-4 px-7 sm:px-9 rounded-full transition-all inline-flex items-center gap-2.5 w-fit shadow-lg hover:shadow-xl">
                    Explore Lexsyra <span className="text-lg sm:text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="mb-5 w-full overflow-hidden shadow-md h-[240px] sm:h-[280px]">
                <img
                  src="/images/Lexsyra.jpg"
                  alt="Lexsyra AI Learning"
                  className="w-full h-full object-cover block"
                />
              </div>

              <h4 className="text-[22px] sm:text-[26px] font-bold mb-2.5 tracking-tight text-[#111827]">Adaptive Learning Paths</h4>
              <p className="text-[#4B5563] text-[13px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6 font-medium">
                AI customizes every lesson based on student behavior, strengths, and learning speed for maximum effectiveness.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'AI Avatar Tutor', desc: 'Human-like interaction · Voice-enabled guidance' },
                  { title: 'Live AI Feedback System', desc: 'Instant corrections · Smart suggestions' },
                  { title: 'Student Progress Insights', desc: 'Performance tracking · Parent visibility' }
                ].map(card => (
                  <div key={card.title} className="bg-[#F3EFFE] border border-[#F1E9E3] rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-3 sm:gap-4 hover:shadow-md transition-shadow">
                    <TrendUpIcon />
                    <div>
                      <h5 className="font-bold text-[#111827] text-[13px] sm:text-[15px] mb-0.5">{card.title}</h5>
                      <p className="text-[#6B7280] text-[12px] sm:text-[13px] font-medium">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Digital Twin Section */}
      <div className="w-full" style={{ backgroundImage: 'linear-gradient(180deg, #f8f9fc 0%, white 50%)' }}>
        <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Left — Video */}
            <div className="w-full overflow-hidden shadow-md aspect-video lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <video
                src="/images/dt.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-center">
              <p className="text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                  INFRASTRUCTURE INTELLIGENCE
                </span>
              </p>
              <h3 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#111827] leading-[1.05] mb-4 sm:mb-5 tracking-tight">
                Digital Twin<br/>Technology
              </h3>
              <p className="text-[#4B5563] text-[14px] sm:text-[16px] font-medium leading-relaxed mb-6 sm:mb-8">
                Create living digital replicas of physical infrastructure - telecom towers, railway bridges, dams, and entire cities. Intelliod's Digital Twin platform enables real-time structural monitoring, predictive maintenance, 3D reconstruction, and regulatory compliance at scale.
              </p>

              <div className="space-y-3 mb-8 sm:mb-10 w-full">
                {[
                  { title: 'Tower Reconstruction Active', desc: '40,000+ towers · IEC compliance verified' },
                  { title: 'Railway Bridge - All Clear', desc: 'Computer vision scan · Structural integrity' },
                  { title: 'City Planning Module', desc: 'Digital twin live · Multiple municipalities' }
                ].map((card, idx) => (
                  <div key={idx} className="bg-[#f9f1ed] border border-[#FDE1D3]/80 rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-3 sm:gap-4  hover:shadow-sm transition-all">
                    <TrendUpIcon />
                    <div>
                      <h5 className="font-bold text-[#1E3A8A] text-[13px] sm:text-[15px] mb-0.5">{card.title}</h5>
                      <p className="text-[#6B7280] text-[12px] sm:text-[13px] font-medium">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="group bg-[#18181B] hover:bg-gray-800 text-white text-[14px] sm:text-[15px] font-bold py-3.5 sm:py-4 px-7 sm:px-9 rounded-full transition-all inline-flex items-center gap-2.5 w-fit shadow-lg hover:shadow-xl">
                See Digital Twin in Action <span className="text-lg sm:text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default AgenticAISuite;

