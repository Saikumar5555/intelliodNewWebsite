const ArrowIconOrange = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DigitalTwin = () => {
  const features = [
    {
      title: 'Tower Reconstruction Active',
      sub: '40,000+ towers · IEC compliance verified',
    },
    {
      title: 'Railway Bridge - All Clear',
      sub: 'Computer vision scan · Structural integrity',
    },
    {
      title: 'City Planning Module',
      sub: 'Digital twin live · Multiple municipalities',
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left — Sunset Tower Photo */}
        <div className="h-72 lg:h-auto min-h-[480px] relative">
          <img
            src="/images/tower.png"
            alt="Telecommunications tower at sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — Content */}
        <div className="bg-white px-8 lg:px-14 py-16 lg:py-20 flex flex-col justify-center">
          <p className="eyebrow mb-4">INFRASTRUCTURE INTELLIGENCE</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Digital Twin<br />Technology
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-md">
            Create living digital replicas of physical infrastructure – telecom towers,
            railway bridges, dams, and entire cities. Intelliod's Digital Twin platform
            enables real-time structural monitoring, predictive maintenance,
            3D reconstruction, and regulatory compliance at scale.
          </p>

          {/* Feature cards */}
          <div className="space-y-4 mb-10">
            {features.map(f => (
              <div
                key={f.title}
                className="bg-[#fdf6ee] rounded-xl px-4 py-3 flex items-start gap-3 border border-orange-50"
              >
                <ArrowIconOrange />
                <div>
                  <p className="text-gray-900 text-sm font-semibold">{f.title}</p>
                  <p className="text-gray-500 text-xs">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <a href="#" id="digital-twin-cta" className="btn-black">
              See Digital Twin in Action →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
