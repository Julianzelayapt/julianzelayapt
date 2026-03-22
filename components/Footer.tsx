import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC<{ t: any }> = ({ t }) => {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-12 px-6 border-t border-black/[0.03] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-4 cursor-pointer group w-fit" onClick={(e) => scrollTo('hero', e as any)}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Julian Zelaya PT"
                  className="w-10 h-10 object-contain invert"
                />
              </div>
              <span className="font-bebas text-3xl tracking-[0.1em] text-white group-hover:text-[#FFE50C] transition-colors uppercase">JULIAN ZELAYA PT</span>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-loose uppercase tracking-[0.15em] font-sans">
              {t.contact_footer || 'Llevando tu físico al siguiente nivel. Disciplina, constancia y resultados.'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFE50C]">NAVEGACIÓN</h4>
            <ul className="space-y-4 flex flex-col items-start">
              <li><a href="#hero" onClick={(e) => scrollTo('hero', e)} className="text-[11px] lg:text-[13px] font-bold text-white/50 hover:text-[#FFE50C] transition-colors uppercase tracking-widest inline-block hover:translate-x-1 transform duration-200">Inicio</a></li>
              <li><a href="#knowledge" onClick={(e) => scrollTo('knowledge', e)} className="text-[11px] lg:text-[13px] font-bold text-white/50 hover:text-[#FFE50C] transition-colors uppercase tracking-widest inline-block hover:translate-x-1 transform duration-200">{t.nav_method || 'Método'}</a></li>
              <li><a href="#plans" onClick={(e) => scrollTo('plans', e)} className="text-[11px] lg:text-[13px] font-bold text-white/50 hover:text-[#FFE50C] transition-colors uppercase tracking-widest inline-block hover:translate-x-1 transform duration-200">{t.nav_plans || 'Planes'}</a></li>
              <li><a href="#coaching" onClick={(e) => scrollTo('coaching', e)} className="text-[11px] lg:text-[13px] font-bold text-white/50 hover:text-[#FFE50C] transition-colors uppercase tracking-widest inline-block hover:translate-x-1 transform duration-200">{t.nav_coaching || 'Asesoría'}</a></li>
              <li><a href="#guide" onClick={(e) => scrollTo('guide', e)} className="text-[11px] lg:text-[13px] font-bold text-white/50 hover:text-[#FFE50C] transition-colors uppercase tracking-widest inline-block hover:translate-x-1 transform duration-200">{t.nav_guide || 'Guías'}</a></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFE50C]">CONTACTO</h4>
            <div className="space-y-5 flex flex-col">
              <a href="mailto:JULIANZELAYA@HOTMAIL.COM" className="flex items-center gap-4 text-sm font-semibold text-white/50 hover:text-[#FFE50C] transition-colors group w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE50C]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#FFE50C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="uppercase tracking-widest text-[11px] lg:text-[13px]">Email</span>
              </a>
              <a href="https://www.instagram.com/sortinojulian/#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm font-semibold text-white/50 hover:text-[#FFE50C] transition-colors group w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE50C]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#FFE50C] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="uppercase tracking-widest text-[11px] lg:text-[13px]">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@julian.zelaya44?_r=1&_t=ZN-939oUdVs84U" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm font-semibold text-white/50 hover:text-[#FFE50C] transition-colors group w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFE50C]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#FFE50C] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                  </svg>
                </div>
                <span className="uppercase tracking-widest text-[11px] lg:text-[13px]">TikTok</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          <p className="font-bebas text-sm sm:text-base text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} JULIAN ZELAYA PT. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="font-bebas text-sm sm:text-base text-white/40 uppercase tracking-widest">
            DISEÑADO PARA GANAR.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
