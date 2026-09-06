import React, { useState } from 'react';
import { Language, MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, PREVIEW_MENU_ITEMS } from '../data/restaurantData';
import { Wine, Info, Search, X, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface MenuSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory | 'all'; label: { en: string; sv: string } }[] = [
    { id: 'all', label: { en: 'All Dishes', sv: 'Hela Menyn' } },
    { id: 'starters', label: { en: 'Starters & Raw', sv: 'Förrätter & Rått' } },
    { id: 'classics', label: { en: 'Bakfickan Classics', sv: 'Klassiker' } },
    { id: 'mains', label: { en: 'Mains', sv: 'Varmrätter' } },
    { id: 'platters', label: { en: 'Shellfish Platters', sv: 'Skaldjursplatåer' } },
    { id: 'desserts', label: { en: 'Desserts', sv: 'Desserter' } },
    { id: 'drinks', label: { en: 'Drinks & Aquavit', sv: 'Dryck & Snaps' } },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="menu-preview"
      className="py-24 sm:py-32 bg-[#F7F5F0] text-[#161616] relative border-t border-[#161616]/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C8A97E]" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#A9875A]">
              {lang === 'en' ? 'SCANDINAVIAN GASTRONOMY' : 'SKANDINAVISK GASTRONOMI'}
            </span>
            <span className="w-5 h-[1px] bg-[#C8A97E]" />
          </div>
          <h2
            id="menu-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#161616] mb-4"
          >
            {lang === 'en' ? 'Our Menu' : 'Vår Meny'}
          </h2>
          <p className="text-sm sm:text-base font-light text-[#555555]">
            {lang === 'en'
              ? 'Rooted in Baltic simplicity, line-caught fish, hand-peeled shellfish, and generous Gotland hospitality.'
              : 'Förankrad i enkelhet, färsk Östersjöfisk, nyskalade skaldjur och generös gotländsk gästfrihet.'}
          </p>
        </div>

        {/* 6 Selected Preview Menu Dishes in a Minimalist Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 mb-14">
          {PREVIEW_MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group border-b border-[#161616]/10 pb-6 flex flex-col justify-between hover:border-[#C8A97E] transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#161616] group-hover:text-[#A9875A] transition-colors">
                  {item.name[lang]}
                </h3>
                <span className="font-serif text-lg font-normal text-[#161616] shrink-0">
                  {item.price} SEK
                </span>
              </div>
              <p className="text-xs sm:text-sm font-light text-[#666666] leading-relaxed mb-3">
                {item.description[lang]}
              </p>
              {item.pairing && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#A9875A]">
                  <Wine className="w-3 h-3" />
                  <span>{item.pairing[lang]}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View Full Menu Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            id="view-full-menu-btn"
            onClick={() => setIsFullMenuOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#161616] hover:bg-[#0A1118] text-[#F7F5F0] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 hover:border-b-2 hover:border-[#C8A97E]"
          >
            <span>{lang === 'en' ? 'View Full Menu & Drinks' : 'Se Hela Menyn & Dryck'}</span>
            <ArrowRight className="w-4 h-4 text-[#C8A97E]" />
          </button>

          <button
            id="menu-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#EFECE4] text-[#161616] border border-[#161616]/30 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 cursor-pointer"
          >
            {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
          </button>
        </div>
      </div>

      {/* FULL MENU MODAL / SLIDEOUT DRAWER */}
      {isFullMenuOpen && (
        <div
          id="full-menu-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0A1118]/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#F7F5F0] text-[#161616] w-full max-w-4xl max-h-[90vh] rounded-sm shadow-2xl overflow-hidden flex flex-col border border-[#C8A97E]/40">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-[#0A1118] text-[#F7F5F0] flex items-center justify-between border-b border-[#C8A97E]/30">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] font-medium block">
                  {lang === 'en' ? 'RESTAURANT BAKFICKAN' : 'RESTAURANG BAKFICKAN'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0]">
                  {lang === 'en' ? 'Complete Menu & Wine Selection' : 'Komplett Meny & Vinutbud'}
                </h3>
              </div>
              <button
                id="close-full-menu-btn"
                onClick={() => setIsFullMenuOpen(false)}
                className="p-2 text-[#F7F5F0]/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Bar & Search */}
            <div className="p-4 sm:p-6 bg-[#EFECE4] border-b border-[#161616]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#0A1118] text-[#C8A97E] font-medium shadow-sm'
                        : 'bg-white/60 text-[#555555] hover:bg-white'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="relative w-full sm:w-56">
                <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search dishes...' : 'Sök i menyn...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-white text-xs text-[#161616] border border-[#161616]/20 rounded-full focus:outline-none focus:border-[#C8A97E]"
                />
              </div>
            </div>

            {/* Menu Items List */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 divide-y divide-[#161616]/10 space-y-6">
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 text-[#777777]">
                  <p>{lang === 'en' ? 'No dishes matched your filter.' : 'Inga rätter matchade din sökning.'}</p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div key={item.id} className="pt-6 first:pt-0">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#161616]">
                          {item.name[lang]}
                        </h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 bg-[#0A1118] text-[#C8A97E] text-[9px] tracking-wider uppercase rounded-xs">
                            {item.badge[lang]}
                          </span>
                        )}
                      </div>
                      <span className="font-serif text-lg font-semibold text-[#161616] shrink-0">
                        {item.price} SEK
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-2 max-w-2xl">
                      {item.description[lang]}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#777777]">
                      {item.pairing && (
                        <span className="flex items-center gap-1 text-[#A9875A]">
                          <Wine className="w-3 h-3" />
                          <span>{item.pairing[lang]}</span>
                        </span>
                      )}
                      {item.allergens && item.allergens.length > 0 && (
                        <span className="text-[11px] text-[#999999]">
                          {lang === 'en' ? 'Allergens: ' : 'Allergener: '}
                          {item.allergens.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#EFECE4] border-t border-[#161616]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#666666]">
                {lang === 'en'
                  ? 'All fish & shellfish are sustainably sourced with provenance from Gotland & Baltic waters.'
                  : 'Fisk och skaldjur fångas hållbart med ursprung från Östersjön och Gotland.'}
              </span>
              <button
                onClick={() => {
                  setIsFullMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#C8A97E] text-[#0A1118] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm cursor-pointer hover:bg-[#DFC7A5] transition-colors"
              >
                {lang === 'en' ? 'Book a Table' : 'Boka Bord'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
