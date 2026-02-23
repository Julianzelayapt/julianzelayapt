import React from 'react';
import { motion } from 'framer-motion';

const KnowledgeSection: React.FC<{ t: any }> = ({ t }) => {
  const images = [
    "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1771041444/juli_before_fatl4i.webp",
    "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1771037819/recent_uew5ts.webp",
    "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1771037615/486052a3-024d-4525-aa20-906a489a4aab_a6b6hj.webp"
  ];

  const items = [
    { tag: t.k_science_tag, title: t.k_science_title, desc: t.k_science_desc },
    { tag: t.k_practice_tag, title: t.k_practice_title, desc: t.k_practice_desc },
    { tag: t.k_opt_tag, title: t.k_opt_title, desc: t.k_opt_desc }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="knowledge" className="pt-8 pb-4 px-6 bg-[var(--ios-bg)] overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--ios-text)] mb-4 tracking-tighter uppercase leading-[0.9]">{t.knowledge_title}</h2>
          <p className="text-lg text-[var(--ios-gray)] font-medium leading-relaxed max-w-2xl">{t.knowledge_desc}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={itemAnim} className="space-y-6">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-[var(--section-bg-alt)] border border-[var(--card-border)] ios-shadow group hover-zoom cursor-pointer">
                <img
                  src={images[idx]}
                  className="w-full h-full object-cover transition-all duration-700 contrast-105 group-hover:scale-110"
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="px-4">
                <span className="text-[10px] font-black text-kaki-400 uppercase tracking-[0.25em] mb-2 block">{item.tag}</span>
                <h3 className="text-2xl font-black text-[var(--ios-text)] mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-[var(--ios-gray)] leading-relaxed font-medium text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeSection;

