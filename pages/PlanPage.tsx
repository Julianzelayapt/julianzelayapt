import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPlanBySlug } from '../data/plans';
import PaymentModal from '../components/PaymentModal';

interface PlanPageProps {
  t: any;
}

const PlanPage: React.FC<PlanPageProps> = ({ t }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const plan = getPlanBySlug(slug || '');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Personal Trainer | Online & Presencial | Transformaciones reales | Planes personalizados";
  }, [slug, plan, t]);

  if (!plan) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-4xl font-black uppercase mb-4 text-[var(--ios-text)]">Plan no encontrado</h1>
        <Link to="/" className="text-[#FFE50C] font-bold uppercase tracking-widest underline underline-offset-4">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-6" style={{ paddingTop: '130px', paddingBottom: '64px' }}>
      <div className="max-w-6xl mx-auto">
        <Link
          to={plan.type === 'guide' ? '/#guide' : '/#plans'}
          className="flex items-center gap-2 text-[var(--ios-text)] opacity-60 hover:opacity-100 transition-opacity mb-8 w-max relative z-50 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="font-bebas text-xl md:text-2xl tracking-widest uppercase translate-y-0.5">{t.details ? "Volver" : "Back"}</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]"
            >
              <img
                src={plan.image}
                alt={t[plan.nameKey]}
                className="w-full h-auto object-cover object-top"
                style={{ aspectRatio: '3/4' }}
              />
            </motion.div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-[100px] uppercase tracking-wide leading-[0.85] text-[var(--ios-text)] mb-6 drop-shadow-md">
                {t[plan.nameKey]}
              </h1>

              {/* Removed Badges / Rating as requested */}

              <div className="w-20 h-1 bg-[#FFE50C] mb-10 rounded-none"></div>

              <div className="prose prose-lg dark:prose-invert text-[var(--ios-text)] opacity-90 mb-12">
                <p className="text-xl leading-relaxed italic border-l-4 border-[#FFE50C] pl-6 mb-8 uppercase font-medium tracking-wide">
                  {t[plan.descKey]}
                </p>

                {/* A placeholder area for the user to add more specific "What you get" text easily */}
                <div className="mt-12 mb-12">
                   <h3 className="font-bebas text-3xl md:text-5xl text-[var(--ios-text)] tracking-wide uppercase mb-8">{t.details ? "Lo que obtienes:" : "What you get:"}</h3>
                   <div className="grid grid-cols-1 gap-4">
                      {[
                        "Rutina detallada día por día.",
                        "Acceso a todos los ejercicios con indicaciones de técnica.",
                        "Consejos sobre sobrecarga progresiva adaptados al nivel.",
                        "Soporte de progresión y métricas clave."
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-4 bg-[var(--card-bg)] p-4 border border-[var(--card-border)] rounded-none group hover:border-[#FFE50C] transition-colors"
                        >
                          <div className="w-2 h-2 bg-[#FFE50C] group-hover:scale-150 transition-transform"></div>
                          <span className="font-sans text-sm md:text-base uppercase tracking-widest font-bold opacity-80">{item}</span>
                        </motion.div>
                      ))}
                   </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -4, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsPaymentModalOpen(true)}
                className="font-bebas w-full py-5 md:py-6 rounded-none bg-[#FFE50C] text-black text-3xl md:text-4xl uppercase tracking-widest relative overflow-hidden shadow-2xl mb-8 cursor-pointer z-50 transition-all duration-300 premium-btn"
              >
                COMPRAR AHORA
              </motion.button>
              
              {/* Guarantees / Icons */}
              <div className="flex items-center justify-center gap-6 mt-4 opacity-50 text-[var(--ios-text)]">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs uppercase font-bold tracking-wider">Pago Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                   <span className="text-xs uppercase font-bold tracking-wider">Acceso Inmediato</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        planName={t[plan.nameKey]}
        paypalLink={plan.link}
        mpLink={plan.mpLink}
        t={t}
      />
    </main>
  );
};

export default PlanPage;
