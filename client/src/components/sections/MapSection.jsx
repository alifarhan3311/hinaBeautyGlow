import React from 'react';
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const googleLocation = 'https://search.app.goo.gl/esbuzoM';
const address = '1455 Rosebank Rd, Pickering, ON L1V 1P3, Canada';

export const MapSection = () => {
  return (
    <section className="py-20 bg-plum border-t border-gold/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Location" title="Find Our Studio" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-gold">Hina Beauty Glow</h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-md">
              Located in Pickering, Ontario, Canada. Our private studio offers premium skincare, beauty treatments, and appointment-based salon services.
            </p>
            <div className="divider-gold-left w-12 h-0.5" />
            <ul className="space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-gold" size={18} />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <span>+1 437-937-8612</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold" size={18} />
                <span>info@hinabeautyglow.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-gold" size={18} />
                <span>Monday - Saturday: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <a
              href={googleLocation}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-plum"
            >
              Open Google Location
              <ExternalLink size={16} />
            </a>
          </div>

          <a
            href={googleLocation}
            target="_blank"
            rel="noreferrer"
            className="group flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-gold/15 bg-plum-800 p-8 text-center shadow-luxury transition hover:border-gold/40"
          >
            <div className="space-y-4">
              <MapPin className="mx-auto text-gold" size={42} />
              <h4 className="font-display text-2xl font-bold text-gold">View on Google Maps</h4>
              <p className="mx-auto max-w-sm text-sm text-cream/70">{address}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gold">
                Get Directions <ExternalLink size={15} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;