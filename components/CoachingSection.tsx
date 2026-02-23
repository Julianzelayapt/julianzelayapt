import React from 'react';
import { motion } from 'framer-motion';

const CoachingSection: React.FC<{ t: any }> = ({ t }) => {
  const wspLink = "https://wa.me/393515122826";

  return (
    <section id="coaching" className="pt-2 pb-10 px-6 bg-[var(--section-bg-alt)] overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[var(--card-bg)] rounded-[48px] p-8 md:p-14 relative ios-shadow border border-[var(--card-border)] transition-colors duration-500">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1"
            >
              <span className="text-kaki-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4 block">Premium Mentorship</span>
              <h2 className="text-4xl md:text-6xl font-black text-[var(--ios-text)] mb-6 leading-[0.9] uppercase tracking-tighter">{t.coaching_title}</h2>
              <p className="text-xl text-[var(--ios-gray)] mb-8 leading-relaxed font-medium">
                {t.coaching_desc}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-2">
                {/* Basic Pack */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-8 rounded-[32px] bg-[var(--section-bg-alt)] border border-[var(--card-border)] transition-all hover:bg-[var(--card-bg)] hover:ios-shadow"
                >
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-[var(--ios-text)]">{t.pack_basic}</h3>
                  <ul className="space-y-3 mb-8 text-[11px] font-bold text-[var(--ios-gray)] uppercase tracking-wider">
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_routine}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_nutri}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_wsp_1}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_support}</li>
                  </ul>
                  <a href={wspLink} target="_blank" className="inline-block w-full text-center bg-kaki-600 text-white py-4 rounded-ios font-black text-[10px] uppercase tracking-widest hover:bg-kaki-700 transition-all focus:scale-95 active:scale-90 shadow-lg shadow-kaki-600/20">
                    {t.more_info}
                  </a>
                </motion.div>

                {/* Premium Pack */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="p-8 rounded-[32px] bg-zinc-900 text-white border-2 border-kaki-500/50 shadow-[0_0_50px_-12px_rgba(163,181,180,0.3)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 z-20">
                    <span className="bg-kaki-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      {t.most_popular}
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-kaki-500/30 blur-[50px] rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-kaki-300">{t.pack_premium}</h3>
                  <ul className="space-y-3 mb-8 text-[11px] font-bold text-white/70 uppercase tracking-wider relative z-10">
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_routine}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_nutri}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_wsp_all}</li>
                    <li className="flex gap-2"><span>•</span> {t.pack_feature_calls}</li>
                  </ul>
                  <a href={wspLink} target="_blank" className="relative z-10 inline-block w-full text-center bg-white text-black py-4 rounded-ios font-black text-[10px] uppercase tracking-widest hover:bg-kaki-100 transition-all focus:scale-95 active:scale-90 shadow-xl">
                    {t.more_info}
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-sm"
            >
              <div className="relative group">
                <div className="bg-[var(--section-bg-alt)] p-3 rounded-[40px] ios-shadow border-4 border-[var(--card-bg)] transition-all duration-700">
                  <img
                    src="https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451980/yo_y_papa_a7aixs.webp"
                    alt="Coaching Julian"
                    loading="lazy"
                    className="rounded-[30px] w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
