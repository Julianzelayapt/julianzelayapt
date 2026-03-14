import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KnowledgeSection: React.FC<{ t: any }> = ({ t }) => {
  const images = [
    "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1771041444/juli_before_fatl4i.webp",
    "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1771037819/recent_uew5ts.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds interval for a smooth, relaxed transition
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="knowledge" className="py-16 md:py-24 px-6 bg-[var(--ios-bg)] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--ios-text)] mb-8 tracking-tighter uppercase leading-[0.9]"
          >
            {t.about_title}
          </motion.h2>

          <div className="space-y-5 text-[var(--ios-gray)] font-medium leading-relaxed text-[15px] md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.about_p1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.about_p2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t.about_p3}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t.about_p4}
            </motion.p>
          </div>
        </motion.div>

        {/* Image Slider Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden bg-[var(--section-bg-alt)] border border-[var(--card-border)] ios-shadow shadow-2xl group">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Julian Zelaya"
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlay at bottom for better indicator visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Minimalist Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10 transition-opacity duration-300">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${currentIndex === i ? 'w-8 bg-white/90 shadow' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default KnowledgeSection;
