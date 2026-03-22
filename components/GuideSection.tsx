import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { allPlans, PlanData } from '../data/plans';

type Guide = PlanData;

const GuideCard: React.FC<{ guide: Guide; t: any; index: number; onSelect: (guide: Guide) => void }> = ({ guide, t, index, onSelect }) => (
    <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect(guide)}
        className="relative flex flex-col pt-8 pb-8 px-8 overflow-hidden group shadow-2xl cursor-pointer w-full bg-[#0a0a0a]"
        style={{ aspectRatio: '3/4' }}
    >
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
            <img
                src={guide.image}
                alt={t[guide.nameKey]}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="flex-grow"></div>

        {/* Content locked to bottom */}
        <div className="relative z-10 flex flex-col justify-end text-white text-left">
            <h3 className="font-bebas text-5xl md:text-[60px] leading-[0.85] tracking-wide mb-4 text-white drop-shadow-lg uppercase">
                {t[guide.nameKey]}
            </h3>
            <div>
                <span className="bg-white text-black px-4 py-1.5 font-bold uppercase text-[10px] md:text-[11px] tracking-[0.15em] shadow-md">
                    E-BOOK NUTRICIONAL
                </span>
                <div className="mt-6">
                    <div className="inline-block bg-[#FFE50C] text-black px-6 py-2 font-bebas text-xl md:text-2xl tracking-widest uppercase transition-all duration-300 group-hover:scale-110 shadow-lg premium-btn">
                        {t.add_to_cart || "Comprar ahora"}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const GuideSection: React.FC<{ t: any }> = ({ t }) => {
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
    const navigate = useNavigate();

    const guides = allPlans.filter(p => p.category === 'all' && p.type === 'guide');

    return (
        <section id="guide" className="py-24 px-6 bg-[var(--ios-bg)] overflow-hidden relative transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.8em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="text-[#FFE50C] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block"
                    >
                        Alimentación Inteligente
                    </motion.span>
                    <h2 className="font-bebas text-6xl md:text-[90px] text-[var(--ios-text)] mb-6 tracking-wide uppercase leading-none drop-shadow-sm">{t.guide_title}</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0.5 }}
                        className="h-1 w-20 bg-[#FFE50C] mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {guides.map((guide, i) => (
                        <GuideCard key={i} guide={guide} t={t} index={i} onSelect={(p) => navigate(`/guia/${p.slug}`)} />
                    ))}
                </div>
            </div>

            <PaymentModal
                isOpen={!!selectedGuide}
                onClose={() => setSelectedGuide(null)}
                planName={selectedGuide ? t[selectedGuide.nameKey] : ''}
                paypalLink={selectedGuide?.link || '#'}
                mpLink={selectedGuide?.mpLink || '#'}
                t={t}
            />
        </section>
    );
};

export default GuideSection;
