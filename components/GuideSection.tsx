import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PaymentModal from './PaymentModal';

interface Guide {
    nameKey: string;
    descKey: string;
    link: string;
    mpLink: string;
    image: string;
}

const GuideCard: React.FC<{ guide: Guide; t: any; index: number; onSelect: (guide: Guide) => void }> = ({ guide, t, index, onSelect }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8 }}
        className="relative flex flex-col overflow-hidden group shadow-2xl cursor-pointer w-full rounded-[36px] border border-white/5"
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
            {/* Smooth multi-stop gradient from physique to black text area */}
            <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black from-30% via-black/70 via-55% to-transparent"></div>
        </div>

        {/* Content locked to bottom */}
        <div className="relative z-10 flex flex-col h-full text-white justify-end p-6">
            <div className="space-y-3 mb-4">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-kaki-400 block">E-Book</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">{t[guide.nameKey]}</h3>
                <div className="w-10 h-0.5 bg-kaki-400 rounded-full"></div>
                <p className="text-[13px] font-medium text-white/90 leading-relaxed italic">
                    {t[guide.descKey]}
                </p>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(guide);
                }}
                className="w-full py-4 rounded-2xl bg-white text-black font-black text-[11px] uppercase tracking-[0.25em] transition-all hover:bg-kaki-500 hover:text-white hover:scale-[1.02] active:scale-95 shadow-xl"
            >
                {t.guide_select}
            </button>
        </div>
    </motion.div>
);

const GuideSection: React.FC<{ t: any }> = ({ t }) => {
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

    const guides: Guide[] = [
        {
            nameKey: "guide_cutting_name",
            descKey: "guide_cutting_desc",
            link: "https://www.paypal.com/ncp/payment/SAFMKVCXN34NE",
            mpLink: "https://mpago.la/2PUMTjD",
            image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1772338921/defi-guide-Editado_jet9yx.webp"
        },
        {
            nameKey: "guide_bulking_name",
            descKey: "guide_bulking_desc",
            link: "https://www.paypal.com/ncp/payment/GH2SE96AX9JRJ",
            mpLink: "https://mpago.la/2EzrGNz",
            image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1772345711/Dise%C3%B1o-sin-t%C3%ADtulo_ne7vdq.webp"
        }
    ];

    return (
        <section id="guide" className="py-24 px-6 bg-[var(--ios-bg)] overflow-hidden relative transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-kaki-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Alimentación Inteligente</span>
                    <h2 className="text-4xl md:text-7xl font-black text-[var(--ios-text)] mb-6 tracking-tighter uppercase leading-none">{t.guide_title}</h2>
                    <div className="h-1 w-20 bg-kaki-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {guides.map((guide, i) => (
                        <GuideCard key={i} guide={guide} t={t} index={i} onSelect={setSelectedGuide} />
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
