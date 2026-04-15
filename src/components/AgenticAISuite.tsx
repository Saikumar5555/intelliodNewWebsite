import React from 'react';

const BlueCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
    <circle cx="12" cy="12" r="10" fill="#2563EB"/>
    <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PurpleRocketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1 text-[#6D28D9]">
    <path d="M5.52875 19.336L2.34875 22.516C2.10875 22.756 1.81541 22.876 1.46875 22.876C1.12208 22.876 0.828747 22.756 0.588747 22.516C0.348747 22.276 0.228747 21.9827 0.228747 21.636C0.228747 21.2893 0.348747 20.996 0.588747 20.756L3.92875 17.416C4.03541 16.4827 4.36875 15.656 4.92875 14.936C5.48875 14.216 6.16875 13.6827 6.96875 13.336V12.156C6.96875 11.756 7.08541 11.3727 7.31875 11.006C7.55208 10.6393 7.85875 10.3327 8.23875 10.086L8.85875 9.69601L8.74875 8.91601C8.61541 8.08935 8.65541 7.24268 8.86875 6.37601C9.08208 5.50935 9.47541 4.68268 10.0488 3.89601C10.7421 2.93601 11.6621 2.05601 12.8088 1.25601C13.9554 0.456014 15.2287 0.0560141 16.6287 0.0560141H17.8487L18.4487 0.296014L23.4487 5.29601L23.6887 5.89601V7.11601C23.6887 8.51601 23.2887 9.78935 22.4887 10.936C21.6887 12.0827 20.8087 13.0027 19.8487 13.696C19.0621 14.2693 18.2354 14.6627 17.3688 14.876C16.5021 15.0893 15.6554 15.1293 14.8288 14.996L14.0488 14.886L13.6588 15.506C13.4054 15.8927 13.0954 16.2027 12.7288 16.436C12.3621 16.6693 11.9821 16.786 11.5888 16.786H10.4088C10.0621 17.586 9.53208 18.266 8.81875 18.826C8.10541 19.386 7.27875 19.7193 6.33875 19.826L5.52875 19.336ZM8.81875 15.356C9.17875 15.356 9.47541 15.226 9.70875 14.966C9.94208 14.706 10.0588 14.4093 10.0588 14.076C10.0588 13.436 9.87875 12.876 9.51875 12.396C9.15875 11.916 8.67208 11.6093 8.05875 11.476C7.57875 11.3427 7.12541 11.396 6.69875 11.636C6.27208 11.876 5.95208 12.2493 5.73875 12.756C5.55208 13.1693 5.37875 13.5627 5.21875 13.936C5.05875 14.3093 4.90875 14.656 4.76875 14.976L4.72875 15.316C4.94208 15.4227 5.62541 15.476 6.77875 15.476L8.81875 15.356ZM19.2488 4.79601H17.8488L13.8088 1.95601C13.0621 2.38268 12.4221 2.91601 11.8888 3.55601C11.3554 4.19601 10.9688 4.86935 10.7288 5.57601C11.3288 6.45601 11.9188 7.33601 12.4988 8.21601C13.0788 9.09601 13.6288 9.94935 14.1488 10.776L16.2988 8.63601L15.1188 6.69601L16.2588 5.55601L18.1588 6.69601L18.6688 6.18601L17.5288 4.29601L18.6688 3.15601L20.6088 4.33601L21.7888 2.15601L18.9488 4.79601H19.2488Z" fill="currentColor"/>
   </svg>
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
    <section id="products" className="bg-white pt-24 pb-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-12 relative">
          
          {/* Abstract Decorations */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block">
            <img src="/images/Butterfly.png" alt="Butterfly decoration" width="84" height="84" className="object-contain" />
          </div>
          <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block">
            <img src="/images/Explosion.png" alt="Explosion decoration" width="80" height="80" className="object-contain" />
          </div>

          <p className="text-[18px] font-bold uppercase tracking-[0.2em] mb-4">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
               AGENTIC AI SUITE
             </span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A24] leading-[1.05] mb-5 tracking-tight">
             AI Agents That Work<br/>While You Sleep
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-[15px] font-medium leading-relaxed">
             Three purpose-built agentic AI products that automate outreach,<br className="hidden sm:block"/>
             career building, and hospitality - <span className="text-transparent bg-clip-text font-extrabold" style={{ backgroundImage: 'linear-gradient(to right, #8d44c5, #c15b7f, #f97330)' }}>all under oneroof.</span>
          </p>
        </div>

        {/* OyeSell + Oye Career */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          
          {/* OyeSell Card */}
          <div className="bg-gradient-to-b from-[#FFF4EE] to-white rounded-3xl p-6 lg:p-8 border border-[#FDE1D3] relative overflow-hidden flex flex-col justify-between min-h-[280px] h-full">
            <div className="relative z-10 w-full sm:w-[60%]">
              <h3 className="flex flex-wrap items-baseline gap-2 mb-4">
                <span className="text-[32px] font-bold text-[#111827] tracking-tight">OyeSell</span>
                <span className="text-[17px] font-semibold text-black"> – AI Sales Agent</span>
              </h3>
              
              <ul className="space-y-4 mb-6">
                {[
                  'Instant lead engagement',
                  'WhatsApp + SMS outreach',
                  'AI-powered lead qualification',
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] font-medium text-[#4B5563]">
                    <BlueCheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-[#18181B] hover:bg-black text-white text-sm font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                Explore OyeSell <span className="text-lg">→</span>
              </button>
            </div>
            
            {/* Monkey Mascot Image */}
            <div className="absolute right-0 top-[25%] w-[42%] h-[120%] z-0">
               <img 
                 src="/images/oyesell.png" 
                 alt="OyeSell AI Mascot" 
                 className="w-full h-full object-contain object-top"
               />
            </div>
          </div>

          {/* Oye Career Card */}
          <div className="bg-gradient-to-b from-[#FFF9DD] to-white rounded-3xl p-6 lg:p-8 border border-[#F3EAC6] relative overflow-hidden flex flex-col justify-between min-h-[280px] h-full">
             <div className="relative z-10 w-full sm:w-[60%]">
                <h3 className="flex items-baseline gap-2 mb-4 whitespace-nowrap">
                  <span className="text-[32px] font-bold text-[#111827] tracking-tight flex-shrink-0">Oye Career</span>
                  <span className="text-[17px] font-semibold text-black flex-shrink-0"> – AI Career Platform</span>
                </h3>
                
                <ul className="space-y-4 mb-6">
                  {[
                    'AI resume builder & ATS matching',
                    'Portfolio website creation',
                    'AI cover letter assistant',
                  ].map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] font-medium text-[#4B5563]">
                      <img src="/images/Icon.png" alt="Icon" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="bg-[#18181B] hover:bg-black text-white text-sm font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                  Explore Oye Career <span className="text-lg">→</span>
                </button>
             </div>

             {/* Resume Image */}
             <div className="absolute right-[-10%] top-[33%] w-[50%] h-[100%] z-0">
                 <img 
                   src="/images/resume.png" 
                   alt="Oye Career AI Platform" 
                   className="w-full h-full object-contain object-top"
                 />
             </div>
          </div>
        </div>

        {/* Hospyra Card */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="grid lg:grid-cols-[30%_70%] h-full">
            
            {/* Hotel Image */}
            <div className="h-56 lg:h-full">
              <img
                src="/images/Hospyra.png"
                alt="Hospyra Luxury Hotel Interior"
                className="w-full h-full object-cover rounded-l-3xl"
              />
            </div>

            {/* Content Sidebar */}
            <div className="p-6 lg:py-6 lg:px-12 flex flex-col justify-center bg-gradient-to-b from-[#F0F8FF] to-white h-full">
              <h3 className="flex flex-wrap items-baseline gap-3 mb-4">
                 <span className="text-[32px] font-bold text-[#111827] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Hospyra</span>
                 <span className="text-[19px] text-[#374151]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>– The Future of Hospitality</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-6 w-full">
                {[
                  'AI Concierge & WhatsApp automation',
                  'Smart room control & personalization',
                  'AI-powered check-in & front desk',
                  'Predictive operations & analytics',
                ].map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-[15px] text-[#4B5563] whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    <BlueCheckIcon />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 bg-[#F2F9F6] rounded-md px-4 py-2 mb-6 w-fit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#DE8633]">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
                </svg>
                <span className="text-[15px] text-[#4B5563]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Smarter Hotels • Happier Guests • Higher Revenue</span>
              </div>

              <div>
                <button className="bg-[#18181B] hover:bg-black text-white text-sm py-3 px-8 rounded-full transition-all inline-flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Explore Hospyra <span className="text-lg">→</span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Lexsyra Section (Full Width) */}
      <div className="bg-white w-full mt-24">
        <div className="grid lg:grid-cols-2 items-stretch">
            
            {/* Left Content */}
            <div className="px-6 py-8 lg:py-10 xl:py-12 flex flex-col justify-center relative overflow-hidden bg-white z-0 h-full">
              {/* Glow effect */}
              <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#008DFF]/10 via-[#763AE5]/10 to-[#FF7627]/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
              
              <div className="relative z-10 w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-12 xl:mr-24">
                <p className="text-[18px] font-bold uppercase tracking-[0.2em] mb-3">
                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                     AI EDUCATION
                   </span>
                </p>
                <h3 className="text-[40px] lg:text-[48px] font-bold text-[#111827] leading-[1.1] mb-4 tracking-tight">
                  Lexsyra – AI Tutor
                </h3>
                <p className="text-[#4B5563] text-[15px] font-medium leading-relaxed mb-6">
                  Your emotionally aware, personalised AI tutor. Lexsyra adapts to each student's unique pace - delivering custom adaptive lessons, real-time feedback, gamified quests, and rich progress reports across all core subjects. Learning, Simplified.
                </p>

                <div className="flex flex-wrap gap-2 mb-8 w-full">
                  {[
                    'Custom adaptive lessons',
                    'Real-time personalisation',
                    'Gamified quests & challenges',
                    'Parent progress reports',
                    'Writing, Math, Science, Languages'
                  ].map(pill => (
                    <div key={pill} className="flex items-center gap-2 bg-[#FFF8F4] border border-[#FDE1D3]/70 text-[#4B5563] px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7627]"></div>
                      {pill}
                    </div>
                  ))}
                </div>

                <button className="group bg-[#18181B] hover:bg-black text-white text-[15px] font-bold py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2 w-fit">
                  Explore Lexsyra <span className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-[#2B6065] px-6 py-8 lg:py-10 xl:py-12 flex flex-col justify-center relative overflow-hidden h-full">
              <div className="w-full max-w-[560px] mx-auto lg:mr-auto lg:ml-12 xl:ml-24 relative z-10">
                {/* Image */}
                <div className="mb-4 w-full overflow-hidden">
                  <img 
                    src="/images/Lexsyra.jpg" 
                    alt="Lexsyra AI Learning" 
                    className="w-full h-auto object-cover block" 
                  />
                </div>

                <h4 className="text-[26px] font-bold mb-2.5 tracking-tight text-white">Adaptive Learning Paths</h4>
                <p className="text-white/80 text-[15px] leading-relaxed mb-6 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  AI customizes every lesson based on student behavior, strengths, and learning speed for maximum effectiveness.
                </p>

                <div className="space-y-2">
                  {[
                    { title: 'AI Avatar Tutor', desc: 'Human-like interaction • Voice-enabled guidance' },
                    { title: 'Live AI Feedback System', desc: 'Instant corrections • Smart suggestions' },
                    { title: 'Student Progress Insights', desc: 'Performance tracking • Parent visibility' }
                  ].map(card => (
                    <div key={card.title} className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-start gap-4 hover:bg-white/[0.15] transition-colors">
                      <TrendUpIcon />
                      <div>
                        <h5 className="font-bold text-white text-[15px] mb-0.5">{card.title}</h5>
                        <p className="text-white/60 text-[13px] font-medium">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Digital Twin Section (Full Width) */}
      <div className="bg-white w-full">
        <div className="grid lg:grid-cols-2 items-stretch">
          
          {/* Left Content (Image) */}
          <div className="relative h-[400px] lg:h-auto w-full z-0 overflow-hidden">
            <video 
              src="/images/dt.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="px-6 py-10 lg:py-12 xl:py-16 sm:px-12 lg:px-16 xl:px-24 flex flex-col justify-center relative overflow-hidden bg-white z-0 h-full">
            <div className="relative z-10 w-full max-w-[560px] mx-auto lg:ml-12 xl:ml-24 lg:mr-auto">
              <p className="text-[18px] font-bold uppercase tracking-[0.2em] mb-3">
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
                   INFRASTRUCTURE INTELLIGENCE
                 </span>
              </p>
              <h3 className="text-[40px] lg:text-[48px] font-bold text-[#111827] leading-[1.1] mb-4 tracking-tight">
                Digital Twin<br/>Technology
              </h3>
              <p className="text-[#4B5563] text-[15px] font-medium leading-relaxed mb-6">
                Create living digital replicas of physical infrastructure - telecom towers, railway bridges, dams, and entire cities. Intelliod's Digital Twin platform enables real-time structural monitoring, predictive maintenance, 3D reconstruction, and regulatory compliance at scale
              </p>

              <div className="space-y-3 mb-8 w-full">
                {[
                  { title: 'Tower Reconstruction Active', desc: '40,000+ towers • IEC compliance verified' },
                  { title: 'Railway Bridge - All Clear', desc: 'Computer vision scan • Structural integrity' },
                  { title: 'City Planning Module', desc: 'Digital twin live • Multiple municipalities' }
                ].map((card, idx) => (
                  <div key={idx} className="bg-[#FFF9F5] border border-[#FDE1D3]/80 rounded-2xl p-5 flex items-start gap-4 hover:bg-[#FFF4E6] transition-colors">
                    <TrendUpIcon />
                    <div>
                      <h5 className="font-bold text-[#1E3A8A] text-[15px] mb-0.5">{card.title}</h5>
                      <p className="text-[#6B7280] text-[13px] font-medium">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="group bg-[#18181B] hover:bg-black text-white text-[15px] font-bold py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2 w-fit">
                See Digital Twin in Action <span className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default AgenticAISuite;

