import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { translations } from './translations';
import { TESTIMONIALS } from './constants';

// Lazy load heavy sections
const KnowledgeSection = React.lazy(() => import('./components/KnowledgeSection'));
const CoachingSection = React.lazy(() => import('./components/CoachingSection'));
const PlansSection = React.lazy(() => import('./components/PlansSection'));
const GuideSection = React.lazy(() => import('./components/GuideSection'));

// Loading component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 rounded-full border-2 border-kaki-200 border-t-kaki-600 animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en' | 'it'>('es');
  const t = translations[lang];

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [direction, setDirection] = useState(1);

  // Responsive Configuration
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      let count = 3;
      if (w < 768) count = 1;
      else if (w < 1150) count = 2; // Tablet/Small Laptop
      setItemsToShow(count);
      // Safety: always reset to start on resize to prevent boundary issues
      setCurrentIndex(0);
      setDirection(1);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const totalItems = TESTIMONIALS.length;
  // maxIndex is the last index where the view is full
  // e.g. 6 items, 3 visible -> maxIndex is 3 (Items 4,5,6)
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Auto-Slide Logic (Strict yoyo)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1) {
          if (prev >= maxIndex) {
            setDirection(-1);
            return Math.max(0, prev - 1);
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setDirection(1);
            return Math.min(maxIndex, prev + 1);
          }
          return prev - 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, direction]);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[var(--ios-bg)] selection:bg-kaki-500/30 selection:text-[var(--ios-text)] font-sans antialiased overflow-x-hidden transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} t={t} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero t={t} />

        <Suspense fallback={<SectionLoader />}>
          <KnowledgeSection t={t} />
        </Suspense>

        {/* Testimonios Section */}
        <section id="testimonios" className="py-8 md:py-16 px-6 bg-[var(--ios-bg)] overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h3 className="text-4xl md:text-6xl font-black text-[var(--ios-text)] uppercase tracking-tighter mb-4 px-4">
                {t.testimonials}
              </h3>
              <p className="text-[var(--ios-text)]/60 text-sm md:text-base max-w-2xl mx-auto font-medium px-6">
                {t.testimonials_desc}
              </p>
            </motion.div>

            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Ultra-Simple Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 lg:px-4">
                <button
                  onClick={() => {
                    setCurrentIndex(prev => Math.max(0, prev - 1));
                    setDirection(-1);
                  }}
                  className={`pointer-events-auto w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[var(--card-bg)] shadow-2xl border border-[var(--card-border)] transition-all ${currentIndex === 0 ? 'opacity-0 scale-90' : 'opacity-100'}`}
                  disabled={currentIndex === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ios-text)]">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
                    setDirection(1);
                  }}
                  className={`pointer-events-auto w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[var(--card-bg)] shadow-2xl border border-[var(--card-border)] transition-all ${currentIndex === maxIndex ? 'opacity-0 scale-90' : 'opacity-100'}`}
                  disabled={currentIndex === maxIndex}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ios-text)]">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              <div className="max-w-7xl mx-auto px-10 md:px-14 lg:px-20 overflow-hidden">
                <motion.div
                  className="flex cursor-grab active:cursor-grabbing touch-none"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }} // We handle boundaries in onDragEnd
                  onDragEnd={(_, info) => {
                    const threshold = 50;
                    if (info.offset.x < -threshold && currentIndex < maxIndex) {
                      setCurrentIndex(p => p + 1);
                    } else if (info.offset.x > threshold && currentIndex > 0) {
                      setCurrentIndex(p => p - 1);
                    }
                  }}
                  animate={{
                    // Percentage displacement relative to the motion.div width
                    x: `-${(currentIndex / totalItems) * 100}%`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 32,
                    mass: 0.6
                  }}
                  style={{
                    // Tape width: (6 / 3) * 100% = 200% on desktop
                    width: `${(totalItems / itemsToShow) * 100}%`
                  }}
                >
                  {TESTIMONIALS.map((testimonial) => {
                    // Safety check for keys
                    const traKey = `t${testimonial.id}_tra` as keyof typeof t;
                    const quoKey = `t${testimonial.id}_quo` as keyof typeof t;

                    return (
                      <div
                        key={testimonial.id}
                        className="flex-shrink-0 p-3 md:p-5"
                        style={{ width: `${100 / totalItems}%` }}
                      >
                        <div className="bg-[var(--card-bg)] p-4 md:p-6 rounded-[24px] md:rounded-[40px] border border-[var(--card-border)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] h-full flex flex-col transition-colors duration-500">
                          <div className="aspect-[4/5] rounded-[16px] md:rounded-[24px] overflow-hidden mb-4 shadow-md">
                            <img
                              src={testimonial.image}
                              className="w-full h-full object-cover"
                              alt={testimonial.name}
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="space-y-0.5">
                              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-kaki-600">
                                {(t as any)[traKey]}
                              </p>
                              <h4 className="text-xl md:text-2xl font-black text-[var(--ios-text)] tracking-tight uppercase">
                                {testimonial.name}
                              </h4>
                            </div>
                            <p className="text-[var(--ios-text)]/80 text-sm md:text-[15px] leading-snug font-medium italic">
                              {(t as any)[quoKey]}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Robust Indicators */}
              <div className="flex justify-center gap-4 mt-12 mb-4">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      setDirection(i === maxIndex ? -1 : 1);
                    }}
                    className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-10 bg-kaki-600' : 'w-2 bg-kaki-200'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoader />}>
          <CoachingSection t={t} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PlansSection t={t} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GuideSection t={t} />
        </Suspense>

        <section className="py-24 px-6 text-center bg-ios-text text-white overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <span className="text-kaki-500 font-black text-[9px] uppercase tracking-[0.5em] mb-6 block">Training Logic</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">{t.cta_title}</h2>
            <motion.a
              href="https://wa.me/393515122826"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-kaki-600 text-white px-12 md:px-16 py-5 md:py-6 rounded-ios font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-2xl hover:shadow-kaki-600/20"
            >
              {t.cta_btn}
            </motion.a>
          </motion.div>
        </section>
      </main >
      <Footer t={t} />
    </div >
  );
};

export default App;
