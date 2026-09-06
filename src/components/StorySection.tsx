import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin } from 'lucide-react';
import { FloatingFishBackground } from './FloatingFishBackground';

interface StorySectionProps {
  lang: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ lang }) => {
  return (
    <section
      id="story"
      className="py-24 sm:py-36 bg-[#0A1118] text-[#F7F5F0] relative overflow-hidden border-t border-[#C8A97E]/20"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#C8A97E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Baltic Fish Animation in Story section background */}
      <FloatingFishBackground tone="navy" fishCount={5} className="z-0 opacity-80" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Atmospheric Photography Container (Left Side / 5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#C8A97E]/30 shadow-2xl group">
              <img
                src={RESTAURANT_INFO.images.visbyCobblestones}
                alt="Bakfickan Visby cobblestone square"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent" />
              
              {/* Overlay Location Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A1118]/90 backdrop-blur-md border border-[#C8A97E]/30 rounded-xs transition-colors duration-300 group-hover:border-[#C8A97E]">
                <div className="flex items-center gap-2 text-[#C8A97E] text-[11px] tracking-[0.25em] uppercase font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Stora Torget · Visby</span>
                </div>
                <p className="text-xs text-[#F7F5F0]/80 font-light">
                  {lang === 'en'
                    ? 'In the heart of the UNESCO World Heritage medieval town.'
                    : 'I hjärtat av Visbys medeltida världsarvsstad.'}
                </p>
              </div>
            </div>

            {/* Floating Decorative Gold Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#121D2A] border border-[#C8A97E] text-[#C8A97E] p-4 rounded-xs shadow-xl flex-col items-center justify-center text-center hover:bg-[#1a293a] transition-colors duration-300">
              <span className="font-serif text-2xl font-light leading-none">30+</span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-medium mt-1">
                {lang === 'en' ? 'Years of Passion' : 'År av Matglädje'}
              </span>
            </div>
          </div>

          {/* Editorial Content (Right Side / 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C8A97E]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E]">
                {lang === 'en' ? 'OUR HERITAGE' : 'VÅR HISTORIA'}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F5F0] hover:text-[#DFC7A5] transition-colors duration-300 leading-tight mb-8">
              {RESTAURANT_INFO.story.title[lang]}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#F7F5F0]/85 font-light text-base sm:text-lg leading-relaxed mb-10">
              {RESTAURANT_INFO.story.paragraphs[lang].map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 group">
                <span className="w-2 h-2 rounded-full bg-[#C8A97E] mt-2 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="font-serif text-lg text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 font-normal">
                    {lang === 'en' ? 'Line-Caught Baltic Fish' : 'Krokfångad Östersjöfisk'}
                  </h3>
                  <p className="text-xs text-[#F7F5F0]/70 font-light mt-0.5">
                    {lang === 'en'
                      ? 'Wild Baltic cod, herring, and Arctic char sourced with care.'
                      : 'Vild torsk, strömming och röding levererad varje morgon.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="w-2 h-2 rounded-full bg-[#C8A97E] mt-2 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="font-serif text-lg text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 font-normal">
                    {lang === 'en' ? 'Gotland Island Producers' : 'Gotländska Matproducenter'}
                  </h3>
                  <p className="text-xs text-[#F7F5F0]/70 font-light mt-0.5">
                    {lang === 'en'
                      ? 'Local dairy, wild ramsons (ramslök), chanterelles, and herbs.'
                      : 'Lokal mjölk, gotländsk ramslök, kantareller och örter.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

