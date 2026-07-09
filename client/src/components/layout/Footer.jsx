import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const curtainY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0vh', '0vh'] : ['12vh', '0vh']);

  return (
    <motion.footer
      ref={ref}
      style={{ y: curtainY }}
      className="parallax-layer bg-plum border-t border-gold/15 pt-18 pb-9 text-cream font-sans"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-13">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl font-bold text-gradient-gold uppercase">Hina Beauty Glow</h3>
            <p className="theme-muted text-sm leading-relaxed">
              Experience premium beauty care in Pickering, Ontario. Specialized in Hydra Facials, collagen therapies, waxing, and luxury skin treatments.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                [Facebook, 'Facebook'],
                [Instagram, 'Instagram'],
                [Youtube, 'YouTube'],
              ].map(([Icon, label], i) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group w-9 h-9 rounded-full bg-surface-strong flex items-center justify-center border border-gold/15 transition-all duration-300 hover:bg-gold hover:text-plum hover:-translate-y-1 hover:shadow-gold"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {[
            {
              heading: 'Quick Links',
              items: [
                ['About Us', '/about'],
                ['Our Services', '/services'],
                ['Gallery', '/gallery'],
                ['Before & After', '/before-after'],
                ['Packages', '/packages'],
                ['Contact Us', '/contact'],
              ],
            },
            {
              heading: 'Policies',
              items: [
                ['Privacy Policy', '/privacy-policy'],
                ['Terms & Conditions', '/terms'],
                ['Cancellation Policy', '/cancellation-policy'],
                ['FAQs', '/faq'],
              ],
            },
          ].map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 24, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.1 + ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-display text-lg font-bold text-gold mb-7">{col.heading}</h4>
              <ul className="space-y-3.5 text-sm theme-muted">
                {col.items.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="hover:text-gold transition-colors duration-300 nav-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h4 className="font-display text-lg font-bold text-gold mb-7">Contact Info</h4>
            <ul className="space-y-3 text-sm theme-muted">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 text-gold shrink-0" size={17} /><span>1455 Rosebank Rd, Pickering, ON L1V 1P3, Canada</span></li>
              <li className="flex items-center gap-2"><Phone className="text-gold shrink-0" size={17} /><span>+1 437-937-8612</span></li>
              <li className="flex items-center gap-2"><Mail className="text-gold shrink-0" size={17} /><span>info@hinabeautyglow.com</span></li>
              <li className="flex items-center gap-2"><Clock className="text-gold shrink-0" size={17} /><span>Monday - Saturday: 9 AM - 8 PM</span></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gold/15 mt-13 pt-9 text-center text-xs theme-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {currentYear} Hina Beauty Glow. All Rights Reserved.</p>
          <div className="flex space-x-5">
            <Link to="/privacy-policy" className="nav-link">Privacy</Link>
            <Link to="/terms" className="nav-link">Terms</Link>
            <Link to="/admin/login" className="nav-link">Admin Portal</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
