import React from 'react';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-plum border-t border-gold/15 pt-16 pb-8 text-cream font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gradient-gold uppercase">Hina Beauty Glow</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Experience premium beauty care in Pickering, Ontario. Specialized in Hydra Facials, collagen therapies, waxing, and luxury skin treatments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-plum-800 flex items-center justify-center hover:bg-gold hover:text-plum transition-all duration-300"><Facebook size={17} /></a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-plum-800 flex items-center justify-center hover:bg-gold hover:text-plum transition-all duration-300"><Instagram size={17} /></a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-plum-800 flex items-center justify-center hover:bg-gold hover:text-plum transition-all duration-300"><Youtube size={17} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/about" className="hover:text-gold transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors duration-300">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/before-after" className="hover:text-gold transition-colors duration-300">Before & After</Link></li>
              <li><Link to="/packages" className="hover:text-gold transition-colors duration-300">Packages</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-gold mb-6">Policies</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-gold transition-colors duration-300">Cancellation Policy</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors duration-300">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-gold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 text-gold" size={17} /><span>1455 Rosebank Rd, Pickering, ON L1V 1P3, Canada</span></li>
              <li className="flex items-center gap-2"><Phone className="text-gold" size={17} /><span>+1 437-937-8612</span></li>
              <li className="flex items-center gap-2"><Mail className="text-gold" size={17} /><span>info@hinabeautyglow.com</span></li>
              <li className="flex items-center gap-2"><Clock className="text-gold" size={17} /><span>Monday - Saturday: 9 AM - 8 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/15 mt-12 pt-8 text-center text-xs text-cream/55 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Hina Beauty Glow. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy</Link>
            <Link to="/terms" className="hover:text-gold">Terms</Link>
            <Link to="/admin/login" className="hover:text-gold">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;