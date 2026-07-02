import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-plum border-t border-gold/10 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-3xl">✉️</span>
        <h2 className="font-display text-3xl font-bold text-gradient-gold">Join the Glow Club</h2>
        <p className="max-w-md mx-auto text-cream/70 text-sm leading-relaxed">
          Subscribe to receive monthly skin tips, exclusive luxury salon discounts, and priority bookings announcements.
        </p>

        {submitted ? (
          <div className="text-gold font-semibold text-sm animate-pulse">
            Thank you for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-plum-800/80 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/45 text-sm focus:outline-none focus:border-gold"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-plum font-bold px-6 py-3 rounded-xl text-sm transition-colors duration-300 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
