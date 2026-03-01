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
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.93, rotateX: 8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="knowledge" className="pt-4 pb-2 px-6 bg-[var(--ios-bg)] overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black text-[var(--ios-text)] mb-3 tracking-tighter uppercase leading-[0.9]"
          >
            {t.knowledge_title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--ios-gray)] font-medium leading-relaxed max-w-2xl"
          >
            {t.knowledge_desc}
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={cardAnim} className="space-y-4">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="aspect-[4/5] rounded-[32px] overflow-hidden bg-[var(--section-bg-alt)] border border-[var(--card-border)] ios-shadow group cursor-pointer"
              >
                <img
                  src={images[idx]}
                  className="w-full h-full object-cover transition-all duration-600 contrast-105 group-hover:scale-110"
                  alt={item.title}
                  loading="lazy"
                />
              </motion.div>
              <div className="px-4">
                <span className="text-[10px] font-black text-kaki-400 uppercase tracking-[0.25em] mb-1 block">{item.tag}</span>
                <h3 className="text-2xl font-black text-[var(--ios-text)] mb-2 uppercase tracking-tighter">{item.title}</h3>
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
