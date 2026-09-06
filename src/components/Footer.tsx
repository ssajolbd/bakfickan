import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onOpenBooking,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#161616] text-[#F7F5F0] pt-20 pb-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Tier: Logo, Navigation, Social & Booking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Identity (4 cols) */}
          <div className="md:col-span-4">
            <button
              onClick={scrollToTop}
              className="text-left group cursor-pointer block mb-3"
            >
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 uppercase block">
                BAKFICKAN
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] font-light mt-1 block">
                VISBY · GOTLAND
              </span>
            </button>
            <p className="text-xs text-[#A0A0A0] font-light max-w-sm leading-relaxed mt-4">
              {lang === 'en'
                ? 'Classic Scandinavian seafood restaurant and oyster bar on the cobblestones of Stora Torget, Visby.'
                : 'Klassisk fisk- och skaldjursrestaurang vid Stora Torget i Visby.'}
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C8A97E] mb-4">
              {lang === 'en' ? 'Explore' : 'Upptäck'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D0D0D0] font-light">
              <li>
                <button
                  onClick={() => onNavigate('featured')}
                  className="hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Selected Dishes' : 'Utvalda Rätter'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Our Heritage' : 'Vår Historia'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fish-bar')}
                  className="hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Fiskbaren (Drop-in)' : 'Fiskbaren (Drop-in)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu-preview')}
                  className="hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Food & Drink Menu' : 'Meny & Vinlista'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
                >
                  {lang === 'en' ? 'Opening Hours & Map' : 'Öppettider & Karta'}
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Us / Social Links (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C8A97E] mb-4">
              {lang === 'en' ? 'Follow Us' : 'Följ Oss'}
            </h4>
            <ul className="space-y-3 text-xs text-[#D0D0D0] font-light">
              <li>
                <a
                  href={RESTAURANT_INFO.contact.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C8A97E] transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 stroke-[1.5] group-hover:text-[#C8A97E] transition-colors" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.contact.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C8A97E] transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 stroke-[1.5] group-hover:text-[#C8A97E] transition-colors" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Booking (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C8A97E] mb-4">
              {lang === 'en' ? 'Reservations & Enquiries' : 'Bokning & Kontakt'}
            </h4>
            <p className="text-xs text-[#D0D0D0] font-light mb-1">
              {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.city}
            </p>
            <p className="text-xs text-[#D0D0D0] font-light mb-4">
              <a
                href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#C8A97E] transition-colors duration-300"
              >
                {RESTAURANT_INFO.contact.phone}
              </a>{' '}
              ·{' '}
              <a
                href={`mailto:${RESTAURANT_INFO.contact.email}`}
                className="hover:text-[#C8A97E] transition-colors duration-300"
              >
                {RESTAURANT_INFO.contact.email}
              </a>
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-[#C8A97E] hover:bg-[#DFC7A5] text-[#0A1118] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C8A97E]/20 active:scale-98"
            >
              {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright, Attribution & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#707070] gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Bakfickan Visby AB. • All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[#888888] font-light">
              Designed &amp; developed by <span className="text-[#C8A97E]/90 hover:text-[#DFC7A5] transition-colors">Sajol Sarker</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C8A97E] hover:text-[#DFC7A5] transition-colors duration-300 cursor-pointer uppercase tracking-wider text-[10px]"
          >
            <span>{lang === 'en' ? 'Back to Top' : 'Till Toppen'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

