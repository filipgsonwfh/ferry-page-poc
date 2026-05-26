// Stena Germanica / Scandinavica — Gothenburg–Kiel route
// Real product & content data sourced from Travel Value catalogue (Mar 17 – May 25, 2026)

const FERRY = {
  vessels: [
    { id: 'germanica', name: 'Stena Germanica', built: 2001, length: 240, capacity: { pax: 1500, cars: 300, freight: 360 } },
    { id: 'scandinavica', name: 'Stena Scandinavica', built: 2003, length: 240, capacity: { pax: 1300, cars: 300, freight: 350 } },
  ],
  route: { from: { en: 'Gothenburg', sv: 'Göteborg', code: 'GOT' }, to: { en: 'Kiel', sv: 'Kiel', code: 'KIE' } },
  duration: { hours: 14, mins: 30 },
  schedule: { en: 'Daily departures · 18:45 from Gothenburg · 19:00 from Kiel', sv: 'Dagliga avgångar · 18:45 från Göteborg · 19:00 från Kiel' },
};

// ============================================================
// SHOP PRODUCTS — extracted directly from the PDF catalogue
// Categories: perfume, makeup, skincare, electronics, lego, toys, confectionery, wine, gin, whisky, rum, beer, liqueur
// All prices in SEK and EUR. RRP from Systembolaget where given.
// ============================================================

