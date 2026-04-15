import React from 'react';

const sectors = [
  {
    name: 'Hospitality',
    image: '/images/Hospitality.jpg',
    fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
  {
    name: 'Aviation',
    image: '/images/Aviation.jpg',
    fallback: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    name: 'Education',
    image: '/images/Education.jpg',
    fallback: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    name: 'Finance',
    image: '/images/Finance.jpg',
    fallback: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    name: 'Agriculture',
    image: '/images/Agriculture.jpg',
    fallback: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  },
  {
    name: 'Enterprise',
    image: '/images/Enterprise.jpg',
    fallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    name: 'Governance',
    image: '/images/Governance.jpg',
    fallback: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    name: 'Transportation',
    image: '/images/Transportation.jpg',
    fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
];

const SectorsGrid = () => {
  return (
    <section className="bg-[#FCFCFE] py-20 lg:py-24 relative overflow-hidden" id="sectors">
      {/* Decorative abstract blob top-right */}
      <div className="absolute top-0 right-0 pointer-events-none hidden md:block">
        <svg width="280" height="350" viewBox="0 0 280 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-[15%] -translate-y-[15%]">
          <path d="M280 0 L280 320 C220 340, 160 300, 190 220 C220 140, 130 110, 160 40 C175 10, 230 5, 280 0 Z" fill="#FDF5FF" stroke="#E9D5FF" strokeWidth="2" />
          <path d="M240 -30 C210 20, 160 40, 140 100 C110 160, 160 210, 130 250" stroke="#F3E8FF" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="text-[18px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008DFF] via-[#763AE5] to-[#FF7627]">
              SECTORS WE POWER
            </span>
          </p>
          <h2 className="text-[36px] lg:text-[48px] font-bold text-[#111827] leading-tight tracking-tight">
            AI Across Every Critical Industry
          </h2>
        </div>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-12 max-w-[1100px] mx-auto">
          {sectors.map((sector) => (
            <div key={sector.name} className="flex flex-col items-center group cursor-pointer w-full">
              {/* Square rounded image */}
              <div className="w-full aspect-square rounded-[2rem] overflow-hidden bg-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] mb-4 lg:mb-5 relative border border-gray-100/50">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => { e.currentTarget.src = sector.fallback; }}
                />
              </div>
              {/* Label below */}
              <p className="text-[18px] lg:text-[20px] font-semibold text-[#111827] text-center tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {sector.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;
