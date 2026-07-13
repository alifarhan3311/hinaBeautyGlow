import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

export const PackagesSection = () => {
  const packages = [
    {
      name: 'Glow Starter',
      price: 'CAD $120',
      features: ['Herbal Treatment Facial', 'Face, Arm & Leg Waxing', 'Super Spectrum Face Facial'],
      popular: false,
    },
    {
      name: 'Beauty Queen',
      price: 'CAD $390',
      features: ['Super Signature Hydra Facial', 'Collagen Skin Treatment', 'Face, Arm & Leg Waxing'],
      popular: true,
    },
    {
      name: 'Skin Renewal Session',
      price: 'CAD $610',
      features: ['Pigmentation Treatment', 'Micro Needle Treatment', 'Chemical Peel Treatment'],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Special Offers"
          title="Our Premium Packages"
          subtitle="Explore discounted luxury skin care bundles tailored to maximize your aesthetic results."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={`flex flex-col justify-between h-full bg-plum-800 border ${pkg.popular ? 'border-gold shadow-gold-lg' : 'border-gold/15'}`}
              hover={true}
            >
              <div className="space-y-6">
                {pkg.popular && (
                  <span className="inline-block text-[10px] font-bold bg-gold text-plum px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold theme-text">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-gold mt-2">{pkg.price}</div>
                </div>
                <ul className="space-y-3 text-sm theme-muted font-sans border-t border-gold/10 pt-4">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/book-appointment"
                  className={`w-full text-center block py-3 rounded-xl text-xs font-bold transition-all duration-300 ${pkg.popular ? 'bg-gold text-plum hover:bg-gold-light' : 'border border-gold/40 text-gold hover:bg-gold hover:text-plum'}`}
                >
                  Choose Package
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
