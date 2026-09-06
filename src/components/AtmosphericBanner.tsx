import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AtmosphericBannerProps {
  lang: Language;
}

export const AtmosphericBanner: React.FC<AtmosphericBannerProps> = ({ lang }) => {
  return (
    <section className="relative w-full h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-[#0A1118]">
      {/* Full-bleed Baltic Sea / Visby Coastline Image */}
      <img
        src={RESTAURANT_INFO.images.balticHarborEvening}
        alt="Baltic coast evening ambience"
        className="w-full h-full object-cover object-center scale-105"
        referrerPolicy="no-referrer"
        loading="lazy"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-[#0A1118]/65 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]" />

      {/* Centered Editorial Quote / Coordinates */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-[#F7F5F0]">
        <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C8A97E] font-medium block mb-4">
          57°38&apos;24.8&quot;N 18°17&apos;46.3&quot;E · VISBY
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic text-[#F7F5F0] leading-snug">
          {lang === 'en'
            ? '“Where the scent of salt air meets fresh dill, cold butter, and the crackle of oysters.”'
            : '”Där doften av havsluft möter färsk dill, nyskirat smör och knäppet från färska ostron.”'}
        </blockquote>
      </div>
    </section>
  );
};
