import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[100svh] overflow-hidden bg-black">
      <div className="flex flex-col md:flex-row h-full">
        <div className="absolute inset-0 md:relative md:w-[48%] h-full z-0 md:z-10 overflow-hidden pt-0 md:pt-0">
          <div className="w-full h-full relative">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover object-[50%_12%] md:object-[50%_10%]">
              <source src="https://res.cloudinary.com/deb7eunq3/video/upload/v1771862254/HERO_VIDEO_x6jriq.mp4" type="video/mp4" />
            </video>
            <div className="hidden md:block absolute inset-y-0 right-[-1px] w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>
          </div>
          <div className="absolute inset-0 bg-black/10 md:bg-black/0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent md:hidden"></div>
        </div>
        <div className="relative w-full md:w-[52%] h-full flex items-center justify-center md:items-center md:justify-start z-20 px-6 md:px-12 lg:px-20 pt-[35vh] sm:pt-[40vh] md:pt-28">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-xl text-center md:text-left">
            <h1 className="text-[40px] leading-[0.88] md:text-5xl lg:text-[80px] font-black text-white mb-10 md:mb-14 uppercase tracking-tighter shadow-strong">
              {t.hero_title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => scrollTo('coaching')} className="w-full sm:w-[240px] bg-white text-black px-10 py-5 rounded-ios font-black uppercase text-[15px] hover:scale-105 transition-all shadow-2xl">
                {t.hero_btn_1}
              </button>
              <button onClick={() => scrollTo('plans')} className="w-full sm:w-[240px] px-10 py-5 rounded-ios font-black text-[15px] uppercase text-white border-2 border-white/30 bg-white/10 backdrop-blur-md hover:scale-105 transition-all shadow-2xl">
                {t.hero_btn_2}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
