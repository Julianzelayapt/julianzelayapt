import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PaymentModal from './PaymentModal';

interface Plan {
  nameKey: string;
  descKey: string;
  link: string;
  mpLink: string;
  image: string;
}

const PlanCard: React.FC<{ plan: Plan; t: any; index: number; onSelect: (plan: Plan) => void }> = ({ plan, t, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{ y: -10 }}
    className="relative flex flex-col p-10 rounded-[32px] border border-black/[0.02] overflow-hidden group h-[400px] shadow-lg cursor-pointer max-w-sm mx-auto w-full"
  >
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={plan.image} alt={t[plan.nameKey]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    </div>

    <div className="relative z-10 flex flex-col h-full text-white">
      <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2">{t[plan.nameKey]}</h3>
      <div className="w-12 h-0.5 bg-kaki-400 mb-auto transition-all duration-300 group-hover:w-20"></div>

      <p className="text-base font-medium text-white/90 mb-8 leading-relaxed italic drop-shadow-md">
        {t[plan.descKey]}
      </p>

      <button
        onClick={() => onSelect(plan)}
        className="w-full py-4 rounded-ios bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] text-center transition-all hover:bg-kaki-500 hover:text-white hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
      >
        {t.select}
      </button>
    </div>
  </motion.div>
);

const PlansSection: React.FC<{ t: any }> = ({ t }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const gymbroPlans: Plan[] = [
    {
      nameKey: "plan_ppl",
      descKey: "desc_ppl",
      link: "https://www.paypal.com/ncp/payment/M6YAGQUPCY2PA",
      mpLink: "https://mpago.la/1ApBxuh",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1769451981/pplxul_shaubl.webp"
    },
    {
      nameKey: "plan_fullbody",
      descKey: "desc_fullbody",
      link: "https://www.paypal.com/ncp/payment/M6YAGQUPCY2PA",
      mpLink: "https://mpago.la/1DMb5Eg",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1769451980/full_body_gfbxzm.webp"
    },
    {
      nameKey: "plan_ul",
      descKey: "desc_ul",
      link: "https://www.paypal.com/ncp/payment/BFTQR6PV7L7XQ",
      mpLink: "https://mpago.la/31khfXn",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1769451980/upper_lower_d17ult.webp"
    }
  ];

  const gymgirlPlans: Plan[] = [
    {
      nameKey: "plan_grow",
      descKey: "desc_grow",
      link: "https://www.paypal.com/ncp/payment/XGVFNANY8S8T6",
      mpLink: "https://mpago.la/2BtQ6E6",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1769451980/grow_e_glow_ypkbzi.webp"
    },
    {
      nameKey: "plan_fullbody",
      descKey: "desc_fullbody",
      link: "https://www.paypal.com/ncp/payment/8HQQDXRDUTZYN",
      mpLink: "https://mpago.la/1EDh3kB",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1769451979/full_body_gymgirl_diimqx.webp"
    }
  ];

  return (
    <section id="plans" className="py-16 px-6 bg-[var(--ios-bg)] overflow-hidden relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-black text-[var(--ios-text)] mb-4 tracking-tighter uppercase leading-none">{t.plans_title}</h2>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymbro}</h3>
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gymbroPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} t={t} index={i} onSelect={setSelectedPlan} />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymgirl}</h3>
            <div className="h-px flex-grow bg-[var(--ios-text)]/5"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gymgirlPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} t={t} index={i} onSelect={setSelectedPlan} />
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
