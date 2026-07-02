import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import FeaturedServices from '@/components/sections/FeaturedServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import PackagesSection from '@/components/sections/PackagesSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import MapSection from '@/components/sections/MapSection';

export const Home = () => {
  useEffect(() => {
    document.title = 'Hina Beauty Glow | Luxury Beauty Salon Pickering';
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedServices />
      <WhyChooseUs />
      <BeforeAfterSlider />
      <TestimonialsCarousel />
      <PackagesSection />
      <FAQSection />
      <NewsletterSection />
      <MapSection />
    </>
  );
};

export default Home;
