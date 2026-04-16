import React from 'react';

const BlueFeature = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
  <li className="flex items-center gap-3.5 mb-3 last:mb-0">
    <div className="w-8 h-8 rounded-[8px] bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 text-[#3B82F6]">
      {icon}
    </div>
    <span className="text-[14px] sm:text-[15px] font-medium text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{text}</span>
  </li>
);

const GreenFeature = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
  <li className="flex items-center gap-3.5 mb-3 last:mb-0">
    <div className="w-8 h-8 rounded-[8px] bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#22C55E]">
      {icon}
    </div>
    <span className="text-[14px] sm:text-[15px] font-medium text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{text}</span>
  </li>
);

const AadyaIcons = [
  <svg key="1" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="2" width="14" height="14" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2.5"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2.5"/><path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2.5"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
];

const AadyaTexts = [
  'On-prem secure deployment',
  'Custom knowledge integration',
  'GDPR, HIPAA, ISO compliant',
  'Private RAG & memory system'
];

const NeuralIcons = [
  <svg key="1" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="2" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 20A7 7 0 0114 9l1-1h6v6l-1 1a7 7 0 01-11 5z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6M2 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2.5"/></svg>
];

const NeuralTexts = [
  'AI + IoT + satellite insights',
  'Crop health monitoring',
  'Yield forecasting AI',
  'Government & farmer dashboards'
];

const IndustryCards = () => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#EEFDF4] pt-10 sm:pt-12 lg:pt-16 pb-14 sm:pb-20 lg:pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="text-[14px] sm:text-[18px] font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
              INDUSTRY INTELLIGENCE
            </span>
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#111827] leading-tight tracking-tight">
            AI Built for Real-World Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Aadya Card */}
          <div className="rounded-[2.5rem] overflow-hidden border border-[#E5E7EB] flex flex-col bg-white shadow-sm">
            {/* Top image */}
            <div className="h-[200px] sm:h-[240px] relative overflow-hidden bg-gray-100">
              <img
                src="/images/Aadya.jpg"
                alt="Aadya Private GPT enterprise AI"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-8 py-8 lg:px-10 lg:py-8 flex-1 flex flex-col items-start bg-white">
              <h3 className="text-[26px] font-bold text-[#111827] mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Aadya <span className="font-bold text-black text-xl">– Private GPT</span>
              </h3>
              <p className="text-[#6B7280] text-[15px] font-normal mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Secure, scalable private AI for enterprises with on-prem deployment, advanced memory, and full compliance.
              </p>
              
              <ul className="mb-8 w-full">
                {AadyaTexts.map((text, i) => (
                  <BlueFeature key={text} text={text} icon={AadyaIcons[i]} />
                ))}
              </ul>

              <button className="bg-[#292929] hover:bg-black text-white text-[15px] font-bold py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2 mt-auto self-center lg:self-center w-fit" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Deploy Private AI <span className="text-xl leading-none">→</span>
              </button>
            </div>
          </div>

          {/* Neural Farms Card */}
          <div className="rounded-[2.5rem] overflow-hidden border border-[#E5E7EB] flex flex-col bg-white shadow-sm">
            {/* Top image */}
            <div className="h-[200px] sm:h-[240px] relative overflow-hidden bg-gray-100">
              <img
                src="/images/neuralfarms.jpg"
                alt="Neural Farms agriculture AI"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-8 py-8 lg:px-10 lg:py-8 flex-1 flex flex-col items-start bg-white">
              <h3 className="text-[26px] font-bold text-[#111827] mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Neural Farms <span className="font-bold text-black text-xl">– Agrintelligence</span>
              </h3>
              <p className="text-[#6B7280] text-[15px] font-normal mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                AI-powered agriculture platform combining IoT, satellite data, and predictive analytics for smarter farming.
              </p>
              
              <ul className="mb-8 w-full">
                {NeuralTexts.map((text, i) => (
                  <GreenFeature key={text} text={text} icon={NeuralIcons[i]} />
                ))}
              </ul>

              <button className="bg-[#292929] hover:bg-black text-white text-[15px] font-bold py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2 mt-auto self-center lg:self-center w-fit" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Explore Neural Farms <span className="text-xl leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;

