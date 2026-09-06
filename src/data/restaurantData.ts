import { MenuItem, OpeningHour } from '../types';
import { RESTAURANT_IMAGES } from '../assets/images';

export const RESTAURANT_INFO = {
  name: 'BAKFICKAN',
  tagline: {
    en: 'FROM THE SEA, SERVED WITH CARE.',
    sv: 'FRÅN HAVET, SERVERAT MED OMSORG.',
  },
  subheading: {
    en: 'A legendary seafood restaurant and oyster bar on the cobblestones of Stora Torget, Visby.',
    sv: 'En klassisk fisk- och skaldjurskrog på kullerstenarna vid Stora Torget i Visby.',
  },
  heritageLabel: {
    en: 'VISBY · SEAFOOD · SINCE 30+ YEARS',
    sv: 'VISBY · SKALDJUR · SEDAN 30+ ÅR',
  },
  address: {
    street: 'Stora Torget 1',
    city: '621 56 Visby, Gotland',
    country: 'Sweden',
    mapLink: 'https://maps.google.com/?q=Stora+Torget+1+Visby+Gotland',
  },
  contact: {
    phone: '+46 (0)498 21 68 30',
    email: 'boka@bakfickanvisby.se',
    instagram: '@bakfickanvisby',
    social: {
      instagram: {
        name: 'Instagram',
        handle: '@bakfickanvisby',
        url: 'https://instagram.com/bakfickanvisby',
      },
      facebook: {
        name: 'Facebook',
        handle: 'Bakfickan Visby',
        url: 'https://facebook.com/bakfickanvisby',
      },
    },
  },
  introduction: {
    eyebrow: {
      en: 'A TASTE OF GOTLAND',
      sv: 'EN SMAK AV GOTLAND',
    },
    title: {
      en: 'Culinary Simplicity from the Baltic Sea',
      sv: 'Kulinarisk Enkelhet från Östersjön',
    },
    text: {
      en: 'Located on the historic cobblestone square of Stora Torget in medieval Visby, Bakfickan is an intimate sanctuary for honest Scandinavian seafood. We work directly with Gotland fishers to bring you fresh line-caught Baltic fish, pristine Nordic shellfish, cold clarified butter, and warm island hospitality.',
      sv: 'Beläget vid det historiska Stora Torget i medeltida Visby är Bakfickan en intim oas för äkta nordisk fisk och skaldjur. Vi samarbetar direkt med gotländska fiskare för att servera färska fångster från Östersjön, nyskirat smör, färsk dill och varm gotländsk gästfrihet.',
    },
  },
  story: {
    title: {
      en: 'Tradition on the Cobblestones of Visby',
      sv: 'Tradition på Visbys kullerstenar',
    },
    paragraphs: {
      en: [
        'Since its founding in the heart of Visby’s UNESCO World Heritage old town, Bakfickan has been an intimate haven for sea lovers, local fishermen, and discerning travellers.',
        'We believe in uncomplicated gastronomy: honest Baltic catches, freshly landed shellfish from pristine Nordic waters, cold butter, dill, hand-grated horseradish, and genuine Gotland warmth.',
        'Whether you sit around the bustling zinc-and-marble Fish Bar for freshly shucked oysters and a glass of Chablis, or settle into our timber-walled dining room for our renowned fish soup, you are treated like family.',
      ],
      sv: [
        'Sedan starten i hjärtat av Visbys medeltida innerstad har Bakfickan varit en självklar samlingsplats för havsälskare, gotländska fiskare och matentusiaster.',
        'Vi tror på den enkla, ärliga gastronomin: färska råvaror från Östersjön och de nordiska haven, nyskirat smör, nyriven pepparrot, dill och äkta gotländsk gästfrihet.',
        'Vare sig du slår dig ner vid den livliga zinkbaren för nyöppnade ostron och ett glas krispigt vitt, eller avnjuter vår legendariska fisksoppa i den varma matsalen, är du alltid välkommen hem till oss.',
      ],
    },
  },
  fishBarNote: {
    en: 'The Fish Bar (Fiskbaren) operates on a walk-in basis with no reservations required. Pull up a stool, watch the chefs shuck oysters, and enjoy our daily catch by the glass.',
    sv: 'Fiskbaren har alltid drop-in utan bordsbokning. Slå dig ner vid baren, se kockarna öppna ostron och avnjut dagens fångst med ett gott glas vin.',
  },
  images: RESTAURANT_IMAGES,
};

