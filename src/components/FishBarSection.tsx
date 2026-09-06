import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Clock } from 'lucide-react';
import { FloatingFishBackground } from './FloatingFishBackground';

interface FishBarSectionProps {
  lang: Language;
  onOpenBooking?: () => void;
}

export const FishBarSection: React.FC<FishBarSectionProps> = ({ lang }) => {
  return (
    <section
      id="fish-bar"
      className="py-24 sm:py-32 bg-[#121D2A] text-[#F7F5F0] relative overflow-hidden border-t border-[#C8A97E]/20"
    >
      {/* Floating Baltic Fish Animation in Fish Bar background */}
      <FloatingFishBackground tone="navy" fishCount={3} className="z-0 opacity-65" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information & Drop-in message */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[1px] bg-[#C8A97E]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C8A97E]">
                {lang === 'en' ? 'CASUAL & VIBRANT' : 'LEVANDE & AVSPÄNT'}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F5F0] hover:text-[#DFC7A5] transition-colors duration-300 leading-tight mb-6 cursor-default">
              {lang === 'en' ? 'Fiskbaren — The Oyster & Wine Bar' : 'Fiskbaren — Ostron & Vinbaren'}
            </h2>

            <p className="text-base sm:text-lg font-light text-[#F7F5F0]/85 leading-relaxed mb-6">
              {RESTAURANT_INFO.fishBarNote[lang]}
            </p>

            {/* Drop-in Policy Highlight Box */}
            <div className="p-5 sm:p-6 bg-[#0A1118]/80 border border-[#C8A97E]/30 hover:border-[#C8A97E] transition-colors duration-300 rounded-xs mb-8">
              <div className="flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                <Clock className="w-4 h-4" />
                <span>{lang === 'en' ? 'No Table Reservation Required' : 'Ingen Bordsbokning Krävs'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F7F5F0]/80 font-light leading-relaxed">
                {lang === 'en'
                  ? 'The zinc Fish Bar operates strictly on a walk-in basis from 11:30 daily. Perfect for spontaneous toasts, afternoon snacks, and late evening wine.'
                  : 'Fiskbaren har alltid drop-in från kl. 11:30 alla dagar. Perfekt för spontana besök, ostronsug på eftermiddagen eller sena kvällssnacks.'}
              </p>
            </div>

            {/* Bar Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l border-[#C8A97E]/40 pl-4 group">
                <span className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 block">
                  {lang === 'en' ? 'Fresh Oysters' : 'Färska Ostron'}
                </span>
                <span className="text-xs text-[#F7F5F0]/70 font-light mt-1 block">
                  {lang === 'en' ? 'Shucked live on ice' : 'Öppnas direkt på is'}
                </span>
              </div>

              <div className="border-l border-[#C8A97E]/40 pl-4 group">
                <span className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 block">
                  {lang === 'en' ? 'Wines by Glass' : 'Vin på Glas'}
                </span>
                <span className="text-xs text-[#F7F5F0]/70 font-light mt-1 block">
                  {lang === 'en' ? 'Chablis, Muscadet & Bubbles' : 'Chablis, Muscadet & Champagne'}
                </span>
              </div>

              <div className="border-l border-[#C8A97E]/40 pl-4 group">
                <span className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 block">
                  {lang === 'en' ? 'Baltic Small Plates' : 'Smårätter'}
                </span>
                <span className="text-xs text-[#F7F5F0]/70 font-light mt-1 block">
                  {lang === 'en' ? 'Smoked prawns & vendace roe' : 'Rökta räkor & löjrom'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual of the Bar */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#C8A97E]/30 shadow-2xl group">
              <img
                src={RESTAURANT_INFO.images.charcutierOysterBar}
                alt="Bakfickan Visby Fish Bar and oyster station"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A1118]/90 backdrop-blur-sm border border-white/10 group-hover:border-[#C8A97E]/50 transition-colors duration-300 rounded-xs">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A97E] font-medium block">
                  {lang === 'en' ? 'THE VIBE' : 'KÄNSLAN'}
                </span>
                <p className="text-xs text-[#F7F5F0] font-light mt-1">
                  {lang === 'en'
                    ? 'Clinking glassware, oyster shucking knives, and cheerful Gotland chatter.'
                    : 'Klirrande glas, ostronknivar och härligt gotländskt sorl.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

