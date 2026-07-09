import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { CalendarDays, Menu, Moon, Sun, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '@/store/slices/uiSlice';
import { selectIsAuthenticated, logout } from '@/store/slices/authSlice';
import { useMagnetic } from '@/hooks/useMagnetic';

const SECTION_IDS = ['home', 'services', 'about', 'testimonials', 'packages', 'contact'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const darkMode = useSelector(selectDarkMode);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { scrollYProgress, scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShrunk(latest > 80);
  });

  // Section-spy: highlight nav links matching the section currently in view
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.querySelector(`[data-section="${id}"]`);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'About', path: '/about', section: 'about' },
    { name: 'Services', path: '/services', section: 'services' },
    { name: 'Gallery', path: '/gallery', section: null },
    { name: 'Before & After', path: '/before-after', section: 'before-after' },
    { name: 'Packages', path: '/packages', section: 'packages' },
    { name: 'Testimonials', path: '/testimonials', section: 'testimonials' },
    { name: 'Contact', path: '/contact', section: 'contact' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  const ThemeIcon = darkMode ? Sun : Moon;
  const bookBtnMagnetic = useMagnetic(0.18);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gold/10 bg-plum/88 backdrop-blur-xl transition-all duration-500 ${
        shrunk ? 'min-h-[60px] shadow-[0_14px_40px_rgba(26,10,18,0.28)]' : 'min-h-[76px] shadow-[0_10px_28px_rgba(26,10,18,0.16)]'
      }`}
    >
      {/* Scroll-progress gold ribbon */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-gold z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 py-2 transition-all duration-500 ${shrunk ? 'py-1.5' : 'py-2'}`}>
          <Link to="/" className="group flex shrink-0 items-center">
            <img
              src="/assets/brand-logo.svg"
              alt="Hina Beauty Glow"
              className={`w-auto max-w-[210px] transition-all duration-500 ${shrunk ? 'h-11' : 'h-14'} group-hover:scale-[1.02]`}
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center xl:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-gold/10 bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.07em] transition-all duration-300 ${
                      isActive
                        ? 'bg-gold/12 text-gold shadow-[inset_0_0_0_1px_rgba(201,168,76,0.24)]'
                        : 'text-cream/75 hover:bg-gold/10 hover:text-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/5 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/12 hover:shadow-gold"
            >
              <ThemeIcon size={18} />
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/admin/dashboard" className="rounded-full border border-gold/25 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold/10">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-shimmer rounded-full bg-gold px-5 py-2.5 text-sm font-black text-plum shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-gold-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                ref={bookBtnMagnetic.ref}
                onMouseMove={bookBtnMagnetic.onMouseMove}
                onMouseLeave={bookBtnMagnetic.onMouseLeave}
                onClick={() => navigate('/book-appointment')}
                className="magnetic btn-shimmer btn-glow inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-black text-plum shadow-gold transition-colors duration-300 hover:bg-gold-light"
              >
                <CalendarDays size={16} />
                Book Now
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/5 text-gold transition-all duration-300 hover:bg-gold/12"
            >
              <ThemeIcon size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/5 text-gold transition-all duration-300 hover:bg-gold/12"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden border-t border-gold/10 bg-surface-strong/95 px-4 pb-5 pt-3 backdrop-blur-xl"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] transition ${
                      isActive ? 'bg-gold/15 text-gold' : 'text-cream/75 hover:bg-gold/10 hover:text-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 border-t border-gold/10 pt-4">
              {isAuthenticated ? (
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="w-full rounded-2xl bg-gold py-3 text-center text-sm font-black text-plum transition hover:bg-gold-light"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gold py-3 text-center text-sm font-black text-plum transition hover:bg-gold-light"
                >
                  <CalendarDays size={16} />
                  Book Appointment
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
