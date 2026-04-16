import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex flex-col justify-center overflow-hidden" 
      style={{ backgroundImage: 'linear-gradient(180deg, #D7EEFE 0%, #f4faffff 60%, #ffffff 100%)' }}
    >
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-sans"
              >
                <span className="block">Build the Future with</span>
                <span className="block mt-2 md:mt-3">Autonomous</span>
              </motion.h1>
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight gradient-text-blue-purple inline-block w-fit pb-2 font-sans"
              >
                AI Agents
              </motion.h1>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-900 max-w-md leading-relaxed font-sans font-medium mx-auto lg:mx-0"
            >
              <span className="font-bold text-gray-900">Intelliod</span> engineers AI that thinks, acts, and scales -
              powering everything from autonomous sales to intelligent
              agriculture, airport digital twins, and enterprise intelligence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#products" id="hero-explore-products" className="btn-black">
                Explore Products →
              </a>
              <a href="#contact" id="hero-talk-to-us" className="btn-outline">
                Talk to us →
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Floating Cards */}
          <div className="relative flex flex-col gap-4 lg:gap-6 pt-4 lg:pt-0">
            {/* Top row */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Tech Image Card */}
              <div className="relative h-48 sm:h-64 w-full group cursor-default">
                <div className="absolute inset-0 rounded-[2rem] rounded-tl-[8rem] sm:rounded-tl-[16rem] rounded-tr-[2rem] overflow-hidden bg-white transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/images/Hero.jpg"
                    alt="AI technology collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Trending icon badge - 50% Overlap */}
                <div className="absolute -top-4 left-[30%] w-12 sm:w-16 h-12 sm:h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center z-20 group-hover:bg-gray-900 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A8D67B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
              </div>

              {/* Stat Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-8 flex flex-col justify-between h-48 sm:h-64 border border-[#D7EEFE] hover:shadow-2xl transition-all duration-500 group font-sans">
                <div>
                  <div className="flex items-baseline gap-1">
                    <Counter value={10} />
                    <span className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tighter leading-none">M+</span>
                  </div>
                  <div className="mt-2 sm:mt-4 space-y-0.5">
                    <p className="text-sm sm:text-base font-bold">
                      <span className="gradient-text-blue-purple inline-block">AI interactions</span> <span className="text-gray-600 font-bold">handled</span>
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-600">across platforms</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-auto mb-1">
                  <div className="h-2 sm:h-2.5 rounded-2xl bg-gray-300 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#68BEFC]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col min-h-[90px] sm:min-h-[100px] border border-[#D7EEFE] hover:shadow-2xl transition-all duration-500 font-sans">
              <div className="space-y-1 sm:space-y-3 z-10 relative">
                <p className="text-sm sm:text-base font-bold text-gray-500">Drive More Traffic and Sales</p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  AI Ecosystem<br/>in Action
                </h3>
              </div>
              
              <div className="absolute bottom-0 right-2 sm:right-8 flex items-end gap-1.5 sm:gap-2 lg:gap-3.5 h-20 sm:h-24 lg:h-32 opacity-30 sm:opacity-100">
                <Bar height="30%" delay={1.2} />
                <Bar height="65%" delay={1.4} />
                <Bar height="95%" delay={1.6} />
              </div>
            </div>
          </div>
        </div>

        {/* MBS Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 sm:mt-10 rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow gap-4 sm:gap-6 md:gap-4 text-center md:text-left"
          style={{ backgroundImage: 'linear-gradient(180deg, #d7eefe 0%, white 40%)', border: '1px solid #D7EEFE' }}
        >
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-base sm:text-xl font-bold text-gray-900">
              A Strategic subsidiary of <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #8d44c5, #c15b7f, #f97330)' }}>MBS Global Investments</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 w-full md:w-auto md:ml-auto md:px-4">
            {/* Office Logo */}
            <div className="flex items-center">
              <img 
                src="/images/mbs.png" 
                alt="Office of Sheikh Nayef Bin Eid Al Thani" 
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-500"
              />
            </div>

            {/* MBS Global Investments Logo */}
            <div className="flex items-center">
              <img 
                src="/images/mbsinvestment.png" 
                alt="MBS Global Investments" 
                className="h-12 sm:h-16 w-auto object-contain transition-all duration-500"
              />
            </div>
            
            {/* Arrow Button */}
            <a 
              href="https://www.mbs.investments/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex flex-shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 transition-all hover:scale-110 md:ml-4 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Helper Components ---

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref} className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tighter leading-none">{count}</span>;
};

const Bar = ({ height, delay }: { height: string, delay: number }) => (
  <motion.div 
    initial={{ height: 0 }}
    whileInView={{ height }}
    transition={{ 
      duration: 1.2, 
      delay, 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }}
    viewport={{ once: true }}
    className="w-10 sm:w-14 lg:w-16 rounded-t-lg relative overflow-hidden group border-x border-t border-[#D7EEFE]"
    style={{ backgroundImage: 'linear-gradient(180deg, #68befc 0%, #FFFFFF 100%)' }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#763AE5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export default Hero;
