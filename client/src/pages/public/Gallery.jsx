import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import ImageLightbox from '@/components/ui/ImageLightbox';

export const Gallery = () => {
  useEffect(() => {
    document.title = 'Photo Gallery | Hina Beauty Glow';
  }, []);

  const [lightboxSrc, setLightboxSrc] = useState(null);

  const images = [
    {
      src: '/assets/gallery/hydra-facial-room.png',
      alt: 'Luxury hydra facial treatment room at Hina Beauty Glow',
      title: 'Hydra Facial Room',
    },
    {
      src: '/assets/gallery/luxury-facial-suite.png',
      alt: 'Premium facial suite with soft salon lighting',
      title: 'Luxury Facial Suite',
    },
    {
      src: '/assets/gallery/bridal-makeup-station.png',
      alt: 'Bridal makeup station with brushes and warm lighting',
      title: 'Bridal Makeup Station',
    },
    {
      src: '/assets/gallery/skincare-display.png',
      alt: 'Premium skincare products displayed in salon',
      title: 'Skin Care Products',
    },
    {
      src: '/assets/gallery/waxing-treatment-room.png',
      alt: 'Clean waxing treatment room with salon bed',
      title: 'Waxing Treatment Room',
    },
    {
      src: '/assets/gallery/consultation-corner.png',
      alt: 'Comfortable beauty consultation corner',
      title: 'Consultation Corner',
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <SectionTitle eyebrow="Our Studio" title="Salon Photo Gallery" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {images.map((image, i) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setLightboxSrc(image.src)}
            className="group relative cursor-zoom-in aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 bg-plum-800 text-left shadow-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-plum"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading={i < 3 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/90 via-plum/45 to-transparent p-5 text-ivory">
              <p className="font-display text-2xl font-semibold text-ivory drop-shadow-sm">{image.title}</p>
              <span className="mt-2 inline-flex items-center rounded-full border border-gold/35 bg-plum/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Image
              </span>
            </div>
          </button>
        ))}
      </div>

      <ImageLightbox src={lightboxSrc} isOpen={!!lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
};

export default Gallery;
