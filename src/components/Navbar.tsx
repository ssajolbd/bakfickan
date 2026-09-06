import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Menu, X, Calendar, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'introduction', label: { en: 'Experience', sv: 'Upplev' } },
    { id: 'featured', label: { en: 'Kitchen', sv: 'Köket' } },
    { id: 'story', label: { en: 'Story', sv: 'Historia' } },
    { id: 'fish-bar', label: { en: 'Fish Bar', sv: 'Fiskbaren' } },
    { id: 'menu-preview', label: { en: 'Menu', sv: 'Meny' } },
    { id: 'visit', label: { en: 'Visit & Hours', sv: 'Besök & Tider' } },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A1118]/95 backdrop-blur-md border-b border-[#C8A97E]/15 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A1118]/80 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Typographic Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#F7F5F0] group-hover:text-[#C8A97E] transition-colors duration-300 uppercase block leading-none">
            BAKFICKAN
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8A97E] block mt-1 font-light opacity-90">
            VISBY · GOTLAND
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-[11px] uppercase tracking-[0.2em] text-[#F7F5F0]/80 hover:text-[#C8A97E] font-medium transition-colors duration-200 cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A97E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label[lang]}
            </button>
          ))}
        </nav>

        {/* Action Controls (Language + Book Table) */}
        <div className="hidden sm:flex items-center space-x-5">
          
          {/* Language Toggle */}
          <div
            id="nav-language-toggle"
            className="flex items-center border border-white/15 rounded-full p-0.5 bg-black/20 text-[10px] tracking-wider font-medium text-[#F7F5F0]"
          >
            <button
              onClick={() => onLanguageChange('sv')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'sv'
                  ? 'bg-[#C8A97E] text-[#0A1118] font-semibold shadow-sm'
                  : 'text-[#F7F5F0]/70 hover:text-white'
              }`}
              title="Svenska"
            >
              SV
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#C8A97E] text-[#0A1118] font-semibold shadow-sm'
                  : 'text-[#F7F5F0]/70 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Book a Table Button */}
          <button
            id="nav-book-btn"
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#C8A97E] hover:bg-[#DFC7A5] text-[#0A1118] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-[#C8A97E]/20 cursor-pointer active:scale-95"
          >
            {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-3 lg:hidden">
          <div className="sm:hidden flex items-center border border-white/20 rounded-full p-0.5 bg-black/20 text-[10px] font-medium text-[#F7F5F0]">
            <button
              onClick={() => onLanguageChange('sv')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'sv' ? 'bg-[#C8A97E] text-[#0A1118] font-semibold' : 'text-white/70'
              }`}
            >
              SV
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'en' ? 'bg-[#C8A97E] text-[#0A1118] font-semibold' : 'text-white/70'
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#F7F5F0] hover:text-[#C8A97E] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#0A1118]/98 backdrop-blur-xl border-b border-[#C8A97E]/20 px-6 py-8 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-4 max-w-md mx-auto text-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm uppercase tracking-[0.25em] text-[#F7F5F0] hover:text-[#C8A97E] py-2 transition-colors cursor-pointer"
              >
                {link.label[lang]}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-4">
              <button
                id="mobile-book-drawer-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#C8A97E] text-[#0A1118] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm cursor-pointer shadow-lg"
              >
                {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
