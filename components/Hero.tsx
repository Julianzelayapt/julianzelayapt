import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative h-[100svh] overflow-hidden bg-black md:bg-[#000000]">
      {/* Container for Split Layout on Desktop */}
      <div className="flex flex-col md:flex-row h-full">

        {/* Left Side: Video (Stays background on Mobile) */}
        <div className="absolute inset-0 md:relative md:w-[48%] h-full z-0 md:z-10 overflow-hidden pt-0 md:pt-0">
          <div className="w-full h-full relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-[50%_12%] md:object-[50%_10%]"
            >
              <source src="https://res.cloudinary.com/deb7eunq3/video/upload/f_auto,q_auto/v1771862254/HERO_VIDEO_x6jriq.mp4" type="video/mp4" />
            </video>
            {/* Desktop Gradient Mask (Right Edge) */}
            <div className="hidden md:block absolute inset-y-0 right-[-1px] w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>
          </div>
          {/* Overlays - Lightened for maximum muscle visibility */}
          <div className="absolute inset-0 bg-black/10 md:bg-black/0"></div>
          {/* Mobile Bottom Fade Gradient - Softer to show full body amplitude */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent md:hidden"></div>
        </div>

        {/* Right Side: Content */}
        <div className="relative w-full md:w-[52%] h-full flex items-center justify-center md:items-center md:justify-start z-20 px-6 md:px-12 lg:px-20 pt-[35vh] sm:pt-[40vh] md:pt-28">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xl text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[40px] leading-[0.88] md:text-5xl lg:text-[80px] font-black md:leading-[0.85] text-white mb-10 md:mb-14 tracking-tighter uppercase text-shadow-strong"
            >
              {t.hero_title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
            >
              <button
                onClick={() => scrollTo('coaching')}
                className="w-full sm:w-[240px] md:w-auto bg-white text-black px-10 md:px-16 py-5 md:py-6 rounded-ios font-black text-[15px] md:text-[16px] uppercase tracking-tighter hover:scale-[1.05] active:scale-95 transition-all duration-300 shadow-2xl"
              >
                {t.hero_btn_1}
              </button>
              <button
                onClick={() => scrollTo('plans')}
                className="w-full sm:w-[240px] md:w-auto px-10 md:px-16 py-5 md:py-6 rounded-ios font-black text-[15px] md:text-[16px] uppercase tracking-tighter text-white border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-[1.05] active:scale-95 duration-300 shadow-2xl"
              >
                {t.hero_btn_2}
              </button>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Decorative bar or indicator if needed, currently keeping it clean */}
    </section>
  );
};

export default Hero;
