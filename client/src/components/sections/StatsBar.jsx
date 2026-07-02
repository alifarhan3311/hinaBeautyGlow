import React from 'react';

export const StatsBar = () => {
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '10+', label: 'Premium Treatments' },
    { value: '5★', label: 'Client Rating' },
    { value: '100%', label: 'Hygiene Standard' },
  ];

  return (
    <section className="bg-plum-800 border-y border-gold/15 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-gold tracking-tight">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium text-cream/70 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
