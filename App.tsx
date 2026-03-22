import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PlanPage from './pages/PlanPage';
import { translations } from './translations';

import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        let attempts = 0;
        const interval = setInterval(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            clearInterval(interval);
          }
          if (attempts > 20) clearInterval(interval);
          attempts++;
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en' | 'it'>('es');
  const t = translations[lang];

  useEffect(() => {
    document.title = "Personal Trainer | Online & Presencial | Transformaciones reales | Planes personalizados";
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-[var(--ios-bg)] selection:bg-kaki-500/30 selection:text-[var(--ios-text)] font-sans antialiased overflow-x-hidden transition-colors duration-500">
        <Navbar lang={lang} setLang={setLang} t={t} />
        
        <Routes>
          <Route path="/" element={<LandingPage t={t} />} />
          <Route path="/plan/:slug" element={<PlanPage t={t} />} />
          <Route path="/guia/:slug" element={<PlanPage t={t} />} />
        </Routes>

        <Footer t={t} />
      </div>
    </BrowserRouter>
  );
};

export default App;
