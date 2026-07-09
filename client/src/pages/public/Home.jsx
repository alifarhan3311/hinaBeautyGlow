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
      <div data-section="home"><HeroSection /></div>
      <div data-section="services"><StatsBar /><FeaturedServices /></div>
      <div data-section="about"><WhyChooseUs /></div>
      <div data-section="before-after"><BeforeAfterSlider /></div>
      <div data-section="testimonials"><TestimonialsCarousel /></div>
      <div data-section="packages"><PackagesSection /></div>
      <div data-section="faq"><FAQSection /></div>
      <div data-section="newsletter"><NewsletterSection /></div>
      <div data-section="contact"><MapSection /></div>
    </>
  );
};

export default Home;
