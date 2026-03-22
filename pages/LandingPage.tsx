import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { TESTIMONIALS } from '../constants';

// Lazy load heavy sections
const KnowledgeSection = React.lazy(() => import('../components/KnowledgeSection'));
const CoachingSection = React.lazy(() => import('../components/CoachingSection'));
const PlansSection = React.lazy(() => import('../components/PlansSection'));
const GuideSection = React.lazy(() => import('../components/GuideSection'));

import TestimonialsSection from '../components/TestimonialsSection';

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#FFE50C]/20 border-t-[#FFE50C] animate-spin"></div>
  </div>
);

interface LandingPageProps {
  t: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ t }) => {
  return (
    <main>
      <Hero t={t} />

      <Suspense fallback={<SectionLoader />}>
        <KnowledgeSection t={t} />
      </Suspense>

      <TestimonialsSection t={t} />

      <Suspense fallback={<SectionLoader />}>
        <CoachingSection t={t} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PlansSection t={t} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <GuideSection t={t} />
      </Suspense>

      <section id="cta" className="py-24 px-6 text-center bg-[var(--ios-bg)] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-zinc-900/40 z-0"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bebas text-[#FFE50C] text-xl md:text-2xl uppercase tracking-[0.3em] mb-6 block"
          >
            Training Logic
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 28, skewY: 2 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-bebas text-6xl md:text-[90px] mb-10 leading-[0.85] tracking-wide uppercase drop-shadow-md"
          >
            {t.cta_title}
          </motion.h2>
          <motion.a
            href="https://wa.me/393515122826"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.93 }}
            className="font-bebas inline-block bg-[#FFE50C] text-black px-12 md:px-16 py-4 md:py-5 rounded-none text-2xl md:text-3xl uppercase tracking-widest transition-all shadow-2xl hover:scale-105 hover:brightness-110 hover:shadow-[#FFE50C]/30 premium-btn"
          >
            {t.cta_btn}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default LandingPage;
