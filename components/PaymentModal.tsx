import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  paypalLink: string;
  mpLink: string;
  t: any;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, paypalLink, mpLink, t }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="bg-white w-full max-w-md rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/50">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="text-center mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-kaki-500 mb-3 block">
                  {t.modal_selected}
                </span>
                <h3 className="text-3xl font-black text-ios-text uppercase tracking-tighter leading-none">
                  {planName}
                </h3>
              </div>

              <div className="space-y-4">
                {/* PayPal Button */}
                <a
                  href={paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-full h-[64px] rounded-full bg-[#ffc43b] hover:bg-[#f2ba36] transition-all transform active:scale-[0.98] px-6 shadow-sm"
                >
                  <img
                    src="https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769834501/paypal-logo_a7weld.webp"
                    alt="PayPal"
                    loading="lazy"
                    className="h-10 w-auto object-contain pointer-events-none"
                  />
                </a>

                {/* Mercado Pago Button */}
                <a
                  href={mpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-full h-[64px] rounded-full bg-white border-2 border-[#00B1EA] hover:bg-gray-50 transition-all transform active:scale-[0.98] shadow-sm px-6"
                >
                  <img
                    src="https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769833551/MercadoPago-Logo-Vector.svg-_zuvfgi.webp"
                    alt="Mercado Pago"
                    loading="lazy"
                    className="h-10 w-auto object-contain pointer-events-none"
                  />
                </a>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-10 font-black uppercase tracking-[0.2em]">
                {t.modal_instruction}
              </p>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;

