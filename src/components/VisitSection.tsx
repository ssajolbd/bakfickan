import React from 'react';
import { Language } from '../types';
import { RESTAURANT_INFO, OPENING_HOURS } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar, Instagram, Facebook } from 'lucide-react';

interface VisitSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <section
      id="visit"
      className="py-24 sm:py-32 bg-[#EFECE4] text-[#161616] border-t border-[#161616]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C8A97E]" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#A9875A]">
              {lang === 'en' ? 'FIND US IN VISBY' : 'HITTA TILL OSS'}
            </span>
            <span className="w-5 h-[1px] bg-[#C8A97E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#161616] hover:text-[#A9875A] transition-colors duration-300 cursor-default">
            {lang === 'en' ? 'Visit & Opening Hours' : 'Besök & Öppettider'}
          </h2>
        </div>

        {/* 2-Column Split: Info & Hours vs Atmosphere Location Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Hours Table & Address Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Opening Hours Card */}
            <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-sm border border-[#161616]/10 shadow-sm hover:border-[#C8A97E]/50 transition-colors duration-300">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#161616]/10">
                <Clock className="w-4 h-4 text-[#A9875A]" />
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#161616]">
                  {lang === 'en' ? 'Weekly Service Hours' : 'Veckans Öppettider'}
                </h3>
              </div>

              <div className="space-y-4 divide-y divide-[#161616]/5">
                {OPENING_HOURS.map((schedule, idx) => (
                  <div key={idx} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="font-medium text-[#161616]">
                      {schedule.day[lang]}
                    </span>
                    <div className="flex items-center gap-4 text-[#555555]">
                      <span><strong className="text-[#161616] font-normal">{lang === 'en' ? 'Lunch:' : 'Lunch:'}</strong> {schedule.lunch}</span>
                      <span>•</span>
                      <span><strong className="text-[#161616] font-normal">{lang === 'en' ? 'Dinner:' : 'Kväll:'}</strong> {schedule.dinner}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#161616]/10 bg-[#EFECE4]/60 p-3 rounded-xs text-[11px] text-[#666666]">
                <strong className="text-[#161616]">{lang === 'en' ? 'Fiskbaren (Drop-in):' : 'Fiskbaren (Drop-in):'}</strong>{' '}
                {lang === 'en' ? 'Open continuously from 11:30 for fresh oysters, wine and small plates.' : 'Öppet utan avbrott från kl 11:30 för ostron, vin och smårätter.'}
              </div>
            </div>

            {/* Address & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address Card */}
              <div className="bg-[#F7F5F0] p-6 rounded-sm border border-[#161616]/10 hover:border-[#C8A97E]/50 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#A9875A] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                      {lang === 'en' ? 'Location' : 'Adress'}
                    </span>
                  </div>
                  <p className="font-serif text-lg text-[#161616]">
                    {RESTAURANT_INFO.address.street}
                  </p>
                  <p className="text-xs text-[#666666] font-light mt-0.5 mb-4">
                    {RESTAURANT_INFO.address.city}
                  </p>
                </div>
                <a
                  href={RESTAURANT_INFO.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A9875A] hover:text-[#161616] font-medium transition-colors duration-300"
                >
                  <span>{lang === 'en' ? 'Open in Google Maps' : 'Öppna i Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Direct Contact Card */}
              <div className="bg-[#F7F5F0] p-6 rounded-sm border border-[#161616]/10 hover:border-[#C8A97E]/50 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#A9875A] mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                      {lang === 'en' ? 'Contact' : 'Kontakt'}
                    </span>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="font-serif text-lg text-[#161616] hover:text-[#A9875A] block transition-colors duration-300"
                  >
                    {RESTAURANT_INFO.contact.phone}
                  </a>
                  <a
                    href={`mailto:${RESTAURANT_INFO.contact.email}`}
                    className="text-xs text-[#666666] hover:text-[#A9875A] block mt-1 transition-colors duration-300"
                  >
                    {RESTAURANT_INFO.contact.email}
                  </a>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="mt-4 inline-flex items-center gap-1 text-xs text-[#A9875A] hover:text-[#161616] hover:underline font-semibold cursor-pointer transition-colors duration-300"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Book online table →' : 'Boka bord online →'}</span>
                </button>
              </div>

            </div>

            {/* Compact FOLLOW US Social Row */}
            <div className="bg-[#F7F5F0] p-4 sm:p-5 rounded-sm border border-[#161616]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#A9875A]">
                {lang === 'en' ? 'FOLLOW US' : 'FÖLJ OSS'}
              </span>
              <div className="flex items-center gap-5">
                <a
                  href={RESTAURANT_INFO.contact.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#A9875A] font-medium transition-colors duration-300 group"
                  aria-label="Follow Bakfickan on Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 stroke-[1.5] group-hover:text-[#A9875A] transition-colors" />
                  <span>{RESTAURANT_INFO.contact.social.instagram.name}</span>
                </a>
                <span className="text-[#161616]/20">•</span>
                <a
                  href={RESTAURANT_INFO.contact.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#A9875A] font-medium transition-colors duration-300 group"
                  aria-label="Follow Bakfickan on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 stroke-[1.5] group-hover:text-[#A9875A] transition-colors" />
                  <span>{RESTAURANT_INFO.contact.social.facebook.name}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Restaurant Dining Atmosphere (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#161616]/15 shadow-xl group">
              <img
                src={RESTAURANT_INFO.images.diningRoomInterior}
                alt="Bakfickan dining room atmosphere"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A1118]/90 text-[#F7F5F0] backdrop-blur-sm border border-white/10 group-hover:border-[#C8A97E]/40 transition-colors duration-300 rounded-xs">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A97E] font-medium block">
                  {lang === 'en' ? 'ATMOSPHERE' : 'ATMOSFÄR'}
                </span>
                <p className="text-xs font-light text-[#F7F5F0]/90 mt-1">
                  {lang === 'en'
                    ? 'Warm timber, candlelight, and the welcoming spirit of Gotland.'
                    : 'Varma träpaneler, levande ljus och genuin gotländsk värme.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

