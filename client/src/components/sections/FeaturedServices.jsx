import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const FeaturedServices = () => {
  const services = [
    {
      name: 'Super Signature Hydra Facial',
      desc: 'Deep medical hydration using active serums to plump, clarify, and lock standard beauty glow.',
      price: 'CAD $3,500',
      duration: '90 Min',
      slug: 'super-signature-hydra-facial',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=760&q=80',
    },
    {
      name: 'Collagen Skin Treatment',
      desc: 'Anti-aging skin firming therapy targeting fine lines, promoting natural protein synthesis.',
      price: 'CAD $4,500',
      duration: '75 Min',
      slug: 'collagen-skin-treatment',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=760&q=80',
    },
    {
      name: 'Pigmentation Treatment',
      desc: 'Active melanin balance skin peeling designed to reduce dark spots and uneven tone.',
      price: 'CAD $3,000',
      duration: '60 Min',
      slug: 'pigmentation-treatment',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=760&q=80',
    },
    {
      name: 'Super Spectrum Face Facial',
      desc: 'Multilayer standard facial covering deep blackhead extractions and calming gold masques.',
      price: 'CAD $4,000',
      duration: '90 Min',
      slug: 'super-spectrum-face-facial',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=760&q=80',
    },
  ];

  const { ref, container, item } = useScrollReveal({ threshold: 0.15, stagger: 0.12 });

  return (
    <section className="section-pad bg-plum">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Luxury Treatments"
          title="Featured Services"
          subtitle="Explore our curated collection of signature aesthetic facials and advanced skin care treatments."
        />
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-13"
        >
          {services.map((svc) => (
            <motion.div key={svc.slug} variants={item} className="h-full">
              <Card className="flex flex-col justify-between h-full bg-surface-strong border border-gold/10 overflow-hidden">
                {/* Image — existing img-zoom utility now wired up */}
                <div className="img-zoom relative -m-6 mb-5 h-44 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="h-44 w-full object-cover border-b border-gold/15 transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover-only gold vignette on image */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(180deg, transparent 40%, rgba(26,10,18,0.55) 100%)',
                    }}
                  />
                </div>

                {/* Inner stagger: title → desc → meta → CTA */}
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-gradient-gold text-gradient-gold-hover">
                    {svc.name}
                  </h3>
                  <p className="text-xs theme-muted leading-relaxed font-sans">{svc.desc}</p>
                </div>
                <div className="mt-7 pt-4 border-t border-gold/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase text-gold font-sans font-semibold tracking-wider">Price</span>
                    <span className="text-sm font-bold theme-text">{svc.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase text-gold font-sans font-semibold tracking-wider">Duration</span>
                    <span className="text-sm font-semibold theme-muted">{svc.duration}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Link
                    to={`/services/${svc.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl border border-gold/30 text-gold text-xs font-bold hover:bg-gold hover:text-plum transition-all duration-300 hover:shadow-gold"
                  >
                    Details
                  </Link>
                  <Link
                    to="/book-appointment"
                    className="flex-1 text-center py-2.5 rounded-xl bg-gold text-plum text-xs font-bold hover:bg-gold-light hover:shadow-gold-lg transition-all duration-300"
                  >
                    Book
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-13 text-center">
          <Link
            to="/services"
            className="inline-flex btn-shimmer btn-glow border border-gold/50 text-gold hover:bg-gold hover:text-plum font-bold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
