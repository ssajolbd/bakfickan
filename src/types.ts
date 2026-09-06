export type Language = 'en' | 'sv';

export type MenuCategory = 'starters' | 'classics' | 'mains' | 'platters' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    sv: string;
  };
  description: {
    en: string;
    sv: string;
  };
  price: number; // In SEK
  category: MenuCategory;
  badge?: {
    en: string;
    sv: string;
  };
  image?: string;
  allergens?: string[];
  pairing?: {
    en: string;
    sv: string;
  };
}

export interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'dining_room' | 'fish_bar' | 'summer_terrace';
  guestName: string;
  email: string;
  phone: string;
  notes?: string;
  dietary?: string;
  createdAt: string;
}

export interface OpeningHour {
  day: {
    en: string;
    sv: string;
  };
  lunch: string;
  dinner: string;
  fishBar: string;
}
