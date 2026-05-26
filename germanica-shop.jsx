// Shop page — components for the tax-free shop
const SHOP = window.STENA;
const { useState, useMemo, useEffect } = React;

// ============================================================
// SHOP HERO — big editorial banner with offers
// ============================================================
function ShopHero({ lang }) {
  const STR = {
    en: {
      eyebrow: 'TAX-FREE ON BOARD',
      title: 'Up to 30% off everyday\nprices.\u00a0Onboard.',
      lead: 'Pre-order from our 600+ products at MyStenaLine and pick up before disembarking — or browse the deck-7 shop with a coffee in hand.',
      cta: 'Pre-order shop',
      cta2: 'Browse the catalogue',
      bullets: ['Save vs Systembolaget', 'New arrivals each season', 'Free pre-order pickup'],
    },
    sv: {
      eyebrow: 'TAXFREE OMBORD',
      title: 'Upp till 30% under\nordinarie pris.\u00a0Ombord.',
      lead: 'Förbeställ ur våra 600+ produkter via MyStenaLine och hämta innan avstigning — eller botanisera i shoppen på däck 7 med en kaffe i handen.',
      cta: 'Förbeställ',
      cta2: 'Bläddra i katalogen',
      bullets: ['Spara mot Systembolaget', 'Nyheter varje säsong', 'Gratis förbeställning'],
    },
  };
  const t = STR[lang];

  return (
    <section style={{
      background: `linear-gradient(135deg, ${SHOP.coreBlue} 0%, #1c4a78 60%, #2a679f 100%)`,
      color: '#fff', position: 'relative', overflow: 'hidden',
    }} data-screen-label="Shop hero">
      {/* Decorative wash */}
      <svg style={{ position: 'absolute', right: -120, top: -60, width: 720, height: 720, opacity: 0.16 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth=".4"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#fff" strokeWidth=".3"/>
        <circle cx="50" cy="50" r="28" fill="none" stroke="#fff" strokeWidth=".3"/>
      </svg>

      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '88px 32px 96px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.16em', fontWeight: 600, color: '#a8d4f4', marginBottom: 18 }}>{t.eyebrow}</div>
          <h1 style={{
            fontFamily: SHOP.fontHeading, fontSize: 68, lineHeight: 1.02, margin: '0 0 24px',
            fontWeight: 700, letterSpacing: '-.018em', whiteSpace: 'pre-line', color: '#fff',
          }}>{t.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#dceaf6', margin: '0 0 36px', maxWidth: 540 }}>{t.lead}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <button style={{
              padding: '14px 28px', borderRadius: 9999, background: '#fff', color: SHOP.coreBlue,
              fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>{t.cta} <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></button>
            <button style={{
              padding: '14px 28px', borderRadius: 9999, background: 'transparent', color: '#fff',
              fontSize: 15, fontWeight: 600, border: '1px solid rgba(255,255,255,.4)', cursor: 'pointer', fontFamily: 'inherit',
            }}>{t.cta2}</button>
          </div>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', fontSize: 13, color: '#dceaf6' }}>
            {t.bullets.map((b, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i data-lucide="check" style={{ width: 14, height: 14, color: '#a8d4f4' }}></i>{b}
              </div>
            ))}
          </div>
        </div>

        {/* Hero featured stack */}
        <div style={{ position: 'relative', height: 480 }}>
          {[
            { p: window.PRODUCTS.find(x => x.id === 'aurelian-amber'), x: 0, y: 0, rot: -4, z: 1 },
            { p: window.PRODUCTS.find(x => x.id === 'sol-brava'), x: 140, y: 60, rot: 3, z: 3 },
            { p: window.PRODUCTS.find(x => x.id === 'bricktrail-dino'), x: 30, y: 240, rot: -2, z: 2 },
            { p: window.PRODUCTS.find(x => x.id === 'crimson-vale'), x: 200, y: 280, rot: 5, z: 4 },
          ].filter(c => c.p).map((card, i) => (
            <div key={i} style={{
              position: 'absolute', left: card.x, top: card.y, width: 200,
              transform: `rotate(${card.rot}deg)`, zIndex: card.z,
              borderRadius: 14, overflow: 'hidden', background: '#fff',
              boxShadow: '0 30px 60px -20px rgba(0,0,0,.4)', border: '1px solid rgba(255,255,255,.6)',
            }}>
              <ProductVisual p={card.p}/>
              <div style={{ padding: '10px 12px', color: SHOP.ui900 }}>
                <div style={{ fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: SHOP.ui600 }}>{card.p.brand}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: SHOP.coreBlue }}>{lang === 'sv' ? `${card.p.price.sek} kr` : `€${card.p.price.eur}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking-strip-style condition bar */}
      <div style={{
        background: 'rgba(0,0,0,.18)', backdropFilter: 'blur(4px)',
        padding: '14px 32px', borderTop: '1px solid rgba(255,255,255,.1)',
        display: 'flex', justifyContent: 'center', gap: 48, fontSize: 13, color: '#dceaf6', flexWrap: 'wrap',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <i data-lucide="info" style={{ width: 14, height: 14 }}></i>
          {lang === 'sv' ? 'För resor till Tyskland gäller EU-regler. Jämför fritt med Systembolaget.' : 'EU rules apply for journeys to Germany. Compare with high-street prices.'}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <i data-lucide="package" style={{ width: 14, height: 14 }}></i>
          {lang === 'sv' ? 'Förbeställ senast 5 dagar före avgång' : 'Pre-order up to 5 days before departure'}
        </span>
      </div>
    </section>
  );
}

// ============================================================
// CATEGORY GRID — branded entry tiles
// ============================================================
function ShopCategoryGrid({ lang, onPick }) {
  const STR = {
    en: { title: 'Shop by category', sub: 'Browse our most-loved sections.' },
    sv: { title: 'Handla efter kategori', sub: 'Utforska våra populäraste avdelningar.' },
  };
  const t = STR[lang];
  const cats = [
    { id: 'spirits', en: 'Spirits & Wine', sv: 'Sprit & Vin', icon: 'wine', accent: '#7a2030', count: 2 },
    { id: 'perfume', en: 'Perfume', sv: 'Parfym', icon: 'flower-2', accent: '#a8284a', count: 2 },
    { id: 'beauty', en: 'Beauty & Skincare', sv: 'Skönhet & Hudvård', icon: 'sparkles', accent: '#d28848', count: 2 },
    { id: 'confectionery', en: 'Sweets & Snacks', sv: 'Godis & Snacks', icon: 'cookie', accent: '#aa1a2a', count: 2 },
    { id: 'lifestyle', en: 'Toys & Lifestyle', sv: 'Leksaker & Livsstil', icon: 'puzzle', accent: '#e84858', count: 2 },
  ];

  return (
    <section style={{ padding: '80px 32px 32px', background: '#fff' }} data-screen-label="Categories">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: SHOP.fontHeading, fontSize: 36, fontWeight: 700, letterSpacing: '-.012em', color: SHOP.ui900, margin: '0 0 6px' }}>{t.title}</h2>
            <p style={{ fontSize: 16, color: SHOP.ui700, margin: 0 }}>{t.sub}</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {cats.map(c => (
            <button key={c.id} onClick={() => onPick(c.id)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
              background: '#fff', border: `1px solid ${SHOP.ui300}`, borderRadius: 12,
              padding: '20px 18px', minHeight: 160, cursor: 'pointer', transition: 'all .2s',
              fontFamily: 'inherit', textAlign: 'left',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = SHOP.ui300; e.currentTarget.style.transform = ''; }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: `${c.accent}1a`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.accent,
              }}>
                <i data-lucide={c.icon} style={{ width: 22, height: 22 }}></i>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: SHOP.ui900, marginBottom: 4 }}>{c[lang]}</div>
                <div style={{ fontSize: 12, color: SHOP.ui600 }}>{c.count} {lang === 'sv' ? 'produkter' : 'products'}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FEATURED OFFERS STRIP — editorial highlight banners
// ============================================================
function FeaturedOffers({ lang }) {
  const offers = lang === 'en' ? [
    {
      eyebrow: 'TEQUILA OFFER',
      title: 'Sol Brava Blanco 70cl\n349 SEK',
      sub: 'Save 200 SEK vs Systembolaget price. 100% blue agave from Jalisco.',
      bg: 'linear-gradient(135deg, #c4a14a 0%, #8a6e2a 100%)',
      productId: 'sol-brava',
    },
    {
      eyebrow: 'NEW THIS SAILING',
      title: 'Aurelian Veil · Amber Haze',
      sub: 'A modern oriental — warm amber, honeyed labdanum and a whisper of vanilla.',
      bg: 'linear-gradient(135deg, #c69856 0%, #8a6028 100%)',
      productId: 'aurelian-amber',
    },
    {
      eyebrow: 'STENA MORE',
      title: 'Members save extra on wine',
      sub: 'Crimson Vale Reserve Red at 169 SEK for MORE — save 90 SEK vs non-member price.',
      bg: 'linear-gradient(135deg, #b00f2e 0%, #821225 100%)',
      productId: 'crimson-vale',
    },
  ] : [
    {
      eyebrow: 'TEQUILA-ERBJUDANDE',
      title: 'Sol Brava Blanco 70cl\n349 kr',
      sub: 'Spara 200 kr mot Systembolaget. 100% blå agave från Jalisco.',
      bg: 'linear-gradient(135deg, #c4a14a 0%, #8a6e2a 100%)',
      productId: 'sol-brava',
    },
    {
      eyebrow: 'NYTT OMBORD',
      title: 'Aurelian Veil · Amber Haze',
      sub: 'En modern oriental — varm bärnsten, honungsig labdanum och en aning vanilj.',
      bg: 'linear-gradient(135deg, #c69856 0%, #8a6028 100%)',
      productId: 'aurelian-amber',
    },
    {
      eyebrow: 'STENA MORE',
      title: 'Medlemmar sparar extra på vin',
      sub: 'Crimson Vale Reserve Red för 169 kr som MORE — spara 90 kr mot icke-medlem.',
      bg: 'linear-gradient(135deg, #b00f2e 0%, #821225 100%)',
      productId: 'crimson-vale',
    },
  ];

  return (
    <section style={{ padding: '32px 32px 64px', background: '#fff' }} data-screen-label="Featured offers">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {offers.map((o, i) => {
            const p = window.PRODUCTS.find(x => x.id === o.productId);
            return (
              <article key={i} style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden',
                background: o.bg, color: '#fff', minHeight: 280, padding: 28,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.16em', fontWeight: 700, opacity: .85, marginBottom: 14 }}>{o.eyebrow}</div>
                  <h3 style={{ fontFamily: SHOP.fontHeading, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', whiteSpace: 'pre-line', fontWeight: 700, letterSpacing: '-.005em' }}>{o.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, opacity: .92, maxWidth: 280 }}>{o.sub}</p>
                </div>
                {p && (
                  <div style={{
                    position: 'absolute', right: -10, bottom: -10, width: 130, height: 170,
                    borderRadius: 10, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,.3)',
                    transform: 'rotate(6deg)', border: '4px solid rgba(255,255,255,.95)',
                  }}>
                    <ProductVisual p={p}/>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SHOP TOOLBAR — search, sort, filters
// ============================================================
function ShopToolbar({ lang, q, setQ, sort, setSort, view, setView }) {
  const t = lang === 'sv' ? {
    placeholder: 'Sök varumärke, produkt…', sort: 'Sortera', view: 'Visa',
    sortOpts: [['feat','Utvalda'],['priceA','Pris låg→hög'],['priceD','Pris hög→låg'],['name','Namn']],
    grid: 'Rutnät', list: 'Lista',
  } : {
    placeholder: 'Search brand, product…', sort: 'Sort', view: 'View',
    sortOpts: [['feat','Featured'],['priceA','Price low→high'],['priceD','Price high→low'],['name','Name']],
    grid: 'Grid', list: 'List',
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      padding: '20px 24px', background: SHOP.molnigare, borderRadius: 12,
      border: `1px solid ${SHOP.ui300}`, marginBottom: 24,
    }}>
      <div style={{ position: 'relative', flex: '1 1 280px', minWidth: 240 }}>
        <i data-lucide="search" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: SHOP.ui600 }}></i>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder={t.placeholder} style={{
          width: '100%', padding: '11px 14px 11px 40px', borderRadius: 9999, border: `1px solid ${SHOP.ui300}`,
          fontSize: 14, fontFamily: 'inherit', background: '#fff', boxSizing: 'border-box',
        }}/>
      </div>
      <select value={sort} onChange={e => setSort(e.target.value)} style={{
        padding: '11px 16px', borderRadius: 9999, border: `1px solid ${SHOP.ui300}`,
        fontSize: 14, fontFamily: 'inherit', background: '#fff', cursor: 'pointer', minWidth: 180,
      }}>
        {t.sortOpts.map(([v, l]) => <option key={v} value={v}>{t.sort}: {l}</option>)}
      </select>
      <div style={{ display: 'inline-flex', background: '#fff', border: `1px solid ${SHOP.ui300}`, borderRadius: 9999, padding: 3 }}>
        <button onClick={() => setView('grid')} style={viewBtn(view === 'grid')}>
          <i data-lucide="grid-3x3" style={{ width: 14, height: 14 }}></i>{t.grid}
        </button>
        <button onClick={() => setView('list')} style={viewBtn(view === 'list')}>
          <i data-lucide="list" style={{ width: 14, height: 14 }}></i>{t.list}
        </button>
      </div>
    </div>
  );
}
function viewBtn(active) {
  return {
    background: active ? SHOP.coreBlue : 'transparent', color: active ? '#fff' : SHOP.ui700,
    border: 'none', borderRadius: 9999, padding: '7px 14px', fontSize: 13, fontWeight: 500, fontFamily: 'inherit',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
  };
}

// ============================================================
// SHOP SIDE FILTERS
// ============================================================
function ShopFilters({ lang, cat, setCat, sub, setSub, brand, setBrand, badge, setBadge, priceMax, setPriceMax }) {
  const t = lang === 'sv' ? {
    cats: 'Kategori', subs: 'Underkategori', brands: 'Varumärke', badges: 'Erbjudanden',
    price: 'Maxpris', all: 'Alla', clear: 'Rensa filter',
    catLabels: { spirits: 'Sprit & Vin', perfume: 'Parfym', beauty: 'Skönhet', confectionery: 'Godis', lifestyle: 'Livsstil' },
    badgeLabels: { 'travel-exclusive': 'Endast ombord', new: 'Nyhet', member: 'Medlemserbjudande' },
  } : {
    cats: 'Category', subs: 'Sub-category', brands: 'Brand', badges: 'Offers',
    price: 'Max price', all: 'All', clear: 'Clear filters',
    catLabels: { spirits: 'Spirits & Wine', perfume: 'Perfume', beauty: 'Beauty', confectionery: 'Sweets', lifestyle: 'Lifestyle' },
    badgeLabels: { 'travel-exclusive': 'Travel exclusive', new: 'New', member: 'Member offer' },
  };

  const cats = ['spirits', 'perfume', 'beauty', 'confectionery', 'lifestyle'];
  const subsByCat = {
    spirits: ['tequila', 'wine'],
    perfume: ['women'],
    beauty: ['skincare'],
    confectionery: ['sweets', 'mints'],
    lifestyle: ['toys'],
  };
  const visibleSubs = cat ? (subsByCat[cat] || []) : [];

  const allBrands = useMemo(() => [...new Set(window.PRODUCTS.filter(p => !cat || p.cat === cat).map(p => p.brand))].sort(), [cat]);

  const resetAll = () => { setCat(''); setSub(''); setBrand(''); setBadge(''); setPriceMax(2000); };

  return (
    <aside style={{
      width: 240, flex: 'none', background: '#fff', border: `1px solid ${SHOP.ui300}`,
      borderRadius: 12, padding: 20, alignSelf: 'flex-start', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: SHOP.ui900, textTransform: 'uppercase', letterSpacing: '.04em' }}>
          {lang === 'sv' ? 'Filter' : 'Filter'}
        </div>
        <button onClick={resetAll} style={{
          background: 'transparent', border: 'none', color: SHOP.coreBlue, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, padding: 0,
        }}>{t.clear}</button>
      </div>

      <FilterGroup title={t.cats}>
        <FilterRadio v="" label={t.all} cur={cat} on={() => { setCat(''); setSub(''); }}/>
        {cats.map(c => <FilterRadio key={c} v={c} label={t.catLabels[c]} cur={cat} on={() => { setCat(c); setSub(''); }}/>)}
      </FilterGroup>

      {visibleSubs.length > 0 && (
        <FilterGroup title={t.subs}>
          <FilterRadio v="" label={t.all} cur={sub} on={() => setSub('')}/>
          {visibleSubs.map(s => <FilterRadio key={s} v={s} label={s.charAt(0).toUpperCase() + s.slice(1)} cur={sub} on={() => setSub(s)}/>)}
        </FilterGroup>
      )}

      <FilterGroup title={t.badges}>
        {['travel-exclusive', 'new', 'member'].map(b => <FilterRadio key={b} v={b} label={t.badgeLabels[b]} cur={badge} on={() => setBadge(badge === b ? '' : b)}/>)}
      </FilterGroup>

      <FilterGroup title={t.price}>
        <input type="range" min="50" max="2000" step="50" value={priceMax} onChange={e => setPriceMax(+e.target.value)} style={{ width: '100%', accentColor: SHOP.coreBlue }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: SHOP.ui600, fontVariantNumeric: 'tabular-nums', marginTop: 6 }}>
          <span>50 kr</span><span style={{ color: SHOP.coreBlue, fontWeight: 700 }}>{priceMax}+ kr</span>
        </div>
      </FilterGroup>

      {allBrands.length <= 14 && (
        <FilterGroup title={t.brands}>
          <FilterRadio v="" label={t.all} cur={brand} on={() => setBrand('')}/>
          {allBrands.map(b => <FilterRadio key={b} v={b} label={b} cur={brand} on={() => setBrand(brand === b ? '' : b)}/>)}
        </FilterGroup>
      )}
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div style={{ marginBottom: 22, paddingBottom: 18, borderBottom: `1px solid ${SHOP.ui200}` }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: SHOP.ui900, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </div>
  );
}

function FilterRadio({ v, label, cur, on }) {
  const active = cur === v;
  return (
    <button onClick={on} style={{
      background: active ? SHOP.himmelLighter : 'transparent', color: active ? SHOP.coreBlue : SHOP.ui700,
      border: 'none', borderRadius: 6, padding: '6px 10px', fontSize: 13, cursor: 'pointer',
      fontFamily: 'inherit', textAlign: 'left', fontWeight: active ? 600 : 400,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{
        width: 14, height: 14, borderRadius: 9999, border: `1.5px solid ${active ? SHOP.coreBlue : SHOP.ui400}`,
        position: 'relative', flex: 'none', background: '#fff',
      }}>
        {active && <span style={{ position: 'absolute', inset: 3, borderRadius: 9999, background: SHOP.coreBlue }}/>}
      </span>
      {label}
    </button>
  );
}

// ============================================================
// PRODUCT LIST ROW (alt to grid tile)
// ============================================================
function ProductRow({ p, lang, onOpen }) {
  const fmt = lang === 'sv' ? `${p.price.sek} kr` : `€${p.price.eur}`;
  const rrpFmt = p.rrp ? (lang === 'sv' && p.rrp.sek ? `${p.rrp.sek} kr` : (p.rrp.eur ? `€${p.rrp.eur}` : (p.rrp.sek ? `${p.rrp.sek} kr` : null))) : null;
  return (
    <article onClick={() => onOpen(p)} style={{
      display: 'grid', gridTemplateColumns: '120px 1fr auto auto', gap: 20, alignItems: 'center',
      background: '#fff', border: `1px solid ${SHOP.ui300}`, borderRadius: 10, padding: 14, cursor: 'pointer',
    }}>
      <div style={{ width: 120, height: 120, borderRadius: 8, overflow: 'hidden' }}>
        <ProductVisual p={p}/>
      </div>
      <div>
        <div style={{ fontSize: 11, color: SHOP.ui600, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 500, marginBottom: 4 }}>{p.brand} · {p.size}</div>
        <h4 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 6px', color: SHOP.ui900 }}>{p.name[lang]}</h4>
        <p style={{ fontSize: 13, color: SHOP.ui700, margin: 0, lineHeight: 1.5, maxWidth: 540 }}>{p.desc[lang]}</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: SHOP.coreBlue, fontVariantNumeric: 'tabular-nums' }}>{fmt}</div>
        {rrpFmt && <div style={{ fontSize: 12, textDecoration: 'line-through', color: SHOP.ui600 }}>{rrpFmt}</div>}
      </div>
      <button style={{
        padding: '10px 18px', borderRadius: 9999, background: SHOP.coreBlue, color: '#fff',
        border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
      }} onClick={(e) => { e.stopPropagation(); onOpen(p); }}>
        {lang === 'sv' ? 'Visa' : 'View'}
      </button>
    </article>
  );
}

// ============================================================
// PRODUCT DETAIL DIALOG
// ============================================================
function ProductDialog({ p, lang, onClose }) {
  useEffect(() => {
    if (!p) return;
    document.body.style.overflow = 'hidden';
    setTimeout(() => lucide.createIcons(), 0);
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [p]);
  if (!p) return null;
  const fmt = lang === 'sv' ? `${p.price.sek} kr` : `€${p.price.eur}`;
  const rrpFmt = p.rrp ? (lang === 'sv' && p.rrp.sek ? `${p.rrp.sek} kr` : (p.rrp.eur ? `€${p.rrp.eur}` : null)) : null;
  const save = (p.rrp && p.rrp.sek && lang === 'sv') ? p.rrp.sek - p.price.sek : (p.rrp && p.rrp.eur ? Math.round((p.rrp.eur - p.price.eur) * 10) / 10 : 0);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(10,30,50,.6)', backdropFilter: 'blur(4px)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 16, maxWidth: 980, width: '100%', maxHeight: '90vh', overflow: 'auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: 9999,
          background: 'rgba(255,255,255,.95)', border: `1px solid ${SHOP.ui300}`, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
        }}>
          <i data-lucide="x" style={{ width: 18, height: 18 }}></i>
        </button>
        <div style={{ background: SHOP.molnigare }}>
          <ProductVisual p={p} ratio="4 / 5"/>
        </div>
        <div style={{ padding: 36, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 12, color: SHOP.ui600, textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600, marginBottom: 8 }}>{p.brand}</div>
          <h2 style={{ fontFamily: SHOP.fontHeading, fontSize: 30, fontWeight: 700, color: SHOP.ui900, margin: '0 0 8px', lineHeight: 1.2 }}>{p.name[lang]}</h2>
          <div style={{ fontSize: 13, color: SHOP.ui600, marginBottom: 22 }}>{p.size}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: SHOP.ui700, margin: '0 0 28px' }}>{p.desc[lang]}</p>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: SHOP.coreBlue, fontVariantNumeric: 'tabular-nums' }}>{fmt}</span>
            {rrpFmt && <span style={{ fontSize: 18, textDecoration: 'line-through', color: SHOP.ui600 }}>{rrpFmt}</span>}
          </div>
          {save > 0 && (
            <div style={{ fontSize: 14, color: '#509e27', fontWeight: 600, marginBottom: 24 }}>
              {lang === 'sv' ? `Spara ${save} kr` : `Save €${save}`} {p.rrp.hint && <span style={{ color: SHOP.ui600, fontWeight: 400 }}>vs {p.rrp.hint}</span>}
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <button style={{
              flex: 1, padding: '14px 20px', borderRadius: 9999, background: SHOP.coreBlue, color: '#fff',
              border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <i data-lucide="shopping-bag" style={{ width: 16, height: 16 }}></i>
              {lang === 'sv' ? 'Förbeställ' : 'Pre-order'}
            </button>
            <button style={{
              padding: '14px 16px', borderRadius: 9999, background: '#fff', color: SHOP.ui700,
              border: `1px solid ${SHOP.ui300}`, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <i data-lucide="heart" style={{ width: 16, height: 16 }}></i>
            </button>
          </div>

          <div style={{
            background: SHOP.molnigare, borderRadius: 10, padding: 16, fontSize: 13, color: SHOP.ui700,
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <i data-lucide="package-check" style={{ width: 16, height: 16, color: SHOP.coreBlue }}></i>
              {lang === 'sv' ? 'Hämta vid shoppen ombord, däck 7' : 'Pick up at the deck-7 shop on board'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <i data-lucide="clock" style={{ width: 16, height: 16, color: SHOP.coreBlue }}></i>
              {lang === 'sv' ? 'Förbeställ senast 5 dagar före avgång' : 'Pre-order up to 5 days before departure'}
            </div>
            {p.member && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#b00f2e' }}>
                <i data-lucide="star" style={{ width: 16, height: 16 }}></i>
                {lang === 'sv' ? 'Extra rabatt med Stena MORE' : 'Extra discount with Stena MORE'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MORE MEMBER PITCH
// ============================================================
function MoreMemberPitch({ lang }) {
  const STR = lang === 'sv' ? {
    eyebrow: 'STENA MORE',
    title: 'Bli medlem.\u00a0Spara mer.',
    lead: 'Som Stena MORE-medlem får du extra rabatter på utvalda taxfree-produkter, restaurangrabatt och tidigare incheckning. Helt gratis.',
    perks: [
      ['percent', '10% rabatt', 'På utvalda taxfree-produkter ombord.'],
      ['utensils', 'Restaurangrabatt', '15% i Metropolitan à la carte.'],
      ['clock', 'Förtur ombord', 'Tidigare incheckning och prioriterad bordsbokning.'],
      ['gift', 'Födelsedagspresent', 'Något smått från shoppen på din månad.'],
    ],
    cta: 'Bli MORE-medlem',
  } : {
    eyebrow: 'STENA MORE',
    title: 'Become a member.\u00a0Save more.',
    lead: 'As a Stena MORE member you get extra discounts on selected tax-free products, restaurant discount and earlier check-in. Free to join.',
    perks: [
      ['percent', '10% discount', 'On selected tax-free products on board.'],
      ['utensils', 'Restaurant discount', '15% off in Metropolitan à la carte.'],
      ['clock', 'Priority on board', 'Earlier check-in and priority dining reservations.'],
      ['gift', 'Birthday gift', 'A small something from the shop in your birthday month.'],
    ],
    cta: 'Join MORE',
  };

  return (
    <section style={{
      padding: '80px 32px', background: SHOP.coreBlue, color: '#fff', position: 'relative', overflow: 'hidden',
    }} data-screen-label="MORE pitch">
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', background: 'linear-gradient(135deg, transparent 0%, #b00f2e 100%)', opacity: .5, pointerEvents: 'none' }}/>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.16em', fontWeight: 700, color: '#ffb6c1', marginBottom: 16 }}>{STR.eyebrow}</div>
          <h2 style={{ fontFamily: SHOP.fontHeading, fontSize: 48, fontWeight: 700, color: '#fff', margin: '0 0 18px', lineHeight: 1.05, letterSpacing: '-.018em' }}>{STR.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#dceaf6', margin: '0 0 28px', maxWidth: 440 }}>{STR.lead}</p>
          <button style={{
            padding: '14px 28px', borderRadius: 9999, background: '#b00f2e', color: '#fff',
            fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>{STR.cta} <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {STR.perks.map(([icon, title, desc], i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(4px)',
              borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,.14)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 9999, background: '#b00f2e',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
              }}>
                <i data-lucide={icon} style={{ width: 20, height: 20 }}></i>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{title}</h3>
              <p style={{ fontSize: 13, color: '#dceaf6', margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ShopHero = ShopHero;
window.ShopCategoryGrid = ShopCategoryGrid;
window.FeaturedOffers = FeaturedOffers;
window.ShopToolbar = ShopToolbar;
window.ShopFilters = ShopFilters;
window.ProductRow = ProductRow;
window.ProductDialog = ProductDialog;
window.MoreMemberPitch = MoreMemberPitch;
