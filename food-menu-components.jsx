// Food page components — built in the same vocabulary as the Tax-free shop
const FC = window.STENA;
const { useState: useFS, useEffect: useFE, useMemo: useFMemo, useRef: useFRef } = React;

const TAG_STYLES = {
  veg:        { en: 'Vegetarian',    sv: 'Vegetariskt',    bg: '#dff0d3', fg: '#305f18', dot: '#509e27' },
  vegan:      { en: 'Vegan',         sv: 'Vegansk',        bg: '#d1efc1', fg: '#284f14', dot: '#407e1f' },
  gf:         { en: 'Gluten free',   sv: 'Glutenfri',      bg: '#fff4d6', fg: '#7a4f00', dot: '#d28848' },
  popular:    { en: 'Popular',       sv: 'Populärt',       bg: '#e1edfd', fg: '#143a73', dot: '#1178df' },
  'chef-pick':{ en: "Chef's pick",   sv: 'Köksmästarens',  bg: '#fde7ec', fg: '#71001a', dot: '#b00f2e' },
};

function FoodTag({ id, lang }) {
  const s = TAG_STYLES[id]; if (!s) return null;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.fg, fontSize: 11, fontWeight: 600,
      padding: '4px 9px 4px 8px', borderRadius: 9999, lineHeight: 1.4, whiteSpace: 'nowrap',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: s.dot, display: 'inline-block' }} />
      {s[lang]}
    </span>
  );
}

