import React from 'react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-plum text-cream">
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
      </div>
      <h2 className="font-display text-xl font-bold tracking-widest text-gradient-gold uppercase animate-pulse">
        Hina Beauty Glow
      </h2>
    </div>
  );
};

export default Loading;
