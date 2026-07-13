import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export const ServiceDetails = () => {
  const { slug } = useParams();

  const serviceData = {
    'super-signature-hydra-facial': {
      name: 'Super Signature Hydra Facial',
      price: 'CAD $100',
      duration: '90 Min',
      suit: 'All Skin Types',
      desc: 'A signature hydrating facial designed to refresh dull skin and leave a clean, healthy glow.',
      benefits: ['Refresh dull skin', 'Support hydration', 'Improve glow', 'Clean facial finish'],
    },
    'collagen-skin-treatment': {
      name: 'Collagen Skin Treatment',
      price: 'CAD $300',
      duration: '75 Min',
      suit: 'Aging & Loose Skin',
      desc: 'A focused treatment for skin firmness, elasticity, and a smoother youthful-looking finish.',
      benefits: ['Support collagen', 'Improve firmness', 'Smooth texture', 'Youthful-looking finish'],
    },
    'pigmentation-treatment': {
      name: 'Pigmentation Treatment',
      price: 'CAD $300',
      duration: '60 Min',
      suit: 'Dull & Pigmented Skin',
      desc: 'Targets uneven tone, dullness, and visible pigmentation for a clearer-looking complexion.',
      benefits: ['Target pigmentation', 'Even skin tone', 'Brighten dullness', 'Clarify complexion'],
    },
    'super-spectrum-face-facial': {
      name: 'Super Spectrum Face Facial',
      price: 'CAD $70',
      duration: '90 Min',
      suit: 'Dull & Congested Skin',
      desc: 'A complete facial session focused on deep cleansing, balance, and visible freshness.',
      benefits: ['Deep cleanse', 'Balance skin', 'Fresh facial glow', 'Clean finish'],
    },
    'micro-needle-treatment': {
      name: 'Micro Needle Treatment',
      price: 'CAD $125',
      duration: '60 Min',
      suit: 'Texture & Collagen Support',
      desc: 'A skin-renewal treatment for good skin with high collagen support and smoother texture.',
      benefits: ['Support collagen', 'Refine texture', 'Renew skin feel', 'Improve smoothness'],
    },
    'chemical-peel-treatment': {
      name: 'Chemical Peel Treatment',
      price: 'CAD $200',
      duration: '45 Min',
      suit: 'Uneven & Rough Skin',
      desc: 'A resurfacing treatment that helps refine texture, brighten tone, and renew the skin surface.',
      benefits: ['Refine texture', 'Brighten tone', 'Renew surface', 'Smooth roughness'],
    },
    'herbal-treatment-facial': {
      name: 'Herbal Treatment Facial',
      price: 'CAD $50',
      duration: '75 Min',
      suit: 'Face & Neck',
      desc: 'Face and neck facial using 100% herbal, chemical-free products for gentle skin care.',
      benefits: ['Face and neck care', '100% herbal products', 'Chemical-free formula', 'Gentle treatment'],
    },
    'face-arm-leg-waxing': {
      name: 'Face, Arm & Leg Waxing',
      price: 'CAD $30',
      duration: '45 Min',
      suit: 'Face, Arms & Legs Only',
      desc: 'Waxing service for face, arms, and legs only, leaving skin clean and smooth.',
      benefits: ['Face waxing', 'Arm waxing', 'Leg waxing', 'Smooth finish'],
    },
  };

  const current = serviceData[slug] || serviceData['super-signature-hydra-facial'];

  useEffect(() => {
    document.title = `${current.name} | Hina Beauty Glow`;
  }, [current]);

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Treatment Details" title={current.name} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 items-start">
        <div className="bg-plum-800 border border-gold/15 rounded-2xl p-6 space-y-6">
          <div>
            <span className="block text-xs uppercase text-gold font-semibold">Treatment Price</span>
            <span className="text-2xl font-bold text-cream">{current.price}</span>
          </div>
          <div>
            <span className="block text-xs uppercase text-gold font-semibold">Duration</span>
            <span className="text-xl font-bold text-cream">{current.duration}</span>
          </div>
          <div>
            <span className="block text-xs uppercase text-gold font-semibold">Suitable Skin</span>
            <span className="text-base font-semibold text-cream/80">{current.suit}</span>
          </div>
          <div className="pt-4">
            <Link
              to="/book-appointment"
              className="w-full text-center block bg-gold hover:bg-gold-light text-plum font-bold py-3.5 rounded-xl transition-all duration-300 shadow-gold"
            >
              Book This Session
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gold">Overview</h3>
            <p className="text-cream/85 leading-relaxed text-sm md:text-base">{current.desc}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gold">Key Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center space-x-3 text-sm text-cream/85">
                  <Sparkles className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link to="/services" className="text-gold hover:underline font-semibold flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              <span>Back to Treatments Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
