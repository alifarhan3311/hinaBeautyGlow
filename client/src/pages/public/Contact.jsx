import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Hina Beauty Glow';
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSuccess(true);
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Get In Touch" title="Contact Our Salon" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="bg-plum-800 border border-gold/15 rounded-2xl p-8 space-y-6">
          <h3 className="font-display text-xl font-bold text-gold">Send Us A Message</h3>
          {success ? (
            <div className="bg-gold/10 border border-gold/30 text-gold rounded-xl p-4 text-sm text-center animate-pulse">Your inquiry has been submitted! Our manager will contact you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-xs uppercase text-gold font-semibold mb-2">Your Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter name" className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold" /></div>
              <div><label className="block text-xs uppercase text-gold font-semibold mb-2">Email Address</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@domain.com" className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold" /></div>
              <div><label className="block text-xs uppercase text-gold font-semibold mb-2">Message</label><textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help you?" className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold min-h-[120px] resize-y" /></div>
              <button type="submit" className="w-full bg-gold hover:bg-gold-light text-plum font-bold py-3.5 rounded-xl transition-all duration-300 shadow-gold cursor-pointer">Send Inquiry</button>
            </form>
          )}
        </div>
        <div className="space-y-6">
          <h3 className="font-display text-2xl font-bold text-gold">Location & Booking Info</h3>
          <p className="text-cream/70 text-sm leading-relaxed">Our treatment sessions are booked strictly in advance to ensure completely private aesthetic service for each client. For emergency rescheduling, please call our studio manager directly.</p>
          <div className="divider-gold-left w-12 h-0.5" />
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-gold" size={18} /><span>1455 Rosebank Rd, Pickering, ON L1V 1P3, Canada</span></li>
            <li className="flex items-center gap-3"><Phone className="text-gold" size={18} /><span>+1 437-937-8612</span></li>
            <li className="flex items-center gap-3"><Mail className="text-gold" size={18} /><span>info@hinabeautyglow.com</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;