const PRODUCTS = [
  // ============ PERFUME — WOMEN ============
  { id: 'aurelian-amber', cat: 'perfume', sub: 'women', brand: 'Aurelian Veil',
    image: 'assets/products/aurelian-veil-amber.png',
    name: { en: 'Amber Haze Eau de Parfum 100ml', sv: 'Amber Haze Eau de Parfum 100ml' },
    desc: { en: 'Warm amber, honeyed labdanum and a whisper of vanilla. A modern oriental for evening wear.',
            sv: 'Varm bärnsten, honungsig labdanum och en aning vanilj. En modern orientalisk doft för kvällsbruk.' },
    price: { sek: 1190, eur: 105 }, rrp: { sek: 1490, eur: 132, hint: 'High street' }, badge: 'travel-exclusive', size: '100ml',
    color: '#c69856' },

  { id: 'violet-muse', cat: 'perfume', sub: 'women', brand: 'Violet Muse',
    image: 'assets/products/violet-muse-perfume.png',
    name: { en: 'Violet Muse Eau de Parfum 50ml', sv: 'Violet Muse Eau de Parfum 50ml' },
    desc: { en: 'A dewy floral built around violet leaf, white peony and soft musk. Crystalline cap, jewellery-like silhouette.',
            sv: 'En daggig blomdoft byggd runt violblad, vit pion och mjuk mysk. Kristallock, juvelliknande silhuett.' },
    price: { sek: 690, eur: 61 }, rrp: { sek: 890, eur: 79, hint: 'High street' }, badge: 'new', size: '50ml',
    color: '#caa8d6' },

  // ============ BEAUTY — SKINCARE ============
  { id: 'skyora-cleanser', cat: 'beauty', sub: 'skincare', brand: 'Skyora',
    image: 'assets/products/skyora-cleanser.png',
    name: { en: 'Cloud Clean Gentle Gel Cleanser 150ml', sv: 'Cloud Clean Mild Gel-rengöring 150ml' },
    desc: { en: 'A gentle gel cleanser for all skin types. Foams lightly, rinses cleanly, leaves skin balanced.',
            sv: 'En mild gel-rengöring för alla hudtyper. Skummar lätt, sköljs rent, lämnar huden balanserad.' },
    price: { sek: 229, eur: 20 }, rrp: { sek: 299, eur: 27, hint: 'High street' }, size: '150ml',
    color: '#9bc2e0' },

  { id: 'sunveil-spf', cat: 'beauty', sub: 'skincare', brand: 'Sunveil',
    image: 'assets/products/sunveil-spf.png',
    name: { en: 'Daily SPF 50 Broad Spectrum 50ml', sv: 'Daily SPF 50 Bred Solskydd 50ml' },
    desc: { en: 'Lightweight, non-greasy broad-spectrum sun protection. Sits invisibly under makeup.',
            sv: 'Lätt, icke-fet bred solskydd. Sitter osynligt under makeup.' },
    price: { sek: 269, eur: 24 }, rrp: { sek: 349, eur: 31, hint: 'High street' }, badge: 'travel-exclusive', size: '50ml',
    color: '#f3b94a' },

  // ============ SPIRITS — TEQUILA ============
  { id: 'sol-brava', cat: 'spirits', sub: 'tequila', brand: 'Sol Brava',
    image: 'assets/products/sol-brava-tequila.png',
    name: { en: 'Tequila Blanco 100% Agave 70cl', sv: 'Tequila Blanco 100% Agave 70cl' },
    desc: { en: '100% blue agave from Jalisco. Bright citrus, white pepper and a long, clean finish — distilled for the duty-free traveller.',
            sv: '100% blå agave från Jalisco. Frisk citrus, vitpeppar och en lång, ren eftersmak — destillerad för taxfree-resenären.' },
    price: { sek: 349, eur: 31 }, rrp: { sek: 549, eur: 49, hint: 'Systembolaget' }, badge: 'new', size: '70cl · 40%',
    color: '#e6d9b5' },

  // ============ SPIRITS — WINE ============
  { id: 'crimson-vale', cat: 'spirits', sub: 'wine', brand: 'Crimson Vale',
    image: 'assets/products/crimson-vale-wine.png',
    name: { en: 'Reserve Red 2021', sv: 'Reserve Red 2021' },
    desc: { en: 'A rounded reserve red with notes of black cherry, cedar and soft tannins. Aged 14 months in French oak.',
            sv: 'En rund reserve-röd med noter av svarta körsbär, ceder och mjuka tanniner. Lagrad 14 månader på fransk ek.' },
    price: { sek: 189, eur: 17 }, rrp: { sek: 279, eur: 25, hint: 'Systembolaget' }, member: true, size: '75cl · 13.5%',
    color: '#7a1a25' },

  // ============ CONFECTIONERY ============
  { id: 'popfizz-chews', cat: 'confectionery', sub: 'sweets', brand: 'PopFizz',
    image: 'assets/products/popfizz-chews.png',
    name: { en: 'Sparkling Fruit Chews 113g', sv: 'Sparkling Fruit Chews 113g' },
    desc: { en: 'Strawberry, tropical, berry and citrus chews — no artificial flavours or colours.',
            sv: 'Jordgubbe, tropisk, bär och citrus — utan konstgjorda smaker eller färger.' },
    price: { sek: 49, eur: 4.5 }, rrp: { sek: 69, eur: 6, hint: 'High street' }, badge: 'new', size: '113g',
    color: '#e85b9b' },

  { id: 'polar-pops-mints', cat: 'confectionery', sub: 'mints', brand: 'Polar Pops',
    image: 'assets/products/polar-pops-mints.png',
    name: { en: 'Frost Mints Sugar-Free Tin 50g', sv: 'Frost Mints Sockerfri Burk 50g' },
    desc: { en: 'Sugar-free pressed peppermints in a refillable tin. Cool, clean, long-lasting.',
            sv: 'Sockerfria pressade pepparmynt i återfyllbar burk. Sval, ren, långvarig.' },
    price: { sek: 39, eur: 3.5 }, rrp: { sek: 55, eur: 5, hint: 'High street' }, size: '50g',
    color: '#5fa8e0' },

  // ============ KIDS & TOYS ============
  { id: 'bricktrail-dino', cat: 'lifestyle', sub: 'toys', brand: 'BrickTrail',
    image: 'assets/products/bricktrail-dino.png',
    name: { en: 'Dino Explorer 248 pcs', sv: 'Dino Explorer 248 bitar' },
    desc: { en: 'A 248-piece T-Rex build with a buildable jungle scene. Compatible with major brick brands. Ages 7+.',
            sv: '248-bitars T-Rex-bygge med byggbar djungelscen. Kompatibel med större märken. 7+ år.' },
    price: { sek: 299, eur: 27 }, rrp: { sek: 399, eur: 35, hint: 'High street' }, badge: 'travel-exclusive', size: '248 pcs · ages 7+',
    color: '#3a6a3a' },

  { id: 'buildburst-fire', cat: 'lifestyle', sub: 'toys', brand: 'BuildBurst',
    image: 'assets/products/buildburst-fire.png',
    name: { en: 'Fire Rescue 276 pcs', sv: 'Fire Rescue 276 bitar' },
    desc: { en: 'A detailed fire engine build with extending ladder and fire station backdrop. Compatible with leading brick brands. Ages 6+.',
            sv: 'Ett detaljerat brandbilsbygge med utfällbar stege och brandstationsmiljö. Kompatibel med större märken. 6+ år.' },
    price: { sek: 349, eur: 31 }, rrp: { sek: 449, eur: 40, hint: 'High street' }, size: '276 pcs · ages 6+',
    color: '#c41e2a' },
];
const COCKTAILS = [
  {
    id: 'aperol-spritz',
    name: { en: 'Aperol Spritz', sv: 'Aperol Spritz' },
    tagline: { en: 'Italy in a glass.', sv: 'Italien i ett glas.' },
    ingredients: {
      en: ['6 cl Aperol', '12 cl Bottega Prosecco DOC', '2 cl Soda', 'Slice of orange'],
      sv: ['6 cl Aperol', '12 cl Bottega Prosecco DOC', '2 cl Soda', 'Apelsinklyfta']
    },
    method: {
      en: 'Build over ice in a wine glass. Stir gently. Garnish with orange.',
      sv: 'Bygg över is i ett vinglas. Rör försiktigt. Garnera med apelsin.'
    },
    color1: '#e8581a', color2: '#f0a030',
  },
  {
    id: 'botanist-tonic',
    name: { en: 'The Botanist & Tonic', sv: 'The Botanist & Tonic' },
    tagline: { en: 'Islay distilled, garden fresh.', sv: 'Destillerad på Islay, fräsch från trädgården.' },
    ingredients: {
      en: ['4 cl The Botanist Gin', 'Premium tonic', 'Slice of lemon'],
      sv: ['4 cl The Botanist Gin', 'Premium tonic', 'Citronklyfta']
    },
    method: {
      en: 'Highball glass packed with ice. Pour gin, top with tonic. Lemon slice.',
      sv: 'Highballglas fyllt med is. Häll i gin, toppa med tonic. Citronklyfta.'
    },
    color1: '#7a8a4a', color2: '#b8c878',
  },
  {
    id: 'absolut-bloody-mary',
    name: { en: 'Absolut Tabasco Bloody Mary', sv: 'Absolut Tabasco Bloody Mary' },
    tagline: { en: 'The new onboard signature.', sv: 'Den nya signaturen ombord.' },
    ingredients: {
      en: ['4 cl Absolut Tabasco', '10 cl tomato juice', '1 cl lemon juice', '1–2 dashes Worcestershire', 'Pinch celery salt', 'Black pepper', 'Celery stalk', 'Lemon wedge'],
      sv: ['4 cl Absolut Tabasco', '10 cl tomatjuice', '1 cl citronjuice', '1–2 stänk Worcestershire', 'En nypa sellerisalt', 'Svartpeppar', 'Sellerisstjälk', 'Citronklyfta']
    },
    method: {
      en: 'Build in highball over ice. Stir gently until well chilled. Adjust seasoning. Garnish with celery and lemon.',
      sv: 'Bygg i highball över is. Rör försiktigt tills välkyld. Justera kryddor. Garnera med selleri och citron.'
    },
    color1: '#cc1a1a', color2: '#8a1010',
  },
];

