import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  lang: 'es' | 'en' | 'it';
  setLang: (l: 'es' | 'en' | 'it') => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const isScrolled = scrolled || !isHome;

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-300 rounded-full px-6 md:px-8 flex items-center justify-between ${isScrolled ? 'bg-[var(--ios-bg)]/80 backdrop-blur-xl ios-shadow py-3 border border-[var(--card-border)]' : 'py-4 bg-transparent border border-transparent'}`}>
            <div className="flex items-center gap-3 cursor-pointer group z-50 relative" onClick={() => scrollTo('hero')}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Julian Zelaya PT"
                  className="w-10 h-10 object-contain transition-all duration-300 invert"
                />
              </div>
              <span className="font-bebas uppercase text-2xl md:text-3xl tracking-wide transition-colors duration-300 text-white translate-y-0.5">
                JULIAN ZELAYA PT
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('knowledge')} className={`font-bebas text-xl md:text-2xl hover:text-[#FFE50C] transition-colors uppercase tracking-wide hover:scale-105 transform duration-200 ${!isScrolled ? 'text-white' : 'text-[var(--ios-text)]'}`}>{t.nav_method}</button>
              <button onClick={() => scrollTo('coaching')} className={`font-bebas text-xl md:text-2xl hover:text-[#FFE50C] transition-colors uppercase tracking-wide hover:scale-105 transform duration-200 ${!isScrolled ? 'text-white' : 'text-[var(--ios-text)]'}`}>{t.nav_coaching}</button>
              <button onClick={() => scrollTo('plans')} className={`font-bebas text-xl md:text-2xl hover:text-[#FFE50C] transition-colors uppercase tracking-wide hover:scale-105 transform duration-200 ${!isScrolled ? 'text-white' : 'text-[var(--ios-text)]'}`}>{t.nav_plans}</button>
              <button onClick={() => scrollTo('guide')} className={`font-bebas text-xl md:text-2xl hover:text-[#FFE50C] transition-colors uppercase tracking-wide hover:scale-105 transform duration-200 ${!isScrolled ? 'text-white' : 'text-[var(--ios-text)]'}`}>{t.nav_guide}</button>

            </div>

            <div className="md:hidden flex items-center gap-4 z-50 relative">
              <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-none transition-colors ${!isScrolled ? 'text-white hover:bg-white/10' : 'text-[var(--ios-text)] hover:bg-black/5 dark:hover:bg-white/5'}`}>
                <div className="relative w-6 h-5">
                  <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }} className="absolute top-0 w-6 h-0.5 bg-current rounded-full" transition={{ duration: 0.3 }}></motion.div>
                  <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className="absolute top-[9px] w-6 h-0.5 bg-current rounded-full"></motion.div>
                  <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 18 }} className="absolute top-0 w-6 h-0.5 bg-current rounded-full" transition={{ duration: 0.3 }}></motion.div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--ios-bg)]/90 backdrop-blur-[40px] md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center w-full px-6">
              <button onClick={() => scrollTo('knowledge')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_method}</button>
              <button onClick={() => scrollTo('coaching')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_coaching}</button>
              <button onClick={() => scrollTo('plans')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_plans}</button>
              <button onClick={() => scrollTo('guide')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_guide}</button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