export const OPENING_HOURS: OpeningHour[] = [
  {
    day: { en: 'Monday – Thursday', sv: 'Måndag – Torsdag' },
    lunch: '11:30 – 15:00',
    dinner: '17:00 – 22:30',
    fishBar: '11:30 – 23:00',
  },
  {
    day: { en: 'Friday', sv: 'Fredag' },
    lunch: '11:30 – 15:00',
    dinner: '17:00 – 23:30',
    fishBar: '11:30 – 00:00',
  },
  {
    day: { en: 'Saturday', sv: 'Lördag' },
    lunch: '12:00 – 16:00',
    dinner: '17:00 – 23:30',
    fishBar: '12:00 – 00:00',
  },
  {
    day: { en: 'Sunday', sv: 'Söndag' },
    lunch: '12:00 – 16:00',
    dinner: '17:00 – 21:30',
    fishBar: '12:00 – 22:00',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Raw & Starters
  {
    id: 'toast-skagen',
    category: 'starters',
    name: {
      en: 'Toast Skagen Bakfickan',
      sv: 'Bakfickans Toast Skagen',
    },
    description: {
      en: 'Hand-peeled Arctic shrimp, homemade mayonnaise, fresh dill, lemon zest, and Kalix vendace roe on butter-fried brioche.',
      sv: 'Handskalade ishavsräkor, majonnäs, färsk dill, citron och Kalix löjrom på smörstekt brioche.',
    },
    price: 185,
    badge: { en: 'House Classic', sv: 'Klassiker' },
    image: RESTAURANT_IMAGES.toastSkagen,
    allergens: ['Crustaceans', 'Fish', 'Egg', 'Gluten'],
    pairing: { en: 'Chablis Premier Cru', sv: 'Chablis Premier Cru' },
  },
  {
    id: 'oysters-fine',
    category: 'starters',
    name: {
      en: 'Fine de Claire Oysters (3 / 6 / 12 pcs)',
      sv: 'Fine de Claire Ostron (3 / 6 / 12 st)',
    },
    description: {
      en: 'Fine de Claire N°3 on crushed ice, served with shallot mignonette, Tabasco, and fresh Gotland lemon wedges.',
      sv: 'Fine de Claire N°3 på krossad is med schalottenlöksmignonette, Tabasco och färsk citron.',
    },
    price: 145,
    badge: { en: 'Daily Fresh', sv: 'Dagsfärska' },
    image: RESTAURANT_IMAGES.oystersIce,
    allergens: ['Molluscs'],
    pairing: { en: 'Muscadet Sèvre et Maine or Champagne', sv: 'Muscadet Sèvre et Maine eller Champagne' },
  },
  {
    id: 'smoked-prawns',
    category: 'starters',
    name: {
      en: 'Smoked Baltic Prawns & Aioli',
      sv: 'Alspånsrökta Räkor med Ramslöksaioli',
    },
    description: {
      en: 'Alderwood-smoked Baltic coldwater prawns, homemade wild garlic aioli, grilled levain bread, and dill.',
      sv: 'Alspånsrökta ishavsräkor, hemlagad ramslöksaioli, grillat surdegsbröd och dill.',
    },
    price: 185,
    allergens: ['Crustaceans', 'Egg', 'Gluten'],
    pairing: { en: 'Wisby Pilsner or crisp Riesling', sv: 'Wisby Pilsner eller torr Riesling' },
  },
  {
    id: 'gotland-bleak-roe',
    category: 'starters',
    name: {
      en: 'Kalix Vendace Roe & Smoked Crème',
      sv: 'Kalix Löjrom med Rökt Smetana',
    },
    description: {
      en: '35g prime Swedish vendace roe, light wood-smoked smetana, finely diced red onion, chives, and crispy potato blini.',
      sv: '35g Kalix löjrom, lättrökt smetana, finhackad rödlök, gräslök och frasig potatisblini.',
    },
    price: 285,
    allergens: ['Fish', 'Dairy', 'Gluten'],
    pairing: { en: 'Gotland snaps or Champagne', sv: 'Gotländsk snaps eller Champagne' },
  },

  // Classics of Bakfickan
  {
    id: 'bakfickan-fish-soup',
    category: 'classics',
    name: {
      en: "Bakfickan's Famous Saffron Fish Soup",
      sv: 'Bakfickans Berömda Saffransfisksoppa',
    },
    description: {
      en: 'Rich seafood broth simmered with saffron, white wine, cod loin, salmon, blue mussels, julienned fennel, garlic rouille, and fresh dill.',
      sv: 'Fyllig skaldjurs- och fiskbuljong kokt med saffran, vitt vin, torskrygg, lax, blåmusslor, fänkål, saffransrouille och dill.',
    },
    price: 255,
    badge: { en: 'Signature Dish', sv: 'Signaturrätt' },
    image: RESTAURANT_IMAGES.fishSoup,
    allergens: ['Fish', 'Molluscs', 'Crustaceans', 'Dairy', 'Egg'],
    pairing: { en: 'Sancerre Blanc or Meursault', sv: 'Sancerre Blanc eller Meursault' },
  },
  {
    id: 'steamed-cod-loin',
    category: 'classics',
    name: {
      en: 'Steamed Arctic Cod & Browned Butter',
      sv: 'Torskrygg med Brynt Smör & Pepparrot',
    },
    description: {
      en: 'Tender line-caught Arctic cod loin, nut-browned clarified butter, freshly grated horseradish, hand-peeled prawns, chopped organic egg, and dill potatoes.',
      sv: 'Färsk ångad torskrygg, nötbrynt smör, riven pepparrot, handskalade räkor, hackat ekologiskt ägg och färskpotatis med dill.',
    },
    price: 365,
    badge: { en: 'Chef Recommendation', sv: 'Kockens val' },
    image: RESTAURANT_IMAGES.arcticCod,
    allergens: ['Fish', 'Crustaceans', 'Dairy', 'Egg'],
    pairing: { en: 'Burgundy Chardonnay or Grüner Veltliner', sv: 'Bourgogne Chardonnay eller Grüner Veltliner' },
  },
  {
    id: 'fried-baltic-herring',
    category: 'classics',
    name: {
      en: 'Pan-Fried Baltic Herring with Lingonberries',
      sv: 'Stekt Strömming med Potatismos & Lingon',
    },
    description: {
      en: 'Crispy rye-crusted Baltic herring fillets, browned butter, creamy almond potato mash, and fresh Gotland lingonberries.',
      sv: 'Klassiskt rågpanerad stekt strömming, brynt smör, mandelpotatismos och rårörda gotländska lingon.',
    },
    price: 245,
    badge: { en: 'Visby Tradition', sv: 'Visby-tradition' },
    allergens: ['Fish', 'Gluten', 'Dairy'],
    pairing: { en: 'Gotlands Bryggeri Sleepy Bulldog Pale Ale & Aquavit', sv: 'Gotlands Bryggeri Pale Ale & O.P. Anderson' },
  },

  // Mains from Sea & Land
  {
    id: 'grilled-arctic-char',
    category: 'mains',
    name: {
      en: 'Pan-Seared Arctic Char & Chanterelles',
      sv: 'Smörstekt Rödingfilé med Kantareller',
    },
    description: {
      en: 'Crispy skin Arctic char, sautéed Gotland autumn chanterelles, pea puree, white wine Sandefjord sauce, and trout caviar.',
      sv: 'Krispigt smörstekt röding, smörslungade gotländska kantareller, ärtpuré, Sandefjordsås och forellrom.',
    },
    price: 395,
    allergens: ['Fish', 'Dairy'],
    pairing: { en: 'Pinot Noir or Chenin Blanc', sv: 'Lätt Pinot Noir eller Chenin Blanc' },
  },
  {
    id: 'moules-mariniere',
    category: 'mains',
    name: {
      en: 'Nordic Moules Frites',
      sv: 'Nordiska Blåmusslor & Pommes',
    },
    description: {
      en: 'Fresh blue mussels steamed in white wine, shallots, garlic, Gotland cream, and herbs. Served with crisp skinny fries and aioli.',
      sv: 'Färska blåmusslor ångade i vitt vin, schalottenlök, vitlök, gotländsk grädde och örter. Serveras med krispiga pommes och aioli.',
    },
    price: 275,
    allergens: ['Molluscs', 'Dairy', 'Egg'],
    pairing: { en: 'Belgian Blonde or crisp Albariño', sv: 'Ljus belgisk ale eller Albariño' },
  },
  {
    id: 'gotland-lamb-tenderloin',
    category: 'mains',
    name: {
      en: 'Gotland Lamb Tenderloin (Land Choice)',
      sv: 'Gotländsk Lamminnerfilé (Från Land)',
    },
    description: {
      en: 'For those who prefer land fare: tender Gotland pasture lamb, roasted root vegetables, garlic rosemary jus, and potato gratin with Västerbottensost.',
      sv: 'För landkrabban: mör gotländsk lamminnerfilé, rostade rotfrukter, rosmarinsky och potatisgratäng med Västerbottensost.',
    },
    price: 385,
    allergens: ['Dairy'],
    pairing: { en: 'Côtes du Rhône or Barolo', sv: 'Côtes du Rhône eller Barolo' },
  },

  // Shellfish Platters
  {
    id: 'grand-plateau',
    category: 'platters',
    name: {
      en: 'Grand Seafood Plateau Bakfickan (For 2)',
      sv: 'Bakfickans Stora Skaldjursplatå (För 2 pers)',
    },
    description: {
      en: 'Half fresh Gotland lobster, 4 langoustines, 6 Fine de Claire oysters, 200g smoked prawns, 200g fresh shrimp, brown crab claws, aioli, shallot vinegar, and freshly baked levain.',
      sv: 'Halv hummer, 4 havskräftor, 6 Fine de Claire ostron, 200g rökta räkor, 200g färska räkor, krabbklor, hemslagen aioli, schalottenlöksvinägrett och nybakt levain.',
    },
    price: 1195,
    badge: { en: 'Luxurious Feast', sv: 'Festmåltid' },
    image: RESTAURANT_IMAGES.seafoodPlatter,
    allergens: ['Crustaceans', 'Molluscs', 'Egg', 'Gluten'],
    pairing: { en: 'Prestige Cuvée Champagne', sv: 'Champagne Grand Cru' },
  },
  {
    id: 'lobster-grilled',
    category: 'platters',
    name: {
      en: 'Whole Butter-Gratinated Lobster',
      sv: 'Hel Smörgratinerad Hummer',
    },
    description: {
      en: 'Whole fresh lobster gratinated with garlic herb butter, aged Västerbottensost, crisp side greens, and truffle fries.',
      sv: 'Hel färsk hummer gratinerad med örtsmör, lagrad Västerbottensost, krispig grönsallad och tryffelpommes.',
    },
    price: 595,
    allergens: ['Crustaceans', 'Dairy'],
    pairing: { en: 'Chardonnay (Meursault or Napa Valley)', sv: 'Fyllig ekfatslagrad Chardonnay' },
  },

  // Desserts
  {
    id: 'gotland-saffron-pancake',
    category: 'desserts',
    name: {
      en: 'Gotland Saffron Pancake & Dewberry Jam',
      sv: 'Gotländsk Saffranspannkaka med Salmbärssylt',
    },
    description: {
      en: 'Warm traditional saffron rice pudding cake, native Gotland dewberry (salmbär) jam, and fresh softly whipped cream.',
      sv: 'Klassisk ljummen gotländsk saffranspannkaka, hemlagad salmbärssylt och lättvispad grädde.',
    },
    price: 125,
    badge: { en: 'Gotland Heritage', sv: 'Gotlands stolthet' },
    allergens: ['Dairy', 'Egg', 'Nuts'],
    pairing: { en: 'Sauternes or Swedish Punsch', sv: 'Sauternes eller Grönstedts Punsch' },
  },
  {
    id: 'cloudberry-creme-brulee',
    category: 'desserts',
    name: {
      en: 'Arctic Cloudberry Crème Brûlée',
      sv: 'Hjortron Crème Brûlée',
    },
    description: {
      en: 'Madagascar vanilla bean custard with a caramelized sugar crust and warm wild cloudberry compote.',
      sv: 'Vaniljcrème med knäckigt sockerlock och varm vild hjortronkompott.',
    },
    price: 135,
    allergens: ['Dairy', 'Egg'],
  },
  {
    id: 'vasterbotten-cheese',
    category: 'desserts',
    name: {
      en: 'Swedish Artisan Cheeses & Crispbread',
      sv: 'Svenska Gårdsostar med Fröknäcke',
    },
    description: {
      en: 'Selection of three Swedish craft cheeses, Gotland sea-buckthorn marmalade, and seed crispbread.',
      sv: 'Tre utvalda svenska hantverksostar, gotländsk havtornsmarmelad och hembakat fröknäcke.',
    },
    price: 155,
    allergens: ['Dairy', 'Gluten', 'Sesame'],
    pairing: { en: 'Vintage Port or Dry Aquavit', sv: 'Portvin eller mogen Calvados' },
  },

  // Drinks & Aquavit
  {
    id: 'drink-aquavit-flight',
    category: 'drinks',
    name: {
      en: 'Nordic Aquavit Flight (3 x 2cl)',
      sv: 'Nordisk Snapsbricka (3 x 2cl)',
    },
    description: {
      en: 'O.P. Anderson (anise/caraway), Hallands Fläder (elderflower), and Bakfickan House Herb Infusion.',
      sv: 'O.P. Anderson (kummin/anis), Hallands Fläder, samt Bakfickans Egen Kryddade Brännvin.',
    },
    price: 165,
    badge: { en: 'Tradition', sv: 'Tradition' },
  },
  {
    id: 'drink-wisby-pilsner',
    category: 'drinks',
    name: {
      en: 'Wisby Pilsner on Draft (40cl)',
      sv: 'Wisby Pils på fat (40cl)',
    },
    description: {
      en: 'Locally brewed in Visby harbour. Crisp, golden, well-balanced malt and noble hop character.',
      sv: 'Lokalbryggt vid Visby hamn. Krispig, frisk och balanserad hantverkspilsner.',
    },
    price: 88,
  },
  {
    id: 'drink-champagne-glass',
    category: 'drinks',
    name: {
      en: 'Champagne Michel Fallon Brut (Glass / Bottle)',
      sv: 'Champagne Michel Fallon Brut (Glas / Flaska)',
    },
    description: {
      en: 'Crisp minerality, green apple, sea spray salinity, and brioche finish. Perfect for oysters.',
      sv: 'Mineralisk, krispigt grönt äpple och fin sälta. Perfekt till ostron.',
    },
    price: 195,
  },
];

// 3–4 Highlighted Dishes for the Editorial Kitchen section
export const FEATURED_DISHES = [
  MENU_ITEMS.find((item) => item.id === 'toast-skagen')!,
  MENU_ITEMS.find((item) => item.id === 'bakfickan-fish-soup')!,
  MENU_ITEMS.find((item) => item.id === 'steamed-cod-loin')!,
  MENU_ITEMS.find((item) => item.id === 'oysters-fine')!,
];

// 4–6 Selected Dishes for the Homepage Menu Preview
export const PREVIEW_MENU_ITEMS = [
  MENU_ITEMS.find((item) => item.id === 'oysters-fine')!,
  MENU_ITEMS.find((item) => item.id === 'toast-skagen')!,
  MENU_ITEMS.find((item) => item.id === 'bakfickan-fish-soup')!,
  MENU_ITEMS.find((item) => item.id === 'steamed-cod-loin')!,
  MENU_ITEMS.find((item) => item.id === 'grilled-arctic-char')!,
  MENU_ITEMS.find((item) => item.id === 'gotland-saffron-pancake')!,
];
