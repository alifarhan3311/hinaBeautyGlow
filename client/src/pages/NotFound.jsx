import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 bg-plum font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-6"
      >
        <h1 className="font-display text-9xl font-extrabold text-gold leading-none">404</h1>
        <h2 className="font-display text-2xl font-bold text-cream">Page Not Found</h2>
        <p className="text-cream/70 text-sm leading-relaxed">
          The luxury experience you are looking for does not exist or has been moved. Let us guide you back to our main treatments.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-block bg-gold hover:bg-gold-dark text-plum font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-gold"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
