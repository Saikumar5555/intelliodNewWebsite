const OrangeDot = () => (
  <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 inline-block mt-1.5"></span>
);

const ArrowIconOrange = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Lexsyra = () => {
  const features = [
    'Custom adaptive lessons',
    'Real-time personalisation',
    'Gamified quests & challenges',
    'Parent progress reports',
    'Writing, Math, Science, Languages',
  ];

  const rightFeatures = [
    {
      title: 'AI Avatar Tutor',
      sub: 'Human-like interaction · Voice-enabled guidance',
    },
    {
      title: 'Live AI Feedback System',
      sub: 'Instant corrections · Smart suggestions',
    },
    {
      title: 'Student Progress Insights',
      sub: 'Performance tracking · Parent visibility',
    },
  ];

  return (
    <section id="solutions" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left — Lavender */}
        <div className="bg-[#f5f3ff] px-8 lg:px-14 py-16 lg:py-20">
          <p className="eyebrow mb-4">AI EDUCATION</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Lexsyra – AI Tutor
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
            Your emotionally aware, personalised AI tutor. Lexsyra adapts to each
            student's unique pace – delivering custom adaptive lessons, real-time
            feedback, gamified quests, and rich progress reports across all core
            subjects. Learning, Simplified.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {features.map(f => (
              <div key={f} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm border border-gray-100">
                <OrangeDot />{f}
              </div>
            ))}
          </div>

          <a href="#" id="lexsyra-cta" className="btn-black">
            Explore Lexsyra →
          </a>
        </div>

        {/* Right — Dark Teal */}
        <div className="bg-[#1e5f6e] px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
          {/* Illustration */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img
              src="/images/lexsyra.png"
              alt="Lexsyra AI education illustration"
              className="w-full h-52 object-cover"
            />
          </div>

          <h3 className="text-white text-xl font-bold mb-2">Adaptive Learning Paths</h3>
          <p className="text-teal-200 text-sm mb-8">
            AI customizes every lesson based on student behavior,
            strengths, and learning speed for maximum effectiveness.
          </p>

          <div className="space-y-4">
            {rightFeatures.map(f => (
              <div
                key={f.title}
                className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10"
              >
                <ArrowIconOrange />
                <div>
                  <p className="text-white text-sm font-semibold">{f.title}</p>
                  <p className="text-teal-200 text-xs">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lexsyra;
