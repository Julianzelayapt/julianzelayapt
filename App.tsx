import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PlanPage from './pages/PlanPage';
import { translations } from './translations';

import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        let attempts = 0;
        const interval = setInterval(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            clearInterval(interval);
          }
          if (attempts > 20) clearInterval(interval);
          attempts++;
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const LanguageSplash: React.FC<{ onSelect: (l: 'es' | 'en' | 'it') => void }> = ({ onSelect }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-end md:items-center justify-center">
      
      {/* === MOBILE: full-screen video background === */}
      <div className="absolute inset-0 z-0 md:hidden">
        <video autoPlay loop muted playsInline onCanPlayThrough={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-[50%_12%] transition-opacity duration-1000 ${videoLoaded ? 'opacity-75' : 'opacity-0'}`}
          poster="https://res.cloudinary.com/deb7eunq3/video/upload/so_0/v1772297417/hero_final_1_vejb4d.jpg"
        >
          <source src="https://res.cloudinary.com/deb7eunq3/video/upload/f_auto,q_auto:best/v1772297417/hero_final_1_vejb4d.mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60"></div>
      </div>

      {/* === DESKTOP: full-height split === */}
      <div className="hidden md:block absolute inset-0 z-0">
        {/* Video covers left portion at full height */}
        <div className="absolute inset-y-0 left-0 w-[65%] overflow-hidden">
          <video autoPlay loop muted playsInline onCanPlayThrough={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover object-[60%_12%] transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster="https://res.cloudinary.com/deb7eunq3/video/upload/so_0/v1772297417/hero_final_1_vejb4d.jpg"
          >
            <source src="https://res.cloudinary.com/deb7eunq3/video/upload/f_auto,q_auto:best/v1772297417/hero_final_1_vejb4d.mp4" />
          </video>
        </div>
        {/* Single full-width gradient that blends video into black — no hard line */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, transparent 25%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,0.92) 60%, #000 70%)'}}></div>
        {/* Top/bottom soft edge */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Desktop content: right side */}
      <div className="hidden md:flex absolute inset-y-0 right-0 w-[45%] flex-col items-center justify-center px-16 text-center z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[2px] w-12 bg-[#FFE50C] mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-bebas text-white text-6xl xl:text-8xl uppercase leading-none mb-2"
        >
          Julian Zelaya
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-bebas text-[#FFE50C] text-xl xl:text-2xl uppercase mb-10 drop-shadow-[0_2px_8px_rgba(255,229,12,0.4)]"
        >
          Personal Trainer
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="h-[1px] w-24 bg-white/15 mb-10"
        />
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {[
            { id: 'es', label: 'Español', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/250px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png' },
            { id: 'en', label: 'English', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/330px-Flag_of_the_United_Kingdom_%283-5%29.svg.png' },
            { id: 'it', label: 'Italiano', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png' }
          ].map((lang, index) => (
            <motion.button
              key={lang.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + (index * 0.12) }}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 229, 12, 1)", color: "#000" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect(lang.id as any)}
              className="w-full py-4 border-2 border-white/20 text-white font-bebas text-2xl uppercase tracking-widest transition-all duration-300 hover:border-[#FFE50C]"
            >
              <div className="flex items-center justify-center gap-3">
                <img src={lang.flag} alt={lang.id} className="w-8 h-auto object-contain shadow-sm rounded-[2px]" />
                <span>{lang.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* === MOBILE: centered content === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full px-6 text-center md:hidden pb-12"
      >
        <div className="flex flex-col gap-4">
          {[
            { id: 'es', label: 'Español', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/250px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png' },
            { id: 'en', label: 'English', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/330px-Flag_of_the_United_Kingdom_%283-5%29.svg.png' },
            { id: 'it', label: 'Italiano', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png' }
          ].map((lang, index) => (
            <motion.button
              key={lang.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + (index * 0.15) }}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 229, 12, 1)", color: "#000" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect(lang.id as any)}
              className="w-full py-2.5 border-2 border-white/25 text-white font-bebas text-2xl uppercase tracking-widest transition-all duration-300 hover:border-[#FFE50C]"
            >
              <div className="flex items-center justify-center gap-3">
                <img src={lang.flag} alt={lang.id} className="w-8 h-auto object-contain shadow-sm rounded-[2px]" />
                <span className="translate-y-px">{lang.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-bebas text-white text-4xl uppercase leading-none mt-8 mb-1"
        >
          Julian Zelaya
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-bebas text-[#FFE50C] text-xl uppercase tracking-widest block"
        >
          Personal Trainer
        </motion.span>
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en' | 'it' | null>(() => {
    return (localStorage.getItem('preferredLang') as 'es' | 'en' | 'it') || null;
  });
  const [isSplashVisible, setIsSplashVisible] = useState(!localStorage.getItem('preferredLang'));
  const t = translations[lang || 'es'];

  useEffect(() => {
    document.title = "Personal Trainer | Online & Presencial | Transformaciones reales | Planes personalizados";
  }, []);

  const handleLanguageSelect = (selectedLang: 'es' | 'en' | 'it') => {
    setLang(selectedLang);
    localStorage.setItem('preferredLang', selectedLang);
    setTimeout(() => setIsSplashVisible(false), 300);
  };

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isSplashVisible && <LanguageSplash key="splash" onSelect={handleLanguageSelect} />}
      </AnimatePresence>
      
      {!isSplashVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollToHash />
          <div className="min-h-screen bg-[var(--ios-bg)] selection:bg-kaki-500/30 selection:text-[var(--ios-text)] font-sans antialiased overflow-x-hidden transition-colors duration-500">
            <Navbar lang={lang || 'es'} setLang={setLang} t={t} />
            
            <Routes>
              <Route path="/" element={<LandingPage t={t} />} />
              <Route path="/plan/:slug" element={<PlanPage t={t} />} />
              <Route path="/guia/:slug" element={<PlanPage t={t} />} />
            </Routes>

            <Footer t={t} />
          </div>
        </motion.div>
      )}
    </BrowserRouter>
  );
};

export default App;
