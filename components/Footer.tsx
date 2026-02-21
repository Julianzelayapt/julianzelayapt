import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC<{ t: any }> = ({ t }) => {
  return (
    <footer className="bg-white pt-16 pb-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-ios-text rounded-full flex items-center justify-center text-white font-black text-[9px]">JZ</div>
              <span className="text-lg font-black tracking-[0.2em] text-ios-text uppercase">JULIAN ZELAYA PT</span>
            </div>
            <p className="text-ios-gray max-w-xs text-xs font-bold leading-relaxed uppercase tracking-tight mb-8">
              {t.contact_footer}
            </p>
            <div className="space-y-4">
              <a href="mailto:JULIANZELAYA@HOTMAIL.COM" className="block text-sm font-black text-ios-text hover:text-kaki-600 transition-all uppercase tracking-widest underline decoration-kaki-200">JULIANZELAYA@HOTMAIL.COM</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-16 gap-y-8"
          >
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-kaki-400">Social</h4>
              <ul className="space-y-4">
                <li><a href="https://www.instagram.com/sortinojulian/#" target="_blank" className="text-xs font-black text-ios-text hover:text-kaki-500 transition-colors uppercase tracking-widest">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@julian.zelaya44?_r=1&_t=ZN-939oUdVs84U" target="_blank" className="text-xs font-black text-ios-text hover:text-kaki-500 transition-colors uppercase tracking-widest">TikTok</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
