import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export const BookAppointment = () => {
  useEffect(() => {
    document.title = 'Book Appointment | Hina Beauty Glow';
  }, []);

  const services = [
    'Super Signature Hydra Facial',
    'Collagen Skin Treatment',
    'Pigmentation Treatment',
    'Super Spectrum Face Facial',
    'Micro Needle Treatment',
    'Chemical Peel Treatment',
    'Herbal Facial Face & Neck',
    'Face Wax',
    'Arm Wax',
    'Leg Wax',
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: services[0],
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      alert('Please fill all required fields');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Reservations" title="Book A Glow Session" />

      {submitted ? (
        <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center space-y-4">
          <Sparkles className="mx-auto h-10 w-10 text-gold" strokeWidth={1.8} aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-gold">Booking Submitted!</h3>
          <p className="text-cream/80 text-sm max-w-md mx-auto">
            Thank you, <span className="font-semibold text-cream">{formData.name}</span>. Your appointment request for{' '}
            <span className="font-semibold text-cream">{formData.treatment}</span> on{' '}
            <span className="font-semibold text-cream">{formData.preferredDate}</span> at{' '}
            <span className="font-semibold text-cream">{formData.preferredTime}</span> has been logged. Our manager will
            verify via WhatsApp shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gold hover:bg-gold-light text-plum font-bold px-6 py-2.5 rounded-full text-sm transition-colors duration-300"
            >
              Book Another Session
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-plum-800 border border-gold/15 rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Phone *</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone (e.g. +1 437-937-8612)"
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email (optional)"
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Choose Treatment *</label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold appearance-none"
              >
                {services.map((svc) => (
                  <option key={svc} value={svc} className="bg-plum-800 text-cream">
                    {svc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Preferred Date *</label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gold font-semibold mb-2">Preferred Time *</label>
              <input
                type="time"
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-gold font-semibold mb-2">Special Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any skin allergies or special requests?"
              className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold min-h-[100px] resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-plum font-bold py-3.5 rounded-xl transition-all duration-300 shadow-gold cursor-pointer"
          >
            <span className="inline-flex items-center justify-center gap-2"><Sparkles className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> Submit Appointment Request</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;


