import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Users } from 'lucide-react';
import { FloatingFishBackground } from './FloatingFishBackground';

interface ReservationCalloutProps {
  lang: Language;
  onOpenBooking: () => void;
  onExploreMenu?: () => void;
}

export const ReservationCallout: React.FC<ReservationCalloutProps> = ({
  lang,
  onOpenBooking,
  onExploreMenu,
}) => {
  return (
    <section
      id="booking-cta"
      className="py-24 sm:py-32 bg-[#0A1118] text-[#F7F5F0] relative overflow-hidden border-t border-[#C8A97E]/25"
    >
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#121D2A]/60 via-transparent to-transparent pointer-events-none" />

      {/* Floating Baltic Fish Animation in Callout background */}
      <FloatingFishBackground tone="navy" fishCount={4} className="z-0 opacity-80" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Uppercase Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-5 h-[1px] bg-[#C8A97E]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E]">
            {lang === 'en' ? 'TABLE RESERVATIONS' : 'BORDSBOKNING'}
          </span>
          <span className="w-5 h-[1px] bg-[#C8A97E]" />
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7F5F0] hover:text-[#DFC7A5] transition-colors duration-300 leading-tight mb-6 cursor-default">
          {lang === 'en' ? 'Join Us on Stora Torget' : 'Upplev Bakfickan i Visby'}
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-[#F7F5F0]/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {lang === 'en'
            ? 'We warmly welcome reservations for lunch, early evening oysters, and late candlelit seafood dinners. For parties over 8 guests or spontaneous visits, our walk-in Fish Bar is always open.'
            : 'Vi välkomnar bordsbokningar för lunch, eftermiddagsostron och sena levande ljusmiddagar. För större sällskap eller spontana besök är vår drop-in Fiskbar alltid öppen.'}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            id="callout-book-table-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 bg-[#C8A97E] hover:bg-[#DFC7A5] text-[#0A1118] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl hover:shadow-[#C8A97E]/30 cursor-pointer active:scale-98"
          >
            {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
          </button>

          {onExploreMenu && (
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#F7F5F0] hover:text-[#C8A97E] border border-white/20 hover:border-[#C8A97E] font-medium text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer active:scale-98"
            >
              {lang === 'en' ? 'View Menu' : 'Se Menyn'}
            </button>
          )}
        </div>

        {/* Direct Telephone Note */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#F7F5F0]/70 font-light">
          <div className="flex items-center gap-2 group">
            <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>{lang === 'en' ? 'Prefer booking by phone?' : 'Föredrar du telefonbokning?'}</span>
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="text-[#C8A97E] hover:text-[#DFC7A5] transition-colors font-medium hover:underline"
            >
              {RESTAURANT_INFO.contact.phone}
            </a>
          </div>

          <div className="hidden sm:inline text-white/30">|</div>

          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>{lang === 'en' ? 'Walk-ins always welcome at the Fish Bar.' : 'Drop-in alltid välkommet i Fiskbaren.'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