// ============================================================
// HERO — adapted from Shop hero, food framing
// ============================================================
function FoodHeroV2({ lang }) {
  const t = lang === 'sv' ? {
    eyebrow: 'MAT OMBORD · DÄCK 8–9',
    title: 'Fyra restauranger.\nÉn överfart.',
    lead: 'Förhandsbeställ ditt bord eller din rätt och spara köandet ombord. Hela menyn är öppen oavsett om du reser med Stena MORE eller inte.',
    cta: 'Förboka bord',
    cta2: 'Se hela menyn',
    bullets: ['Bord 2h innan avgång', '15% MORE-rabatt på Taste', 'Allergener märkta'],
  } : {
    eyebrow: 'DINING ON BOARD · DECKS 8–9',
    title: 'Four restaurants.\nOne crossing.',
    lead: 'Pre-book your table or your dish — skip the queue on board. The full menu is open whether you travel with Stena MORE or not.',
    cta: 'Pre-book a table',
    cta2: 'Browse the full menu',
    bullets: ['Tables up to 2h before sailing', '15% MORE discount at Taste', 'Allergens marked per dish'],
  };
  return (
    <section style={{
      background: `linear-gradient(135deg, ${FC.coreBlue} 0%, #1c4a78 60%, #2a679f 100%)`,
      color: '#fff', position: 'relative', overflow: 'hidden',
    }} data-screen-label="Food hero">
      <svg style={{ position: 'absolute', right: -120, top: -60, width: 720, height: 720, opacity: 0.16 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth=".4"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#fff" strokeWidth=".3"/>
        <circle cx="50" cy="50" r="28" fill="none" stroke="#fff" strokeWidth=".3"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 96px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center', position: 'relative' }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.16em', fontWeight: 600, color: '#a8d4f4', marginBottom: 18 }}>{t.eyebrow}</div>
          <h1 style={{ fontFamily: FC.fontHeading, fontSize: 68, lineHeight: 1.02, margin: '0 0 24px', fontWeight: 700, letterSpacing: '-.018em', whiteSpace: 'pre-line', color: '#fff' }}>{t.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#dceaf6', margin: '0 0 36px', maxWidth: 540 }}>{t.lead}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <button style={{ padding: '14px 28px', borderRadius: 9999, background: '#fff', color: FC.coreBlue, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8 }}>{t.cta} <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></button>
            <button style={{ padding: '14px 28px', borderRadius: 9999, background: 'transparent', color: '#fff', fontSize: 15, fontWeight: 600, border: '1px solid rgba(255,255,255,.4)', cursor: 'pointer', fontFamily: 'inherit' }}>{t.cta2}</button>
          </div>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', fontSize: 13, color: '#dceaf6' }}>
            {t.bullets.map((b, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i data-lucide="check" style={{ width: 14, height: 14, color: '#a8d4f4' }}></i>{b}
              </div>
            ))}
          </div>
        </div>

        {/* Food card stack */}
        <div style={{ position: 'relative', height: 480 }}>
          {[
            { id: 'stena-burger',    x: 0,   y: 0,   rot: -4, z: 1 },
            { id: 'grilled-salmon',  x: 140, y: 60,  rot: 3,  z: 3 },
            { id: 'chicken-alfredo', x: 30,  y: 240, rot: -2, z: 2 },
            { id: 'sirloin-steak',   x: 200, y: 280, rot: 5,  z: 4 },
          ].map((card, i) => {
            const d = window.FOOD_MENU.find(x => x.id === card.id); if (!d) return null;
            return (
              <div key={i} style={{
                position: 'absolute', left: card.x, top: card.y, width: 200,
                transform: `rotate(${card.rot}deg)`, zIndex: card.z,
                borderRadius: 14, overflow: 'hidden', background: '#fff',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,.4)', border: '1px solid rgba(255,255,255,.6)',
              }}>
                <DishVisual d={d} ratio="1 / 1"/>
                <div style={{ padding: '10px 12px', color: FC.ui900 }}>
                  <div style={{ fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: FC.ui600 }}>{d.venue[lang]}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: FC.coreBlue }}>{d.price.sek} kr</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ background: 'rgba(0,0,0,.18)', backdropFilter: 'blur(4px)', padding: '14px 32px', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', justifyContent: 'center', gap: 48, fontSize: 13, color: '#dceaf6', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <i data-lucide="info" style={{ width: 14, height: 14 }}></i>
          {lang === 'sv' ? 'Allergener märks per rätt. Tala om för servisen vid svår allergi.' : 'Allergens are marked per dish. Tell the server about severe allergies.'}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <i data-lucide="utensils" style={{ width: 14, height: 14 }}></i>
          {lang === 'sv' ? 'Förboka senast 30 min före avgång' : 'Pre-book up to 30 min before sailing'}
        </span>
      </div>
    </section>
  );
}

// ============================================================
// RESTAURANT PICKER — three onboard venues
// ============================================================
function RestaurantPicker({ lang, onPick, active }) {
  const t = lang === 'sv'
    ? { eyebrow: 'TRE RESTAURANGER · DÄCK 8–9', title: 'Tre sätt att äta ombord.', sub: 'Välj en restaurang för att se den fullständiga menyn — eller bläddra alla nedan.' }
    : { eyebrow: 'THREE RESTAURANTS · DECK 8–9', title: 'Three ways to eat on board.', sub: 'Pick a restaurant to see its full menu — or browse all of them below.' };

  const venues = [
    {
      id: lang === 'sv' ? 'Casual Dining · Däck 8' : 'Casual Dining · Deck 8',
      kicker: 'CASUAL DINING',
      name: lang === 'sv' ? 'Allt på fartyget, avslappnat.' : 'Sit-down, no fuss.',
      blurb: lang === 'sv'
        ? 'Vardagsmat med havsutsikt: pizza, pasta, sallader, kaffe och bakverk. Beställ vid disken, sätt dig var du vill. Öppet hela dagen.'
        : 'Everyday plates with a sea view: pizza, pasta, salads, coffee and pastries. Order at the counter, sit where you like. Open all day.',
      hours: lang === 'sv' ? '07:00 – 22:00' : '07:00 – 22:00',
      bg: 'linear-gradient(135deg, #1a3a5e 0%, #2a6db8 100%)',
      accent: '#ffb168',
    },
    {
      id: lang === 'sv' ? 'Buffé · Däck 9' : 'Buffé · Deck 9',
      kicker: 'BUFFÉ',
      name: lang === 'sv' ? 'Allt du vill ha. Allt-i-ett.' : 'Help yourself, all you like.',
      blurb: lang === 'sv'
        ? 'Skandinavisk frukostbuffé på morgonen, internationell middagsbuffé på kvällen. Förbokningsbart. Inkluderar dryck.'
        : 'Scandinavian breakfast buffet in the morning, international dinner buffet in the evening. Pre-bookable. Drinks included.',
      hours: lang === 'sv' ? '06:30 – 10:00 · 17:30 – 21:30' : '06:30 – 10:00 · 17:30 – 21:30',
      bg: 'linear-gradient(135deg, #c44a2e 0%, #e87a48 100%)',
      accent: '#fff',
    },
    {
      id: lang === 'sv' ? 'À la carte · Däck 9' : 'À la carte · Deck 9',
      kicker: 'À LA CARTE',
      name: lang === 'sv' ? 'En riktig middag, mitt på Östersjön.' : 'A proper dinner, mid-Baltic.',
      blurb: lang === 'sv'
        ? 'Bordsservering med svensk-internationell meny. Säsongsbaserade rätter, vinlista, bordsbokning. Tre rätter på cirka 90 minuter.'
        : 'Table service with a Swedish-international menu. Seasonal dishes, wine list, reservations recommended. Three courses in about 90 minutes.',
      hours: lang === 'sv' ? '18:00 – 22:30' : '18:00 – 22:30',
      bg: 'linear-gradient(135deg, #2a3f5a 0%, #5a4a8a 100%)',
      accent: '#ffb168',
    },
  ];

  return (
    <section style={{ padding: '88px 32px 48px', background: '#fff' }} data-screen-label="Restaurants">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '.16em', fontWeight: 700, color: FC.coreBlue, marginBottom: 12 }}>{t.eyebrow}</div>
          <h2 style={{ fontFamily: FC.fontHeading, fontSize: 44, fontWeight: 700, letterSpacing: '-.012em', color: FC.ui900, margin: '0 0 8px', lineHeight: 1.1 }}>{t.title}</h2>
          <p style={{ fontSize: 15, color: FC.ui700, margin: 0, maxWidth: 620, lineHeight: 1.55 }}>{t.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {venues.map(v => {
            const isActive = active === v.id;
            const isDimmed = active && !isActive;
            return (
              <article key={v.id} onClick={() => onPick(isActive ? '' : v.id)} style={{
                borderRadius: 16, overflow: 'hidden', position: 'relative',
                background: v.bg, color: '#fff', padding: 32, minHeight: 360,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer',
                opacity: isDimmed ? 0.5 : 1,
                outline: isActive ? `3px solid ${FC.coreBlue}` : 'none',
                outlineOffset: 3,
                transition: 'opacity .18s ease',
              }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.1em', fontWeight: 700, color: v.accent, marginBottom: 18 }}>{v.kicker}</div>
                  <h3 style={{ color: '#fff', fontFamily: FC.fontHeading, fontSize: 28, fontWeight: 700, margin: '0 0 14px', letterSpacing: '-.012em', lineHeight: 1.15 }}>{v.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.85)', margin: 0, lineHeight: 1.55, textWrap: 'pretty' }}>{v.blurb}</p>
                </div>
                <div style={{
                  marginTop: 28, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.18)',
                  display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,.85)',
                }}>
                  <i data-lucide="clock" style={{ width: 14, height: 14 }}></i>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{v.hours}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CATEGORY GRID — same shape as Shop's
// ============================================================
function FoodCategoryGrid({ lang, onPick }) {
  const t = { en: { title: 'Browse the menu', sub: 'Jump straight to a section.' }, sv: { title: 'Bläddra i menyn', sub: 'Hoppa direkt till en avdelning.' } }[lang];
  const cats = [
    { id: 'mains',     en: 'Main courses', sv: 'Huvudrätter',   icon: 'utensils',     accent: '#1178df' },
    { id: 'sides',     en: 'Side dishes',  sv: 'Tillbehör',     icon: 'salad',        accent: '#509e27' },
    { id: 'kids',      en: "Kids' menu",   sv: 'Barnmeny',      icon: 'baby',         accent: '#e84858' },
    { id: 'desserts',  en: 'Desserts',     sv: 'Efterrätter',   icon: 'cake',         accent: '#a8284a' },
    { id: 'breakfast', en: 'Breakfast',    sv: 'Frukost',       icon: 'sunrise',      accent: '#d28848' },
    { id: 'beverages', en: 'Beverages',    sv: 'Drycker',       icon: 'coffee',       accent: '#7a2030' },
  ];
  const counts = useFMemo(() => {
    const m = {}; window.FOOD_MENU.forEach(x => { m[x.cat] = (m[x.cat] || 0) + 1; }); return m;
  }, []);

  return (
    <section style={{ padding: '80px 32px 32px', background: '#fff' }} data-screen-label="Menu categories">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: FC.fontHeading, fontSize: 36, fontWeight: 700, letterSpacing: '-.012em', color: FC.ui900, margin: '0 0 6px' }}>{t.title}</h2>
            <p style={{ fontSize: 16, color: FC.ui700, margin: 0 }}>{t.sub}</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {cats.map(c => (
            <button key={c.id} onClick={() => onPick(c.id)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
              background: '#fff', border: `1px solid ${FC.ui300}`, borderRadius: 12,
              padding: '18px 16px', minHeight: 150, cursor: 'pointer', transition: 'all .2s',
              fontFamily: 'inherit', textAlign: 'left',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = FC.ui300; e.currentTarget.style.transform = ''; }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.accent}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.accent }}>
                <i data-lucide={c.icon} style={{ width: 20, height: 20 }}></i>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: FC.ui900, marginBottom: 4 }}>{c[lang]}</div>
                <div style={{ fontSize: 12, color: FC.ui600 }}>{counts[c.id] || 0} {lang === 'sv' ? 'rätter' : 'items'}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DISH VISUAL — use image if present, fallback typographic plate
// ============================================================
function DishVisual({ d, ratio = '4 / 3' }) {
  if (d.image) {
    return (
      <div style={{ aspectRatio: ratio, width: '100%', position: 'relative', background: '#f6f4ef', overflow: 'hidden' }}>
        <img src={d.image} alt={d.name.en}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
      </div>
    );
  }
  // Typographic fallback plate
  const palette = {
    sides: { bg: '#f3efe2', fg: '#7a6326' }, kids: { bg: '#fff0d6', fg: '#7a4f00' },
    desserts: { bg: '#fde7ec', fg: '#71001a' }, breakfast: { bg: '#fff4d6', fg: '#895800' },
    beverages: { bg: '#e1edfd', fg: '#143a73' }, mains: { bg: '#eef4ec', fg: '#284f14' },
  };
  const p = palette[d.cat] || { bg: FC.molnigare, fg: FC.ui600 };
  return (
    <div style={{ aspectRatio: ratio, width: '100%', position: 'relative', background: p.bg, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '70%', aspectRatio: '1 / 1', borderRadius: 9999, border: `1.5px solid ${p.fg}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: FC.fontHeading, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: p.fg, textAlign: 'center', padding: 20, lineHeight: 1.05, textWrap: 'balance' }}>
          {d.name.en}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MENU CARD — header + price line, like the reference
// ============================================================
function DishCard({ d, lang, onOpen }) {
  return (
    <article onClick={() => onOpen(d)} style={{
      background: '#fff', border: `1px solid ${FC.ui300}`, borderRadius: 12, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', cursor: 'pointer',
      transition: 'transform .2s, box-shadow .2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(20,62,98,.18)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
      <DishVisual d={d}/>
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
          <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: FC.ui900, lineHeight: 1.25 }}>{d.name[lang]}</h4>
          <span style={{ fontSize: 15, fontWeight: 700, color: FC.coreBlue, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{d.price.sek} SEK</span>
        </div>
        <p style={{ fontSize: 13, color: FC.ui700, margin: 0, lineHeight: 1.5, textWrap: 'pretty' }}>{d.desc[lang]}</p>
        {d.tags && d.tags.length > 0 && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            {d.tags.map(tg => <FoodTag key={tg} id={tg} lang={lang}/>)}
          </div>
        )}
      </div>
    </article>
  );
}

// ============================================================
// MENU TOOLBAR
// ============================================================
function MenuToolbar({ lang, q, setQ, sort, setSort }) {
  const t = lang === 'sv' ? {
    placeholder: 'Sök rätt eller ingrediens…', sort: 'Sortera',
    sortOpts: [['feat', 'Utvalda'], ['priceA', 'Pris låg→hög'], ['priceD', 'Pris hög→låg'], ['name', 'Namn']],
  } : {
    placeholder: 'Search dish or ingredient…', sort: 'Sort',
    sortOpts: [['feat', 'Featured'], ['priceA', 'Price low→high'], ['priceD', 'Price high→low'], ['name', 'Name']],
  };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      padding: '20px 24px', background: FC.molnigare, borderRadius: 12,
      border: `1px solid ${FC.ui300}`, marginBottom: 24,
    }}>
      <div style={{ position: 'relative', flex: '1 1 280px', minWidth: 240 }}>
        <i data-lucide="search" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: FC.ui600 }}></i>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder={t.placeholder} style={{
          width: '100%', padding: '11px 14px 11px 40px', borderRadius: 9999, border: `1px solid ${FC.ui300}`,
          fontSize: 14, fontFamily: 'inherit', background: '#fff', boxSizing: 'border-box',
        }}/>
      </div>
      <select value={sort} onChange={e => setSort(e.target.value)} style={{
        padding: '11px 16px', borderRadius: 9999, border: `1px solid ${FC.ui300}`,
        fontSize: 14, fontFamily: 'inherit', background: '#fff', cursor: 'pointer', minWidth: 200,
      }}>
        {t.sortOpts.map(([v, l]) => <option key={v} value={v}>{t.sort}: {l}</option>)}
      </select>
    </div>
  );
}

// ============================================================
// SIDE FILTERS
// ============================================================
function MenuFilters({ lang, cat, setCat, venue, setVenue, tag, setTag, priceMax, setPriceMax }) {
  const t = lang === 'sv' ? {
    cats: 'Kategori', venues: 'Restaurang', tags: 'Kosthåll', price: 'Maxpris',
    all: 'Alla', clear: 'Rensa filter',
    catLabels: { mains: 'Huvudrätter', sides: 'Tillbehör', kids: 'Barnmeny', desserts: 'Efterrätter', breakfast: 'Frukost', beverages: 'Drycker' },
    venueLabels: {
      'Taste · Däck 9': 'Taste',
      'Metropolitan · Däck 9': 'Metropolitan',
      'Sea Bistro · Däck 8': 'Sea Bistro',
      'Café & bageri · Däck 8': 'Café & bageri',
      'Alla restauranger': 'Alla',
    },
  } : {
    cats: 'Category', venues: 'Restaurant', tags: 'Diet', price: 'Max price',
    all: 'All', clear: 'Clear filters',
    catLabels: { mains: 'Main courses', sides: 'Side dishes', kids: "Kids' menu", desserts: 'Desserts', breakfast: 'Breakfast', beverages: 'Beverages' },
    venueLabels: {
      'Taste · Deck 9': 'Taste',
      'Metropolitan · Deck 9': 'Metropolitan',
      'Sea Bistro · Deck 8': 'Sea Bistro',
      'Coffee & Bakery · Deck 8': 'Coffee & Bakery',
      'All restaurants': 'All venues',
    },
  };

  const cats = ['mains', 'sides', 'kids', 'desserts', 'breakfast', 'beverages'];
  const venues = useFMemo(() => [...new Set(window.FOOD_MENU.map(d => d.venue[lang]))], [lang]);

  const resetAll = () => { setCat(''); setVenue(''); setTag(''); setPriceMax(400); };

  return (
    <aside style={{
      width: 240, flex: 'none', background: '#fff', border: `1px solid ${FC.ui300}`,
      borderRadius: 12, padding: 20, alignSelf: 'flex-start', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: FC.ui900, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          {lang === 'sv' ? 'Filter' : 'Filter'}
        </div>
        <button onClick={resetAll} style={{ background: 'transparent', border: 'none', color: FC.coreBlue, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, padding: 0 }}>{t.clear}</button>
      </div>

      <FFGroup title={t.cats}>
        <FFRadio v="" label={t.all} cur={cat} on={() => setCat('')}/>
        {cats.map(c => <FFRadio key={c} v={c} label={t.catLabels[c]} cur={cat} on={() => setCat(c)}/>)}
      </FFGroup>

      <FFGroup title={t.tags}>
        {['veg', 'vegan', 'gf'].map(b => (
          <FFRadio key={b} v={b} label={TAG_STYLES[b][lang]} cur={tag} on={() => setTag(tag === b ? '' : b)}/>
        ))}
      </FFGroup>

      <FFGroup title={t.price}>
        <input type="range" min="35" max="400" step="5" value={priceMax} onChange={e => setPriceMax(+e.target.value)} style={{ width: '100%', accentColor: FC.coreBlue }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: FC.ui600, fontVariantNumeric: 'tabular-nums', marginTop: 6 }}>
          <span>35 kr</span><span style={{ color: FC.coreBlue, fontWeight: 700 }}>{priceMax}+ kr</span>
        </div>
      </FFGroup>

      <FFGroup title={t.venues}>
        <FFRadio v="" label={t.all} cur={venue} on={() => setVenue('')}/>
        {venues.map(v => <FFRadio key={v} v={v} label={t.venueLabels[v] || v} cur={venue} on={() => setVenue(venue === v ? '' : v)}/>)}
      </FFGroup>
    </aside>
  );
}

function FFGroup({ title, children }) {
  return (
    <div style={{ marginBottom: 22, paddingBottom: 18, borderBottom: `1px solid ${FC.ui200}` }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: FC.ui900, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </div>
  );
}

function FFRadio({ v, label, cur, on }) {
  const active = cur === v;
  return (
    <button onClick={on} style={{
      background: active ? FC.himmelLighter : 'transparent', color: active ? FC.coreBlue : FC.ui700,
      border: 'none', borderRadius: 6, padding: '6px 10px', fontSize: 13, cursor: 'pointer',
      fontFamily: 'inherit', textAlign: 'left', fontWeight: active ? 600 : 400,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{
        width: 14, height: 14, borderRadius: 9999, border: `1.5px solid ${active ? FC.coreBlue : FC.ui400}`,
        position: 'relative', flex: 'none', background: '#fff',
      }}>
        {active && <span style={{ position: 'absolute', inset: 3, borderRadius: 9999, background: FC.coreBlue }}/>}
      </span>
      {label}
    </button>
  );
}

// ============================================================
// DISH DIALOG
// ============================================================
function DishDialog({ d, lang, onClose }) {
  useFE(() => {
    if (!d) return;
    document.body.style.overflow = 'hidden';
    setTimeout(() => lucide.createIcons(), 0);
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [d]);
  if (!d) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(10,30,50,.6)', backdropFilter: 'blur(4px)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 16, maxWidth: 880, width: '100%', maxHeight: '90vh', overflow: 'auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: 9999, background: 'rgba(255,255,255,.95)', border: `1px solid ${FC.ui300}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <i data-lucide="x" style={{ width: 18, height: 18 }}></i>
        </button>
        <div style={{ background: FC.molnigare }}>
          <DishVisual d={d} ratio="1 / 1"/>
        </div>
        <div style={{ padding: 36, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 12, color: FC.ui600, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600, marginBottom: 8 }}>{d.venue[lang]}</div>
          <h2 style={{ fontFamily: FC.fontHeading, fontSize: 30, fontWeight: 700, color: FC.ui900, margin: '0 0 14px', lineHeight: 1.2 }}>{d.name[lang]}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: FC.ui700, margin: '0 0 24px' }}>{d.desc[lang]}</p>
          <div style={{ fontSize: 36, fontWeight: 700, color: FC.coreBlue, fontVariantNumeric: 'tabular-nums', marginBottom: 18 }}>{d.price.sek} SEK</div>
          {d.tags && d.tags.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {d.tags.map(tg => <FoodTag key={tg} id={tg} lang={lang}/>)}
            </div>
          )}
          <div style={{ background: FC.molnigare, borderRadius: 10, padding: 16, fontSize: 13, color: FC.ui700, marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: FC.ui900, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>{lang === 'sv' ? 'Innehåller' : 'Contains'}</div>
            {d.allergens[lang]}
          </div>
          <button style={{ padding: '14px 20px', borderRadius: 9999, background: FC.coreBlue, color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <i data-lucide="utensils" style={{ width: 16, height: 16 }}></i>
            {lang === 'sv' ? 'Förboka bord' : 'Pre-book a table'}
          </button>
        </div>
      </div>
    </div>
  );
}

window.FoodHeroV2 = FoodHeroV2;
window.FoodCategoryGrid = FoodCategoryGrid;
window.RestaurantPicker = RestaurantPicker;
window.DishVisual = DishVisual;
window.DishCard = DishCard;
window.MenuToolbar = MenuToolbar;
window.MenuFilters = MenuFilters;
window.DishDialog = DishDialog;
window.FoodTag = FoodTag;
