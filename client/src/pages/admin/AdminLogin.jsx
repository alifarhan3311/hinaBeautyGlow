import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/slices/authSlice';
import SectionTitle from '@/components/ui/SectionTitle';

export const AdminLogin = () => {
  useEffect(() => {
    document.title = 'Admin Login | Hina Beauty Glow';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@hinabeautyglow.com' && password === 'admin123') {
      dispatch(
        setCredentials({
          user: { name: 'Salon Admin', email, role: 'admin' },
          token: 'mock-jwt-token',
        })
      );
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-plum font-sans p-4">
      <div className="max-w-md w-full bg-plum-800 border border-gold/20 rounded-2xl p-8 shadow-luxury space-y-6">
        <div className="text-center space-y-2">
          <span className="text-3xl">🔑</span>
          <h2 className="font-display text-2xl font-bold text-gradient-gold uppercase">Admin Portal</h2>
          <p className="text-cream/60 text-xs">Secure login access for salon managers</p>
        </div>

        {error && (
          <div className="bg-red-950/40 border border-red-700/30 text-red-200 text-xs rounded-xl p-3 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase text-gold font-semibold mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hinabeautyglow.com"
              className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gold font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-plum/40 border border-gold/20 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-plum font-bold py-3.5 rounded-xl transition-all duration-300 shadow-gold cursor-pointer"
          >
            Authenticate Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
