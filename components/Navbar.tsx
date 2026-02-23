import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: 'es' | 'en' | 'it';
  setLang: (l: 'es' | 'en' | 'it') => void;
  t: any;
  isDarkMode: boolean;
  setIsDarkMode: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, isDarkMode, setIsDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`ios-blur transition-all duration-300 rounded-full border border-[var(--card-border)] px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'ios-shadow py-3' : 'py-4'}`}>
            <div className="flex items-center gap-3 cursor-pointer group z-50 relative" onClick={() => scrollTo('hero')}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/icon.png"
                  alt="Julian Zelaya PT"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-bold tracking-tight text-[var(--ios-text)] uppercase text-[12px]">JULIAN ZELAYA PT</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('knowledge')} className="text-[11px] font-black text-[var(--ios-text)] hover:text-kaki-600 transition-colors uppercase tracking-[0.1em] hover:scale-105 transform duration-200">{t.nav_method}</button>
              <button onClick={() => scrollTo('coaching')} className="text-[11px] font-black text-[var(--ios-text)] hover:text-kaki-600 transition-colors uppercase tracking-[0.1em] hover:scale-105 transform duration-200">{t.nav_coaching}</button>
              <button onClick={() => scrollTo('plans')} className="text-[11px] font-black text-[var(--ios-text)] hover:text-kaki-600 transition-colors uppercase tracking-[0.1em] hover:scale-105 transform duration-200">{t.nav_plans}</button>

              <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-6">
                <div className="flex gap-2">
                  {(['es', 'en', 'it'] as const).map(l => (
                    <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full transition-all duration-300 ${lang === l ? 'bg-kaki-600 text-white shadow-md' : 'text-[var(--ios-text)] hover:bg-black/5 dark:hover:bg-white/5'}`}>
                      {l}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 text-[var(--ios-text)] hover:scale-110 transition-all"
                >
                  {isDarkMode ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4 z-50 relative">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--ios-text)] p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
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
            className="fixed inset-0 z-40 bg-[var(--ios-bg)]/80 backdrop-blur-[30px] md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              <button onClick={() => scrollTo('knowledge')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_method}</button>
              <button onClick={() => scrollTo('coaching')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_coaching}</button>
              <button onClick={() => scrollTo('plans')} className="text-3xl font-black text-[var(--ios-text)] uppercase">{t.nav_plans}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
