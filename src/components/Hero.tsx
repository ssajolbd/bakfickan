import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChevronDown } from 'lucide-react';
import { FloatingFishBackground } from './FloatingFishBackground';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  onExploreMenu,
}) => {
  const brandName = 'BAKFICKAN';
  const letters = Array.from(brandName);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[660px] flex flex-col justify-between items-center text-center overflow-hidden bg-[#0A1118] text-[#F7F5F0]"
    >
      {/* Background Image with Deep Navy / Charcoal Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.images.hero}
          alt="Bakfickan Visby seafood dining"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Multilayered Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/70 to-[#0A1118]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A1118]/60 to-[#0A1118]" />
      </div>

      {/* Subtle Floating Fish in Deep Sea Vignette (Very low opacity) */}
      <FloatingFishBackground tone="navy" fishCount={3} className="z-1 opacity-70" />

      {/* Top Spacer for Navbar balance & Editorial Downward Push (55–60% vertical area) */}
      <div className="h-24 sm:h-28 md:h-32 w-full relative z-10 shrink-0" />

      {/* Main Editorial Content - Positioned slightly lower than center (approx 55-60% vertical area) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center mt-auto mb-auto pb-4">
        
        {/* Subtle Heritage Monogram / Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-5 sm:mb-6 rounded-full border border-[#C8A97E]/30 bg-[#0A1118]/60 backdrop-blur-sm shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#DFC7A5] font-medium">
            {lang === 'en' ? 'Stora Torget, Visby · Est. 1993' : 'Stora Torget, Visby · Grundat 1993'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
        </motion.div>

        {/* Sequential Letter-Reveal Brand Title — One size level reduced for refined breathing room */}
        <h1
          id="hero-brand-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.16em] sm:tracking-[0.18em] text-[#F7F5F0] uppercase select-none flex items-center justify-center flex-wrap leading-tight"
          aria-label="BAKFICKAN"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.85,
                delay: 0.2 + index * 0.05,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block hover:text-[#C8A97E] transition-colors duration-300 cursor-default"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Subtle Gold Dividing Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="w-20 sm:w-28 h-[1px] bg-[#C8A97E]/60 my-5 sm:my-7 origin-center"
        />

        {/* Tagline: Delayed Fade-Up */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.85 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.28em] font-medium text-[#C8A97E] uppercase mb-3 sm:mb-4 hover:text-[#DFC7A5] transition-colors duration-300 cursor-default"
        >
          {RESTAURANT_INFO.tagline[lang]}
        </motion.p>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.0 }}
          className="text-sm sm:text-base md:text-lg font-light text-[#F7F5F0]/80 max-w-xl mx-auto leading-relaxed mb-7 sm:mb-9"
        >
          {RESTAURANT_INFO.subheading[lang]}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-book-table-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C8A97E] hover:bg-[#DFC7A5] text-[#0A1118] font-medium text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-lg hover:shadow-[#C8A97E]/25 cursor-pointer active:scale-[0.98]"
          >
            {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
          </button>

          <button
            id="hero-view-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-[#F7F5F0] hover:text-[#C8A97E] border border-[#F7F5F0]/30 hover:border-[#C8A97E] font-medium text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            {lang === 'en' ? 'View Menu' : 'Se Menyn'}
          </button>
        </motion.div>
      </div>

      {/* Bottom Heritage Signature & Subtle Scroll Indicator */}
      <div className="relative z-10 w-full pb-5 pt-2 px-6 flex flex-col items-center justify-center gap-2 shrink-0">
        {/* Heritage Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#F7F5F0]/60 hover:text-[#F7F5F0]/90 transition-colors duration-300 font-light flex items-center gap-3 cursor-default"
        >
          <span>VISBY</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A97E]/60 inline-block" />
          <span>SEAFOOD</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A97E]/60 inline-block" />
          <span>SINCE 30+ YEARS</span>
        </motion.p>

        {/* Scroll Cue */}
        <motion.button
          onClick={onExploreMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 4, 0] }}
          transition={{
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            delay: 1.5,
          }}
          className="text-[#C8A97E] hover:text-[#DFC7A5] transition-colors p-1"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-5 h-5 stroke-[1.5]" />
        </motion.button>
      </div>
    </section>
  );
};