// ============================================================
// BAR MENU — onboard bar pricing (4cl / 6cl / glass)
// All prices in SEK, taken from onboard tariff
// ============================================================
const BAR_MENU = {
  intro: {
    en: 'All prices in SEK. Stena MORE members get 20% off selected drinks at the bar.',
    sv: 'Alla priser i kr. Stena MORE-medlemmar får 20% rabatt på utvalda drinkar i baren.',
  },
  sections: [
    { id: 'vodka', name: { en: 'Vodka', sv: 'Vodka' }, items: [
      { name: 'Absolut Blue', origin: { en: 'Sweden', sv: 'Sverige' }, p4: 35, p6: 49 },
      { name: 'Koskenkorva', origin: { en: 'Finland', sv: 'Finland' }, p4: 35, p6: 49 },
      { name: 'Żubrówka', origin: { en: 'Poland', sv: 'Polen' }, p4: 35, p6: 49 },
    ]},
    { id: 'gin', name: { en: 'Gin', sv: 'Gin' }, items: [
      { name: 'Beefeater Pink', origin: { en: 'England', sv: 'England' }, p4: 35, p6: 49 },
      { name: "Gordon's", origin: { en: 'England', sv: 'England' }, p4: 35, p6: 49 },
      { name: 'The Botanist', origin: { en: 'Scotland · Islay', sv: 'Skottland · Islay' }, p4: 39, p6: 55 },
    ]},
    { id: 'rum', name: { en: 'Rum', sv: 'Rom' }, items: [
      { name: 'Bacardi Carta Blanca', origin: { en: 'Puerto Rico', sv: 'Puerto Rico' }, p4: 35, p6: 49 },
      { name: 'Captain Morgan Spiced', origin: { en: 'Caribbean', sv: 'Karibien' }, p4: 39, p6: 55 },
      { name: 'Kraken Black Spiced', origin: { en: 'Trinidad & Tobago', sv: 'Trinidad & Tobago' }, p4: 45, p6: 65 },
    ]},
    { id: 'tequila', name: { en: 'Tequila', sv: 'Tequila' }, items: [
      { name: 'Olmeca Blanco', origin: { en: 'Mexico', sv: 'Mexico' }, p4: 39, p6: 55 },
      { name: 'Patrón Silver', origin: { en: 'Mexico', sv: 'Mexico' }, p4: 65, p6: 95 },
    ]},
    { id: 'cognac', name: { en: 'Cognac', sv: 'Cognac' }, items: [
      { name: 'Hennessy VS', origin: { en: 'France', sv: 'Frankrike' }, p4: 65, p6: 95 },
      { name: 'Rémy Martin VSOP', origin: { en: 'France', sv: 'Frankrike' }, p4: 75, p6: 110 },
    ]},
    { id: 'whisky', name: { en: 'Liqueurs & Whisky', sv: 'Likörer & Whisky' }, items: [
      { name: 'Baileys', origin: { en: 'Ireland', sv: 'Irland' }, p4: 35, p6: 49 },
      { name: 'Jägermeister', origin: { en: 'Germany', sv: 'Tyskland' }, p4: 39, p6: 55 },
      { name: 'Famous Grouse', origin: { en: 'Scotland', sv: 'Skottland' }, p4: 39, p6: 55 },
      { name: 'Jameson Triple Triple', origin: { en: 'Ireland', sv: 'Irland' }, p4: 49, p6: 69 },
      { name: 'Glenmorangie 12yo', origin: { en: 'Scotland · Highland', sv: 'Skottland · Highland' }, p4: 65, p6: 95 },
      { name: 'Glenlivet Triple Cask', origin: { en: 'Scotland · Speyside', sv: 'Skottland · Speyside' }, p4: 65, p6: 95 },
      { name: 'Aberfeldy Madeira Cask', origin: { en: 'Scotland · Highland', sv: 'Skottland · Highland' }, p4: 75, p6: 110 },
      { name: 'Redbreast 12yo', origin: { en: 'Ireland · Single Pot Still', sv: 'Irland · Single Pot Still' }, p4: 89, p6: 129 },
    ]},
    { id: 'aperitif', name: { en: 'Aperitifs', sv: 'Aperitifer' }, items: [
      { name: 'Aperol', origin: { en: 'Italy', sv: 'Italien' }, p4: 35, p6: 49 },
      { name: 'Campari', origin: { en: 'Italy', sv: 'Italien' }, p4: 39, p6: 55 },
      { name: 'Sarti Aperitivo', origin: { en: 'Italy', sv: 'Italien' }, p4: 39, p6: 55 },
      { name: 'Martini Bianco', origin: { en: 'Italy', sv: 'Italien' }, p4: 35, p6: 49 },
    ]},
  ],
  beerWine: [
    { name: { en: 'Draught lager (40cl)', sv: 'Fatöl ljus (40cl)' }, price: 65 },
    { name: { en: 'Craft IPA (33cl bottle)', sv: 'Hantverks-IPA (33cl flaska)' }, price: 79 },
    { name: { en: 'House red / white / rosé (15cl)', sv: 'Husets röda / vita / rosé (15cl)' }, price: 79 },
    { name: { en: 'Bottega Prosecco DOC (15cl)', sv: 'Bottega Prosecco DOC (15cl)' }, price: 89 },
    { name: { en: 'Moët & Chandon Brut Impérial (12cl)', sv: 'Moët & Chandon Brut Impérial (12cl)' }, price: 145 },
  ],
};

