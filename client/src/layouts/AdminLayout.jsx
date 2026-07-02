import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/authSlice';

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { name: 'Bookings', path: '/admin/bookings', icon: '📅' },
    { name: 'Services', path: '/admin/services', icon: '✨' },
    { name: 'Gallery', path: '/admin/gallery', icon: '🖼️' },
    { name: 'Packages', path: '/admin/packages', icon: '🎁' },
    { name: 'Testimonials', path: '/admin/testimonials', icon: '⭐' },
    { name: 'FAQs', path: '/admin/faqs', icon: '❓' },
    { name: 'Content', path: '/admin/content', icon: '📝' },
    { name: 'Contacts', path: '/admin/contacts', icon: '✉️' },
  ];

  return (
    <div className="flex h-screen bg-plum text-cream overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-plum-800 border-r border-gold/15 flex flex-col justify-between flex-shrink-0">
        <div>
          <div className="h-20 flex items-center justify-center border-b border-gold/10 px-4">
            <h1 className="font-display font-bold text-gradient-gold text-lg tracking-wider uppercase">HBG Admin</h1>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${isActive ? 'bg-gold text-plum' : 'text-cream/70 hover:text-gold hover:bg-gold/10'}`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gold/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-red-950/40 hover:bg-red-900 border border-red-700/30 text-red-200 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 border-b border-gold/10 flex items-center justify-between px-8 bg-plum-800/40">
          <h2 className="font-display text-xl font-semibold text-gold">Management Portal</h2>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-bold text-gold">
              A
            </div>
            <span className="text-sm font-semibold text-cream/80">System Administrator</span>
          </div>
        </header>
        <main className="flex-grow p-8 overflow-y-auto bg-plum/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
