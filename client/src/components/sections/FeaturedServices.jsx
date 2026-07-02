import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

export const FeaturedServices = () => {
  const services = [
    {
      name: 'Super Signature Hydra Facial',
      desc: 'Deep medical hydration using active serums to plump, clarify, and lock standard beauty glow.',
      price: 'CAD $3,500',
      duration: '90 Min',
      slug: 'super-signature-hydra-facial',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Collagen Skin Treatment',
      desc: 'Anti-aging skin firming therapy targeting fine lines, promoting natural protein synthesis.',
      price: 'CAD $4,500',
      duration: '75 Min',
      slug: 'collagen-skin-treatment',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Pigmentation Treatment',
      desc: 'Active melanin balance skin peeling designed to reduce dark spots and uneven tone.',
      price: 'CAD $3,000',
      duration: '60 Min',
      slug: 'pigmentation-treatment',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Super Spectrum Face Facial',
      desc: 'Multilayer standard facial covering deep blackhead extractions and calming gold masques.',
      price: 'CAD $4,000',
      duration: '90 Min',
      slug: 'super-spectrum-face-facial',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section className="py-20 bg-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Luxury Treatments"
          title="Featured Services"
          subtitle="Explore our curated collection of signature aesthetic facials and advanced skin care treatments."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((svc) => (
            <Card key={svc.slug} className="flex flex-col justify-between h-full bg-plum-800 border border-gold/10 overflow-hidden">
              <div className="space-y-4">
                <img src={svc.image} alt={svc.name} className="h-44 w-full rounded-xl object-cover border border-gold/10" loading="lazy" />
                <h3 className="font-display text-lg font-bold text-cream group-hover:text-gold transition-colors duration-300">
                  {svc.name}
                </h3>
                <p className="text-xs text-cream/70 leading-relaxed font-sans">{svc.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gold/10 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase text-gold font-sans font-semibold">Price</span>
                  <span className="text-sm font-bold text-cream">{svc.price}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-gold font-sans font-semibold">Duration</span>
                  <span className="text-sm font-semibold text-cream/80">{svc.duration}</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Link
                  to={`/services/${svc.slug}`}
                  className="flex-1 text-center py-2.5 rounded-xl border border-gold/30 text-gold text-xs font-bold hover:bg-gold hover:text-plum transition-all duration-300"
                >
                  Details
                </Link>
                <Link
                  to="/book-appointment"
                  className="flex-1 text-center py-2.5 rounded-xl bg-gold text-plum text-xs font-bold hover:bg-gold-light transition-all duration-300"
                >
                  Book
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block border border-gold/50 text-gold hover:bg-gold hover:text-plum font-bold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;