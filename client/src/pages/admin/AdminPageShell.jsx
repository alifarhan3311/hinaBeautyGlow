import React from 'react';

const defaultMetrics = ['Today', 'This Week', 'Pending', 'Completed'];

export const AdminPageShell = ({ title, description, metrics = defaultMetrics }) => (
  <section className="space-y-8">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <p className="badge-gold mb-4">Admin</p>
        <h1 className="heading-lg text-gradient-gold">{title}</h1>
        <p className="text-cream/65 mt-3 max-w-2xl">{description}</p>
      </div>
      <button className="btn-primary rounded-xl">Add New</button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((item, index) => (
        <article key={item} className="glass-card p-5">
          <p className="text-cream/50 text-xs uppercase tracking-widest">{item}</p>
          <strong className="block text-3xl text-gold mt-2">{index * 7 + 12}</strong>
        </article>
      ))}
    </div>

    <div className="glass-card overflow-hidden">
      <div className="p-5 border-b border-gold/10 flex items-center justify-between">
        <h2 className="heading-md text-cream">{title} Queue</h2>
        <span className="text-xs text-gold">Live ready</span>
      </div>
      <div className="divide-y divide-gold/10">
        {['Recent entry', 'Needs review', 'Approved item'].map((item, index) => (
          <div key={item} className="p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-cream">{item}</p>
              <p className="text-sm text-cream/50">Record #{index + 1} prepared for API integration.</p>
            </div>
            <span className="badge-gold">Ready</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdminPageShell;
