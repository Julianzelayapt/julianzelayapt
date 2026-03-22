import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { allPlans, PlanData } from '../data/plans';

type Plan = PlanData;

const PlanCard: React.FC<{ plan: Plan; t: any; index: number; onSelect: (plan: Plan) => void }> = ({ plan, t, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onSelect(plan)}
    className="relative flex flex-col pt-8 pb-8 px-8 overflow-hidden group h-[480px] cursor-pointer max-w-sm mx-auto w-full bg-[#0a0a0a]"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={plan.image} alt={t[plan.nameKey]} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>

    <div className="flex-grow"></div>

    <div className="relative z-10 flex flex-col justify-end text-white text-left">
      <h3 className="font-bebas text-5xl md:text-[60px] leading-[0.85] tracking-wide mb-4 text-white drop-shadow-lg uppercase">
        {t[plan.nameKey]}
      </h3>
      <div className="mt-6">
        <div className="inline-block bg-[#FFE50C] text-black px-6 py-2 font-bebas text-xl md:text-2xl tracking-widest uppercase transition-all duration-300 group-hover:scale-110 shadow-lg premium-btn">
          {t.add_to_cart || "Empieza ahora"}
        </div>
      </div>
    </div>
  </motion.div>
);

const PlansSection: React.FC<{ t: any }> = ({ t }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const navigate = useNavigate();

  const gymbroPlans = allPlans.filter(p => p.category === 'gymbro');
  const gymgirlPlans = allPlans.filter(p => p.category === 'gymgirl');

  return (
    <section id="plans" className="py-8 px-6 bg-[var(--ios-bg)] overflow-hidden relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="font-bebas text-6xl md:text-[90px] text-[var(--ios-text)] mb-4 tracking-wide uppercase leading-none drop-shadow-sm">{t.plans_title}</h2>
        </motion.div>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFE50C]">{t.gymbro}</h3>
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gymbroPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} t={t} index={i} onSelect={(p) => navigate(`/plan/${p.slug}`)} />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFE50C]">{t.gymgirl}</h3>
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gymgirlPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} t={t} index={i} onSelect={(p) => navigate(`/plan/${p.slug}`)} />
            ))}
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan ? t[selectedPlan.nameKey] : ''}
        paypalLink={selectedPlan?.link || '#'}
        mpLink={selectedPlan?.mpLink || '#'}
        t={t}
      />
    </section>
  );
};

export default PlansSection;
