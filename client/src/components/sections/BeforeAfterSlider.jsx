import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="py-20 bg-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Proven Results"
          title="Clinical Transformations"
          subtitle="Real results from our client glow sessions. Drag the divider to compare the improvements."
        />
        <div className="flex justify-center mt-12">
          <div
            className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury border border-gold/20 select-none cursor-ew-resize"
            onTouchMove={handleTouchMove}
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* After Image */}
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              alt="After treatment skin"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gold text-plum text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
              After Treatment
            </div>

            {/* Before Image with Clip Path */}
            <div
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80"
                alt="Before treatment skin"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-cream text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                Before Treatment
              </div>
            </div>

            {/* Drag Bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gold pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold border-2 border-plum text-plum flex items-center justify-center font-bold text-lg pointer-events-none">
                ↔
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
