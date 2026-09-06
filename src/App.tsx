import React, { useState } from 'react';
import { Language, Reservation } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { FeaturedDishesSection } from './components/FeaturedDishesSection';
import { StorySection } from './components/StorySection';
import { AtmosphericBanner } from './components/AtmosphericBanner';
import { FishBarSection } from './components/FishBarSection';
import { MenuSection } from './components/MenuSection';
import { VisitSection } from './components/VisitSection';
import { ReservationCallout } from './components/ReservationCallout';
import { ReservationModal } from './components/ReservationModal';
import { Footer } from './components/Footer';
import { X, Calendar } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('sv'); // Default to authentic Gotland/Swedish with instant English toggle
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeReservation, setActiveReservation] = useState<Reservation | null>(() => {
    const saved = localStorage.getItem('bakfickan_reservation');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (reservation: Reservation) => {
    setActiveReservation(reservation);
    localStorage.setItem('bakfickan_reservation', JSON.stringify(reservation));
  };

  const handleClearReservation = () => {
    setActiveReservation(null);
    localStorage.removeItem('bakfickan_reservation');
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1118] text-[#161616] antialiased selection:bg-[#C8A97E] selection:text-[#0A1118]">
      
      {/* Top Fixed Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />

      {/* Active Reservation Toast / Notification Banner */}
      {activeReservation && (
        <div
          id="active-reservation-banner"
          className="fixed top-20 right-4 sm:right-8 z-40 bg-[#0A1118] text-[#F7F5F0] rounded-xs shadow-2xl p-4 border border-[#C8A97E]/40 max-w-sm animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C8A97E] mt-1.5 shrink-0 animate-ping" />
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A97E] font-semibold block">
                  {lang === 'en' ? 'Active Table Reservation' : 'Aktiv Bordsbokning'}
                </span>
                <p className="text-xs font-medium text-[#F7F5F0] mt-0.5">
                  Ref: <span className="font-mono">{activeReservation.id}</span> · {activeReservation.date} kl. {activeReservation.time}
                </p>
                <p className="text-[11px] text-[#F7F5F0]/70">
                  {activeReservation.guests} {lang === 'en' ? 'guests' : 'gäster'} ({activeReservation.guestName})
                </p>
              </div>
            </div>
            <button
              id="clear-active-booking-btn"
              onClick={handleClearReservation}
              className="text-[#F7F5F0]/60 hover:text-white p-1"
              title={lang === 'en' ? 'Dismiss' : 'Dölj'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Editorial Flow */}
      <main className="flex-1">
        
        {/* 1. Cinematic 100vh Fullscreen Hero */}
        <Hero
          lang={lang}
          onOpenBooking={handleOpenBooking}
          onExploreMenu={() => handleNavigate('menu-preview')}
        />

        {/* 2. Short Introduction — Warm Ivory */}
        <IntroductionSection
          lang={lang}
        />

        {/* 3. Featured Dishes — Warm Ivory + Large Photos */}
        <FeaturedDishesSection
          lang={lang}
          onExploreFullMenu={() => handleNavigate('menu-preview')}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Our Story — Deep Navy */}
        <StorySection
          lang={lang}
        />

        {/* 5. Atmospheric Cinematic Visual Break */}
        <AtmosphericBanner
          lang={lang}
        />

        {/* 6. Fish Bar — Drop-in & Oysters */}
        <FishBarSection
          lang={lang}
        />

        {/* 7. Menu Preview — Warm Ivory + Full Menu Modal */}
        <MenuSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 8. Visit & Opening Hours — Stora Torget, Visby */}
        <VisitSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 9. Booking Call to Action — Deep Navy / Charcoal */}
        <ReservationCallout
          lang={lang}
          onOpenBooking={handleOpenBooking}
          onExploreMenu={() => handleNavigate('menu-preview')}
        />
      </main>

      {/* 10. Charcoal Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* 11. Reservation Booking Modal */}
      <ReservationModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        lang={lang}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
}