// ============================================================
// DINING — restaurants and venues onboard
// ============================================================
const DINING = [
  {
    id: 'taste',
    name: { en: 'Taste · A la carte restaurant', sv: 'Taste · À la carte-restaurang' },
    deck: 9,
    blurb: {
      en: 'Casual à la carte with Nordic-leaning plates. Open seating, sea views, full table service. Pre-book for the window seats.',
      sv: 'Avslappnad à la carte med nordiskt influerade rätter. Fri placering, havsutsikt, fullservice. Förboka för fönsterborden.',
    },
    image: 'assets/food-burger.png',
    hours: { en: 'Dinner 18:30 – 22:00 · Breakfast 07:00 – 09:30', sv: 'Middag 18:30 – 22:00 · Frukost 07:00 – 09:30' },
    highlights: [
      { en: 'Stena Burger 100% beef · sourdough · pickles', sv: 'Stena-burger 100% nöt · surdeg · picklat', price: 215 },
      { en: 'Truffle fries with aioli', sv: 'Tryffelpommes med aioli', price: 95 },
      { en: 'Pan-fried Baltic cod, brown butter', sv: 'Stekt östersjötorsk, brynt smör', price: 245 },
      { en: 'Sirloin steak 220g, peppercorn jus', sv: 'Entrecôte 220g, pepparsås', price: 325 },
      { en: 'Rhubarb compote, cream cheese mousse, crumble', sv: 'Rabarberkompott, färskostmousse, smul', price: 95 },
    ],
    booking: true,
    moreDiscount: true,
  },
  {
    id: 'metropolitan',
    name: { en: 'Metropolitan · Buffet', sv: 'Metropolitan · Buffé' },
    deck: 9,
    blurb: {
      en: 'A generous Scandinavian–German buffet — herring, smoked salmon, schnitzel, salads, hot dishes, dessert station and a cheese trolley.',
      sv: 'En generös skandinavisk–tysk buffé — sill, rökt lax, schnitzel, sallader, varma rätter, dessertstation och ostvagn.',
    },
    image: 'assets/food-fries.png',
    hours: { en: 'Dinner 18:30 – 22:30 · Breakfast 07:00 – 10:00', sv: 'Middag 18:30 – 22:30 · Frukost 07:00 – 10:00' },
    highlights: [
      { en: 'Adult dinner buffet (drinks separate)', sv: 'Vuxenbuffé middag (dryck tillkommer)', price: 365 },
      { en: 'Child 6–11 years', sv: 'Barn 6–11 år', price: 165 },
      { en: 'Child 0–5 years', sv: 'Barn 0–5 år', price: 0, freeNote: { en: 'Free', sv: 'Gratis' } },
      { en: 'Breakfast buffet (adult)', sv: 'Frukostbuffé (vuxen)', price: 145 },
    ],
    booking: true,
    moreDiscount: true,
  },
  {
    id: 'bistro',
    name: { en: 'Sea Bistro · Casual', sv: 'Sea Bistro · Avslappnat' },
    deck: 8,
    blurb: {
      en: 'Order at the counter, eat where you like. Hot mains, soup of the day, salads to go and a kids menu — perfect for travellers in a hurry.',
      sv: 'Beställ vid disken, ät där du vill. Varma rätter, dagens soppa, sallader och barnmeny — perfekt för dem med ont om tid.',
    },
    image: 'assets/food-fries-2.png',
    hours: { en: 'Open 11:00 – 23:00 continuously', sv: 'Öppet 11:00 – 23:00 utan avbrott' },
    highlights: [
      { en: 'Classic meatballs, mash, lingonberries', sv: 'Klassiska köttbullar, potatismos, lingon', price: 145 },
      { en: 'Currywurst with fries', sv: 'Currywurst med pommes', price: 125 },
      { en: 'Caesar salad with grilled chicken', sv: 'Caesarsallad med grillad kyckling', price: 145 },
      { en: 'Kids meatballs & mash', sv: 'Barnköttbullar & mos', price: 75 },
    ],
    booking: false,
    moreDiscount: true,
  },
  {
    id: 'cafe',
    name: { en: 'Coffee & Bakery', sv: 'Café & bageri' },
    deck: 8,
    blurb: {
      en: 'Espresso, cinnamon buns, fresh sandwiches, soft serve. Open early for the walk-on departure crowd.',
      sv: 'Espresso, kanelbullar, färska smörgåsar, mjukglass. Öppnar tidigt för gångpassagerare.',
    },
    image: null,
    hours: { en: 'Open 06:30 – 23:30', sv: 'Öppet 06:30 – 23:30' },
    highlights: [
      { en: 'Espresso / Americano', sv: 'Espresso / Americano', price: 35 },
      { en: 'Flat white / Cappuccino', sv: 'Flat white / Cappuccino', price: 49 },
      { en: 'Cinnamon bun, freshly baked', sv: 'Kanelbulle, nybakt', price: 39 },
      { en: 'Smörgås — prawn, cheese, ham', sv: 'Smörgås — räka, ost, skinka', price: 79 },
    ],
    booking: false,
    moreDiscount: false,
  },
];

