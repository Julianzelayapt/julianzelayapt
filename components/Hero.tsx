import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[100svh] overflow-hidden bg-black md:bg-[#000000]">
      <div className="flex flex-col md:flex-row h-full">

        {/* Left Side: Video */}
        <motion.div
          className="absolute inset-0 md:relative md:w-[48%] h-full z-0 md:z-10 overflow-hidden"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full h-full relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-[50%_12%] md:object-[50%_10%]"
            >
              <source src="https://res.cloudinary.com/deb7eunq3/video/upload/f_auto,q_auto/v1772297417/hero_final_1_vejb4d.mp4" />
            </video>
            <div className="hidden md:block absolute inset-y-0 right-[-1px] w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>
          </div>
          <div className="absolute inset-0 bg-black/10 md:bg-black/0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent md:hidden"></div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="relative w-full md:w-[45%] h-full flex items-center justify-center md:justify-end z-20 px-6 md:pl-20 lg:pl-32 pt-[25vh] md:pt-28">
          <div className="w-full max-w-xl text-center md:text-left">

            {/* Tag line */}
            <motion.span
              initial={{ opacity: 0, y: -16, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas inline-block text-[#FFE50C] text-lg md:text-xl uppercase tracking-[0.15em] mb-4"
            >
              Julian Zelaya · {t.hero_subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[70px] md:text-[90px] lg:text-[110px] leading-[0.70] md:leading-[0.8] text-white mb-8 md:mb-12 tracking-tight uppercase text-shadow-strong"
            >
              {t.hero_title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollTo('coaching')}
                className="font-bebas w-full sm:w-auto bg-[#FFE50C] text-black px-8 md:px-12 py-3 md:py-4 rounded-ios text-xl md:text-2xl uppercase tracking-wide premium-btn shadow-2xl"
              >
                {t.hero_btn_1}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollTo('plans')}
                className="font-bebas w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 rounded-ios text-xl md:text-2xl uppercase tracking-wide text-white border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-2xl hover:border-[#FFE50C]"
              >
                {t.hero_btn_2}
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
