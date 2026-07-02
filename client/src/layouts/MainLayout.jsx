import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import BackToTop from '@/components/ui/BackToTop';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-plum text-cream">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
