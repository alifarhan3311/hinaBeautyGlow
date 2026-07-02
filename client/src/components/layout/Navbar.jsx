import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Menu, Moon, Sun, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '@/store/slices/uiSlice';
import { selectIsAuthenticated, logout } from '@/store/slices/authSlice';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = useSelector(selectDarkMode);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Packages', path: '/packages' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  const navLinkClass = ({ isActive }) =>
    `relative rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.07em] transition-all duration-300 ${
      isActive
        ? 'bg-gold/12 text-gold shadow-[inset_0_0_0_1px_rgba(201,168,76,0.24)]'
        : 'text-cream/75 hover:bg-gold/10 hover:text-gold'
    }`;

  const ThemeIcon = darkMode ? Sun : Moon;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/10 bg-plum/88 backdrop-blur-xl shadow-[0_14px_40px_rgba(26,10,18,0.16)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4 py-2">
          <Link to="/" className="group flex shrink-0 items-center">
            <img
              src="/assets/brand-logo.svg"
              alt="Hina Beauty Glow"
              className="h-14 w-auto max-w-[210px] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center xl:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-gold/10 bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {links.map((link) => (
                <NavLink key={link.name} to={link.path} className={navLinkClass}>
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
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/5 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/12"
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
                  className="rounded-full bg-gold px-5 py-2.5 text-sm font-black text-plum shadow-[0_10px_28px_rgba(201,168,76,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-black text-plum shadow-[0_10px_28px_rgba(201,168,76,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                <CalendarDays size={16} />
                Book Now
              </Link>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden border-t border-gold/10 bg-plum-800/95 px-4 pb-5 pt-3 backdrop-blur-xl"
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
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
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