// ============================================================
// FACILITIES — what's onboard
// ============================================================
const FACILITIES = [
  { id: 'cabins', icon: 'bed', deck: '4–7',
    name: { en: 'Cabins', sv: 'Hytter' },
    desc: { en: 'From cosy 2-berth inside cabins to Captain\'s Class suites with sea-view balconies.', sv: 'Från mysiga 2-bäddars insidehytter till Captain\'s Class-sviter med havsutsikt och balkong.' }},
  { id: 'restaurants', icon: 'utensils', deck: '8–9',
    name: { en: 'Four restaurants', sv: 'Fyra restauranger' },
    desc: { en: 'Buffet, à la carte, casual bistro and a coffee bar — all open onboard.', sv: 'Buffé, à la carte, avslappnad bistro och kaffebar — alla öppna ombord.' }},
  { id: 'shop', icon: 'shopping-bag', deck: '9',
    name: { en: 'Tax-free shop', sv: 'Taxfree-shop' },
    desc: { en: 'Spirits, perfume, electronics, sweets and toys at travel prices.', sv: 'Sprit, parfym, elektronik, godis och leksaker till resepriser.' }},
  { id: 'lounge', icon: 'armchair', deck: '9',
    name: { en: 'Stena Plus Lounge', sv: 'Stena Plus Lounge' },
    desc: { en: 'Quiet lounge with complimentary drinks, snacks and panoramic views — included in Captain\'s Class.', sv: 'Tyst lounge med fri dryck, snacks och panoramautsikt — ingår i Captain\'s Class.' }},
  { id: 'bar', icon: 'wine', deck: '9',
    name: { en: 'Bars & live music', sv: 'Barer & live-musik' },
    desc: { en: 'Three bars including a pub-style sports bar and a panoramic sky bar with live entertainment.', sv: 'Tre barer inklusive sportbar i pub-stil och panorama-skybar med live-underhållning.' }},
  { id: 'cinema', icon: 'film', deck: '8',
    name: { en: 'Cinema', sv: 'Bio' },
    desc: { en: 'Two screens with current releases — €5 / 50 SEK per ticket onboard.', sv: 'Två salonger med aktuella filmer — 50 kr / €5 per biljett ombord.' }},
  { id: 'kids', icon: 'gamepad-2', deck: '8',
    name: { en: 'Kids zone & arcade', sv: 'Barnzon & arkad' },
    desc: { en: 'Soft-play, arcade games, evening kids show. Free for everyone, all ages.', sv: 'Mjukyta, arkadspel, kvällens barnshow. Fri entré för alla åldrar.' }},
  { id: 'pets', icon: 'dog', deck: '4',
    name: { en: 'Pet cabins & pet deck', sv: 'Husdjurshytter & rastgård' },
    desc: { en: 'Dog-friendly cabins on Deck 4 plus a fresh-air exercise area for the crossing.', sv: 'Hundvänliga hytter på däck 4 plus en luftig rastgård under överfarten.' }},
  { id: 'wifi', icon: 'wifi', deck: 'All',
    name: { en: 'Premium WiFi', sv: 'Premium WiFi' },
    desc: { en: 'Avoid roaming charges — 39 SEK per crossing for the fast tier. Free for Gold & Platinum members.', sv: 'Slipp roaming — 39 kr per överfart för snabb hastighet. Gratis för Guld- och Platinum-medlemmar.' }},
  { id: 'accessibility', icon: 'accessibility', deck: 'All',
    name: { en: 'Accessibility', sv: 'Tillgänglighet' },
    desc: { en: 'Step-free routes, accessible cabins, lifts to all decks. Trained crew on every voyage.', sv: 'Trösklfria vägar, anpassade hytter, hissar till alla däck. Utbildad besättning på varje resa.' }},
];

// Make available globally
window.FERRY = FERRY;
window.PRODUCTS = PRODUCTS;
window.COCKTAILS = COCKTAILS;
window.BAR_MENU = BAR_MENU;
window.DINING = DINING;
window.FACILITIES = FACILITIES;
