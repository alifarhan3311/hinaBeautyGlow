import React from 'react';
import { motion } from 'framer-motion';

export const Tabs = ({ activeTab, tabs = [], onChange, className = '' }) => {
  return (
    <div className={`flex border-b border-gold/15 space-x-8 font-sans ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative py-4 text-sm font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${isActive ? 'text-gold' : 'text-cream/65 hover:text-gold'}`}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
