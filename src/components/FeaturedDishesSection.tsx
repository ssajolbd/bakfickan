import React from 'react';
import { Language } from '../types';
import { FEATURED_DISHES } from '../data/restaurantData';
import { Wine, Info, Sparkles } from 'lucide-react';

interface FeaturedDishesProps {
  lang: Language;
  onExploreFullMenu: () => void;
  onOpenBooking: () => void;
}

export const FeaturedDishesSection: React.FC<FeaturedDishesProps> = ({
  lang,
  onExploreFullMenu,
  onOpenBooking,
}) => {
  return (
    <section
      id="featured"
      className="py-24 sm:py-32 bg-[#EFECE4] text-[#161616] border-t border-[#161616]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#161616]/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1px] bg-[#C8A97E]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#A9875A]">
                {lang === 'en' ? 'SELECTED SPECIALTIES' : 'UTVALDA KLASSIKER'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#161616]">
              {lang === 'en' ? 'From Our Kitchen' : 'Från Vårt Kök'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onExploreFullMenu}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#161616] hover:text-[#A9875A] transition-colors pb-1 border-b border-[#161616]/30 hover:border-[#A9875A] cursor-pointer"
            >
              {lang === 'en' ? 'Explore Full Menu →' : 'Se Hela Menyn →'}
            </button>
          </div>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {FEATURED_DISHES.map((dish, index) => (
            <div
              key={dish.id}
              id={`featured-dish-${dish.id}`}
              className="group bg-[#F7F5F0] rounded-sm overflow-hidden border border-[#161616]/10 hover:border-[#C8A97E]/60 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Dish Photo Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1118]">
                <img
                  src={dish.image}
                  alt={dish.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Badge if present */}
                {dish.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0A1118]/85 backdrop-blur-sm border border-[#C8A97E]/30 text-[#C8A97E] text-[10px] tracking-[0.2em] uppercase font-medium rounded-xs">
                    {dish.badge[lang]}
                  </div>
                )}

                {/* Price in SEK Tag */}
                <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 bg-[#0A1118]/90 text-[#F7F5F0] text-sm font-serif tracking-wider rounded-xs border border-white/10">
                  {dish.price} SEK
                </div>
              </div>

              {/* Dish Information */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#161616] group-hover:text-[#A9875A] transition-colors mb-3">
                    {dish.name[lang]}
                  </h3>
                  <p className="text-sm font-light text-[#555555] leading-relaxed mb-6">
                    {dish.description[lang]}
                  </p>
                </div>

                {/* Wine Pairing & Allergens Footer */}
                <div className="pt-4 border-t border-[#161616]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#777777]">
                  {dish.pairing && (
                    <div className="flex items-center gap-2 text-[#A9875A] font-medium">
                      <Wine className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{dish.pairing[lang]}</span>
                    </div>
                  )}

                  {dish.allergens && (
                    <div className="text-[11px] text-[#888888] sm:text-right">
                      {lang === 'en' ? 'Contains: ' : 'Innehåller: '}
                      {dish.allergens.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#666666] font-light mb-4">
            {lang === 'en'
              ? 'Our menu reflects daily Baltic catches and Gotland season availability.'
              : 'Vår meny formas efter Östersjöns dagsfångst och gotländska säsongsråvaror.'}
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#161616] hover:bg-[#0A1118] text-[#F7F5F0] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md cursor-pointer hover:border-b-2 hover:border-[#C8A97E]"
          >
            {lang === 'en' ? 'Reserve a Table for Dinner' : 'Boka Bord för Middag'}
          </button>
        </div>
      </div>
    </section>
  );
};
