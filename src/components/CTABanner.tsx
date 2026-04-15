const CTABanner = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="py-16 px-6 lg:px-8 bg-[#FCFCFE]">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="rounded-[40px] px-8 py-16 lg:py-20 text-center relative overflow-hidden shadow-md"
          style={{ background: 'linear-gradient(to right, #3876FD, #9D4EDD, #D95D62)' }}
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-[36px] lg:text-[46px] font-bold text-white mb-4 tracking-tight leading-tight">
              Ready to Deploy Intelligent AI?
            </h2>
            <p className="text-white/90 text-[17px] lg:text-[19px] mb-10 max-w-[600px] mx-auto leading-relaxed font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Join 400+ enterprises scaling their operations with Intelliod's<br className="hidden md:block"/> autonomous ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="#contact"
                id="cta-banner-contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3876FD] text-[15px] font-bold rounded-full hover:bg-gray-50 transition-all hover:-translate-y-0.5 shadow-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Our Team
              </a>
              <button
                onClick={scrollToTop}
                id="cta-banner-top"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-[15px] font-bold rounded-full transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Back to Top <span className="text-lg leading-none">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
