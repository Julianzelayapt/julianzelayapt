import React from 'react';
import { motion } from 'framer-motion';

const CoachingSection: React.FC<{ t: any }> = ({ t }) => {
  const wspLink = "https://wa.me/393515122826";

  const listItemVariants = {
    hidden: { opacity: 0, x: -16 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.38, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="coaching" className="pt-2 pb-10 px-6 bg-[var(--section-bg-alt)] overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--card-bg)] rounded-none p-8 md:p-14 relative ios-shadow border border-[var(--card-border)] transition-colors duration-500"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1"
            >
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-bebas text-[#FFE50C] text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 block"
              >
                Premium Mentorship
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-6xl md:text-[90px] text-[var(--ios-text)] mb-6 leading-[0.85] uppercase tracking-wide drop-shadow-sm"
              >
                {t.coaching_title}
              </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-[var(--ios-gray)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 tracking-wide uppercase opacity-80"
              >
                {t.coaching_desc}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-2">
                {/* Basic Pack */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-10 rounded-none bg-[var(--card-bg)] border-2 border-[var(--card-border)] ios-shadow transition-all relative overflow-hidden group min-h-[500px]"
                >
                  <h3 className="font-bebas text-5xl md:text-6xl uppercase mb-6 tracking-wide text-[var(--ios-text)]">{t.pack_basic}</h3>
                  <ul className="space-y-4 mb-10 text-sm md:text-base font-bold text-[var(--ios-gray)] uppercase tracking-widest">
                    {[t.pack_feature_routine, t.pack_feature_nutri, t.pack_feature_wsp_1, t.pack_feature_support].map((feat, i) => (
                      <motion.li key={i} className="flex gap-2" custom={i} variants={listItemVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span>•</span> {feat}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href={wspLink}
                    target="_blank"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-block w-full text-center bg-[#FFE50C] text-black py-5 rounded-none font-bebas text-2xl uppercase tracking-widest premium-btn shadow-lg shadow-black/10 transition-all hover:brightness-110"
                  >
                    {t.more_info}
                  </motion.a>
                </motion.div>

                {/* Premium Pack */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="p-10 rounded-none bg-zinc-900 text-white border-2 border-[#FFE50C] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group min-h-[500px]"
                >
                  <div className="absolute top-0 right-0 p-4 z-20">
                    <motion.span
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.45 }}
                      className="inline-block bg-[#FFE50C] text-black text-[10px] font-black px-4 py-1.5 rounded-none uppercase tracking-widest shadow-xl border border-white/10"
                    >
                      {t.most_popular}
                    </motion.span>
                  </div>
                  <h3 className="font-bebas text-5xl md:text-6xl uppercase mb-6 tracking-wide text-[#FFE50C]">{t.pack_premium}</h3>
                  <ul className="space-y-4 mb-10 text-sm md:text-base font-bold text-white/70 uppercase tracking-widest relative z-10">
                    {[t.pack_feature_routine, t.pack_feature_nutri, t.pack_feature_wsp_all, t.pack_feature_calls].map((feat, i) => (
                      <motion.li key={i} className="flex gap-2" custom={i} variants={listItemVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span>•</span> {feat}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href={wspLink}
                    target="_blank"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    className="relative z-10 inline-block w-full text-center bg-[#FFE50C] text-black py-5 rounded-none font-bebas text-2xl uppercase tracking-widest premium-btn shadow-xl transition-all hover:brightness-110"
                  >
                    {t.more_info}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-sm"
            >
              <div className="relative group">
                <div className="bg-[var(--section-bg-alt)] p-3 rounded-none ios-shadow border-4 border-[var(--card-bg)] transition-all duration-700">
                  <img
                    src="https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451980/yo_y_papa_a7aixs.webp"
                    alt="Coaching Julian"
                    loading="lazy"
                    className="rounded-none w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;
