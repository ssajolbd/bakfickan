import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Compass, Anchor, Fish } from 'lucide-react';

interface IntroductionSectionProps {
  lang: Language;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ lang }) => {
  return (
    <section
      id="introduction"
      className="py-24 sm:py-32 bg-[#F7F5F0] text-[#161616] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Uppercase Eyebrow with Soft Gold Lines */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#C8A97E]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#A9875A]">
            {RESTAURANT_INFO.introduction.eyebrow[lang]}
          </span>
          <span className="w-8 h-[1px] bg-[#C8A97E]" />
        </div>

        {/* Large Editorial Serif Heading */}
        <h2
          id="intro-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#161616] leading-tight mb-8"
        >
          {RESTAURANT_INFO.introduction.title[lang]}
        </h2>

        {/* Descriptive Body Text */}
        <p className="text-base sm:text-lg md:text-xl font-light text-[#4A4A4A] leading-relaxed max-w-3xl mb-12">
          {RESTAURANT_INFO.introduction.text[lang]}
        </p>

        {/* 3 Value Pillars (Clean Minimal Icons & Accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full pt-8 border-t border-[#161616]/10">
          <div className="flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#EFECE4] flex items-center justify-center text-[#A9875A] mb-3">
              <Fish className="w-5 h-5 stroke-[1.5]" />
            </span>
            <h3 className="font-serif text-lg font-normal text-[#161616] mb-1">
              {lang === 'en' ? 'Baltic Fresh Daily' : 'Dagligen från Östersjön'}
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-xs">
              {lang === 'en' ? 'Direct partnerships with Gotland small-boat fishers.' : 'Direktkontakt med lokala gotländska fiskare.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#EFECE4] flex items-center justify-center text-[#A9875A] mb-3">
              <Anchor className="w-5 h-5 stroke-[1.5]" />
            </span>
            <h3 className="font-serif text-lg font-normal text-[#161616] mb-1">
              {lang === 'en' ? 'Zinc Fish Bar' : 'Levande Zinkbar'}
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-xs">
              {lang === 'en' ? 'Casual walk-ins for fresh oysters & crisp wine.' : 'Drop-in för ostron, bubbel och dagens fångst.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#EFECE4] flex items-center justify-center text-[#A9875A] mb-3">
              <Compass className="w-5 h-5 stroke-[1.5]" />
            </span>
            <h3 className="font-serif text-lg font-normal text-[#161616] mb-1">
              {lang === 'en' ? 'Stora Torget Heritage' : 'Stora Torgets Historia'}
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-xs">
              {lang === 'en' ? 'Cobblestone atmosphere inside medieval Visby.' : 'Klassisk atmosfär i hjärtat av Visby innerstad.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
