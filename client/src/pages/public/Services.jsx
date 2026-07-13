import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

export const Services = () => {
  useEffect(() => {
    document.title = 'Premium Services | Hina Beauty Glow';
  }, []);

  const services = [
    {
      name: 'Super Signature Hydra Facial',
      desc: 'A signature hydrating facial designed to refresh dull skin and leave a clean, healthy glow.',
      price: 'CAD $100',
      duration: '90 Min',
      slug: 'super-signature-hydra-facial',
    },
    {
      name: 'Collagen Skin Treatment',
      desc: 'A focused treatment for skin firmness, elasticity, and a smoother youthful-looking finish.',
      price: 'CAD $300',
      duration: '75 Min',
      slug: 'collagen-skin-treatment',
    },
    {
      name: 'Pigmentation Treatment',
      desc: 'Targets uneven tone, dullness, and visible pigmentation for a clearer-looking complexion.',
      price: 'CAD $300',
      duration: '60 Min',
      slug: 'pigmentation-treatment',
    },
    {
      name: 'Super Spectrum Face Facial',
      desc: 'A complete facial session focused on deep cleansing, balance, and visible freshness.',
      price: 'CAD $70',
      duration: '90 Min',
      slug: 'super-spectrum-face-facial',
    },
    {
      name: 'Micro Needle Treatment',
      desc: 'A skin-renewal treatment for good skin with high collagen support and smoother texture.',
      price: 'CAD $125',
      duration: '60 Min',
      slug: 'micro-needle-treatment',
    },
    {
      name: 'Chemical Peel Treatment',
      desc: 'A resurfacing treatment that helps refine texture, brighten tone, and renew the skin surface.',
      price: 'CAD $200',
      duration: '45 Min',
      slug: 'chemical-peel-treatment',
    },
    {
      name: 'Herbal Treatment Facial',
      desc: 'Face and neck facial using 100% herbal, chemical-free products for gentle skin care.',
      price: 'CAD $50',
      duration: '75 Min',
      slug: 'herbal-treatment-facial',
    },
    {
      name: 'Face, Arm & Leg Waxing',
      desc: 'Waxing service for face, arms, and legs only, leaving skin clean and smooth.',
      price: 'CAD $30',
      duration: '45 Min',
      slug: 'face-arm-leg-waxing',
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Salon Menu" title="Our Premium Treatments" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((svc) => (
          <Card key={svc.slug} className="flex flex-col justify-between h-full bg-plum-800 border border-gold/10">
            <div className="space-y-4">
              <Sparkles className="h-7 w-7 text-gold" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-cream hover:text-gold transition-colors duration-300">
                {svc.name}
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed font-sans">{svc.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gold/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] uppercase text-gold font-sans font-semibold">Starting From</span>
                <span className="text-base font-bold text-cream">{svc.price}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gold font-sans font-semibold">Duration</span>
                <span className="text-base font-semibold text-cream/80">{svc.duration}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                to={`/services/${svc.slug}`}
                className="flex-1 text-center py-3 rounded-xl border border-gold/30 text-gold text-xs font-bold hover:bg-gold hover:text-plum transition-all duration-300"
              >
                Learn Details
              </Link>
              <Link
                to="/book-appointment"
                className="flex-1 text-center py-3 rounded-xl bg-gold text-plum text-xs font-bold hover:bg-gold-light transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
