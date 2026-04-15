import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';
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
      style={{ backgroundImage: 'linear-gradient(180deg, #D7EEFE 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight font-sans"
              >
                <span className="block">Build the Future with</span>
                <span className="block mt-3">Autonomous</span>
              </motion.h1>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-5xl font-bold leading-tight gradient-text-blue-purple inline-block w-fit pb-2 font-sans"
              >
                AI Agents
              </motion.h1>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-base text-gray-900 max-w-md leading-relaxed font-sans font-medium"
            >
              <span className="font-bold text-gray-900">Intelliod</span> engineers AI that thinks, acts, and scales -
              powering everything from autonomous sales to intelligent
              agriculture, airport digital twins, and enterprise intelligence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#products" id="hero-explore-products" className="btn-black">
                Explore Products →
              </a>
              <a href="#contact" id="hero-talk-to-us" className="btn-outline">
                Talk to us →
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Floating Cards */}
          <div className="relative flex flex-col gap-4 lg:gap-6 pt-8 lg:pt-0">
            {/* Top row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Tech Image Card */}
              <div className="relative h-64 w-full group cursor-default">
                <div className="absolute inset-0 rounded-[2rem] rounded-tl-[16rem] rounded-tr-[2rem] overflow-hidden bg-white transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/images/Hero.jpg"
                    alt="AI technology collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Trending icon badge - 50% Overlap */}
                <div className="absolute -top-4 left-[30%] w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center z-20 group-hover:bg-gray-900 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8D67B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
              </div>

              {/* Stat Card */}
              <div className="bg-white rounded-2xl p-8  flex flex-col justify-between h-64 border border-[#D7EEFE] hover:shadow-2xl transition-all duration-500 group font-sans">
                <div>
                  <div className="flex items-baseline gap-1">
                    <Counter value={10} />
                    <span className="text-5xl font-bold text-gray-900 tracking-tighter leading-none">M+</span>
                  </div>
                  <div className="mt-4 space-y-0.5">
                    <p className="text-base font-bold">
                      <span className="gradient-text-blue-purple inline-block">AI interactions</span> <span className="text-gray-600 font-bold">handled</span>
                    </p>
                    <p className="text-base font-bold text-gray-600">across platforms</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-auto mb-1">
                  <div className="h-2.5 rounded-2xl bg-gray-100 overflow-hidden">
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
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[100px] border border-[#D7EEFE] hover:shadow-2xl transition-all duration-500 font-sans">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-500">Drive More Traffic and Sales</p>
                <h3 className="text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  AI Ecosystem<br/>in Action
                </h3>
              </div>
              
              <div className="absolute bottom-0 right-8 flex items-end gap-3.5 h-32">
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
          className="mt-10 rounded-2xl flex flex-wrap items-center justify-between p-4 px-6 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundImage: 'linear-gradient(180deg, #d7eefe 0%, #FFFFFF 100%)', border: '1px solid #D7EEFE' }}
        >
          <div className="flex items-center gap-4">
            <p className="text-xl font-bold text-gray-900">
              A Strategic subsidiary of <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #8d44c5, #c15b7f, #f97330)' }}>MBS Global Investments</span>
            </p>
          </div>
          
          <div className="flex items-center gap-12 ml-auto px-4">
            {/* Office Logo */}
            <div className="flex items-center">
              <img 
                src="/images/mbs.png" 
                alt="Office of Sheikh Nayef Bin Eid Al Thani" 
                className="h-12 w-auto object-contain transition-all duration-500"
              />
            </div>

            {/* MBS Global Investments Logo */}
            <div className="flex items-center">
              <img 
                src="/images/mbsinvestment.png" 
                alt="MBS Global Investments" 
                className="h-16 w-auto object-contain transition-all duration-500"
              />
            </div>
            
            {/* Arrow Button */}
            <a 
              href="https://www.mbs.investments/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all hover:scale-110 ml-4 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
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

  return <span ref={ref} className="text-5xl font-bold text-gray-900 tracking-tighter leading-none">{count}</span>;
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
    className="w-16 bg-[#68BEFC] rounded-t-sm relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#763AE5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export default Hero;
