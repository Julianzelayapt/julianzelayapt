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
    <section id="hero" className="relative h-[100svh] flex items-center overflow-hidden bg-[#454545]">
      {/* Absolute Background Image for All Devices */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/deb7eunq3/image/upload/v1769622771/banner_nqa7oo.webp"
          alt="Julian Zelaya PT Background"
          className="w-full h-full object-cover object-[5%_0%] md:object-[23%_0%] grayscale-[5%]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft Blend Gradient Overlay from Top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#454545] via-[#454545]/20 to-transparent h-40 md:h-64"></div>
        {/* Responsive Overlays for better contrast */}
        <div className="absolute inset-0 bg-black/5 md:bg-black/5"></div>
      </div>



      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:max-w-xl lg:max-w-2xl text-center md:text-right pt-[55vh] md:pt-24"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mb-6 md:mb-8 tracking-tighter uppercase text-shadow-white mx-auto md:mx-0 max-w-[280px] md:max-w-none"
            >
              {t.hero_title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
              className="hidden md:block text-base md:text-xl text-white/90 mb-10 max-w-lg ml-auto md:ml-auto md:mr-0 leading-tight md:leading-relaxed font-bold md:font-semibold text-shadow-strong"
            >
              {t.hero_desc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center md:justify-end gap-3 md:gap-5 mt-4 md:mt-0"
            >
              <button
                onClick={() => scrollTo('coaching')}
                className="w-[200px] md:w-auto bg-kaki-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-ios font-black text-[11px] uppercase tracking-[0.2em] hover:bg-kaki-700 transition-all shadow-2xl shadow-kaki-600/40 hover:scale-[1.05] active:scale-95 duration-300 ring-4 ring-white/10"
              >
                {t.hero_btn_1}
              </button>
              <button
                onClick={() => scrollTo('plans')}
                className="w-[200px] md:w-auto px-10 md:px-12 py-5 md:py-6 rounded-ios font-black text-[11px] uppercase tracking-[0.2em] text-white bg-white/20 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-[1.05] active:scale-95 duration-300 backdrop-blur-xl shadow-2xl"
              >
                {t.hero_btn_2}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
