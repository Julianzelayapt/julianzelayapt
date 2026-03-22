import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC<{ t: any }> = ({ t }) => {
  // Triple the items to ensure enough width for the marquee effect
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-[var(--ios-bg)] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-bebas text-6xl md:text-8xl text-[var(--ios-text)] uppercase tracking-tight mb-4 drop-shadow-sm">
            {t.testimonials}
          </h3>
          <p className="text-[var(--ios-text)]/60 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
            {t.testimonials_desc}
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-10">
        {/* Left/Right Fades for premium feel */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--ios-bg)] to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--ios-bg)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 px-4 animate-marquee"
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => {
            const index = testimonial.id;
            const traKey = `t${index}_tra` as keyof typeof t;
            const quoKey = `t${index}_quo` as keyof typeof t;

            return (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[280px] md:w-[320px] flex-shrink-0"
              >
                <div
                  className="bg-[#0c0c0c] border border-zinc-800 h-full flex flex-col group/card transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-zinc-900">
                    <img
                      src={testimonial.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      alt={testimonial.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-[#FFE50C] font-black text-sm uppercase tracking-wider mb-1">
                      {(t as any)[traKey]}
                    </p>
                    <h4 className="font-bebas text-4xl text-white tracking-wide uppercase mb-2">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-[#FFE50C]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                      {(t as any)[quoKey]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
