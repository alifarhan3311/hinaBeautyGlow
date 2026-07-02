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
      desc: 'Advanced multilayer hydrating facial clearing cellular debris, infusing concentrated hyaluronic acid.',
      price: 'CAD $3,500',
      duration: '90 Min',
      slug: 'super-signature-hydra-facial',
    },
    {
      name: 'Collagen Skin Treatment',
      desc: 'Focuses on firming, restoring face elasticity, and addressing early signs of skin laxity.',
      price: 'CAD $4,500',
      duration: '75 Min',
      slug: 'collagen-skin-treatment',
    },
    {
      name: 'Pigmentation Treatment',
      desc: 'Specialized chemical peels targeting sun spots, dark patches, and uneven skin complexion.',
      price: 'CAD $3,000',
      duration: '60 Min',
      slug: 'pigmentation-treatment',
    },
    {
      name: 'Super Spectrum Face Facial',
      desc: 'Immaculate blackhead cleanup paired with custom LED light therapy for bacterial control.',
      price: 'CAD $4,000',
      duration: '90 Min',
      slug: 'super-spectrum-face-facial',
    },
    {
      name: 'Micro Needle Treatment',
      desc: 'Microneedling therapy promoting cellular repair, collagen induction, and acne scar reduction.',
      price: 'CAD $5,500',
      duration: '60 Min',
      slug: 'micro-needle-treatment',
    },
    {
      name: 'Chemical Peel Treatment',
      desc: 'Exfoliation therapy using AHA/BHA complexes to reveal fresh, glowing skin layers.',
      price: 'CAD $3,500',
      duration: '45 Min',
      slug: 'chemical-peel-treatment',
    },
    {
      name: 'Herbal Facial Face & Neck',
      desc: 'Organic plant extract masks soothing sensitive skin barriers with cooling nutrients.',
      price: 'CAD $2,500',
      duration: '75 Min',
      slug: 'herbal-facial-face-neck',
    },
    {
      name: 'Face Wax',
      desc: 'Gentle charcoal wax hair removal for face and cheeks, maintaining skin smoothness.',
      price: 'CAD $800',
      duration: '30 Min',
      slug: 'face-wax',
    },
    {
      name: 'Arm Wax',
      desc: 'Organic honey wax arm hair removal covering upper arm down to wrists.',
      price: 'CAD $1,200',
      duration: '30 Min',
      slug: 'arm-wax',
    },
    {
      name: 'Leg Wax',
      desc: 'Premium organic leg waxing covering full legs, leaving skin soft and hydrated.',
      price: 'CAD $1,800',
      duration: '45 Min',
      slug: 'leg-wax',
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
