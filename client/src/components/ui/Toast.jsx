import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectToasts, removeToast } from '@/store/slices/uiSlice';

export const Toast = () => {
  const toasts = useSelector(selectToasts);
  const dispatch = useDispatch();

  const colors = {
    success: 'bg-green-900/90 text-green-100 border-green-700',
    error: 'bg-red-900/90 text-red-100 border-red-700',
    info: 'bg-plum-800/90 text-cream border-gold/30',
    warning: 'bg-yellow-900/90 text-yellow-100 border-yellow-700',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl border shadow-luxury backdrop-blur-md ${colors[t.type] || colors.info}`}
          >
            <div className="flex-1 text-sm font-sans mr-4">{t.message}</div>
            <button
              onClick={() => dispatch(removeToast(t.id))}
              className="text-cream/50 hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
