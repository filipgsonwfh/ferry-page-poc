// Germanica hub-page sections — built as composable pieces
const SHC = window.STENA;

// ============ HERO — Stena Scandinavica ferry page: photographic hero with overlaid booking widget ============
function GermHero({ lang }) {
  const COPY = {
    en: {
      crumbs: ['Home', 'Ferries', 'Stena Scandinavica'],
      eyebrow: 'GOTHENBURG → KIEL · 14h 30min',
      title: 'Stena Scandinavica',
      sub: 'A 240-metre overnight ferry on the Gothenburg–Kiel route. Cabins, four restaurants, three bars, a tax-free shop and a quiet sky lounge — every crossing.',
      caption: 'Stena Scandinavica · 240 m · 1 300 passengers',
      // Booking widget
      from: 'From', to: 'To', depart: 'Departure', return: 'Return', passengers: 'Travellers', search: 'Search ferries',
      goth: 'Gothenburg', kiel: 'Kiel',
      adultLabel: 'Adults', childLabel: 'Children',
      addReturn: '+ Add return', returnNo: 'One way',
      poneWay: 'One way', proundtrip: 'Round trip',
    },
    sv: {
      crumbs: ['Hem', 'Färjor', 'Stena Scandinavica'],
      eyebrow: 'GÖTEBORG → KIEL · 14h 30min',
      title: 'Stena Scandinavica',
      sub: 'En 240 meter lång nattfärja på rutten Göteborg–Kiel. Hytter, fyra restauranger, tre barer, taxfree-shop och en tyst sky lounge — varje överfart.',
      caption: 'Stena Scandinavica · 240 m · 1 300 passagerare',
      from: 'Från', to: 'Till', depart: 'Avgång', return: 'Hemresa', passengers: 'Resenärer', search: 'Sök färjor',
      goth: 'Göteborg', kiel: 'Kiel',
      adultLabel: 'Vuxna', childLabel: 'Barn',
      addReturn: '+ Lägg till hemresa', returnNo: 'Enkelresa',
      poneWay: 'Enkelresa', proundtrip: 'Tur & retur',
    },
  };
  const t = COPY[lang];
  const [trip, setTrip] = React.useState('return');
  const [adults, setAdults] = React.useState(2);
  const [kids, setKids] = React.useState(0);
  const [paxOpen, setPaxOpen] = React.useState(false);

  return (
    <section style={{ background: '#fff' }} data-screen-label="Scandinavica hero">
      {/* Breadcrumb strip */}
      <div style={{ background: SHC.molnigare, borderBottom: `1px solid ${SHC.ui300}` }}>
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 32px', fontSize: 13, color: SHC.ui600, display: 'flex', alignItems: 'center', gap: 6 }}>
          {t.crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <i data-lucide="chevron-right" style={{ width: 12, height: 12, color: SHC.ui400 }}></i>}
              <span style={{ color: i === t.crumbs.length - 1 ? SHC.ui900 : SHC.ui600, fontWeight: i === t.crumbs.length - 1 ? 600 : 400 }}>{c}</span>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Photographic hero with overlaid copy + booking widget */}
      <div style={{
        position: 'relative', minHeight: 620, color: '#fff', overflow: 'hidden',
        background: `linear-gradient(180deg, rgba(10,30,50,.25) 0%, rgba(10,30,50,.55) 60%, rgba(10,30,50,.85) 100%), url('assets/ship-scandinavica-hero.png') center/cover`,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 200px', position: 'relative' }}>
          <div style={{ fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#9bc6e8', marginBottom: 20 }}>{t.eyebrow}</div>
          <h1 style={{ color: '#fff', fontFamily: SHC.fontHeading, fontSize: 'clamp(56px, 7vw, 96px)', fontWeight: 700, lineHeight: 0.96, letterSpacing: '-.022em', margin: '0 0 22px', maxWidth: 920 }}>{t.title}</h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: '#dceaf6', maxWidth: 640, margin: 0, textWrap: 'pretty' }}>{t.sub}</p>
        </div>

        {/* Caption pill */}
        <div style={{
          position: 'absolute', bottom: 200, right: 32,
          background: 'rgba(255,255,255,.95)', color: SHC.ui900, fontSize: 12, padding: '8px 14px',
          borderRadius: 9999, fontWeight: 600, letterSpacing: '.02em',
        }}>{t.caption}</div>
      </div>

      {/* Booking widget — Stena-style search bar, overlapping the hero */}
      <div style={{ maxWidth: 1280, margin: '-120px auto 0', padding: '0 32px', position: 'relative', zIndex: 5 }}>
        <div style={{
          background: '#fff', borderRadius: 14, padding: 24,
          boxShadow: '0 24px 60px -20px rgba(10,30,50,.35), 0 1px 3px rgba(0,0,0,.05)',
          border: `1px solid ${SHC.ui200}`,
        }}>
          {/* Trip-type tabs */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
            {[
              { id: 'return', label: t.proundtrip },
              { id: 'oneway', label: t.poneWay },
            ].map(opt => (
              <button key={opt.id} onClick={() => setTrip(opt.id)} style={{
                padding: '8px 18px', borderRadius: 9999,
                background: trip === opt.id ? SHC.coreBlue : 'transparent',
                color: trip === opt.id ? '#fff' : SHC.ui700,
                border: trip === opt.id ? 'none' : `1px solid ${SHC.ui300}`,
                fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}>{opt.label}</button>
            ))}
          </div>

          {/* Search row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: trip === 'return' ? '1.2fr 1.2fr 1fr 1fr 1fr auto' : '1.2fr 1.2fr 1fr 1fr auto',
            gap: 1, background: SHC.ui200, borderRadius: 10, overflow: 'hidden',
            border: `1px solid ${SHC.ui300}`,
          }}>
            <SearchField icon="map-pin" label={t.from} value={t.goth} sub="GOT"/>
            <SearchField icon="map-pin" label={t.to} value={t.kiel} sub="KIE"/>
            <SearchField icon="calendar" label={t.depart} value="Mon 11 May" sub="2026"/>
            {trip === 'return' && <SearchField icon="calendar" label={t.return} value="Wed 13 May" sub="2026"/>}
            <div style={{ background: '#fff', padding: '14px 16px', position: 'relative' }}>
              <div style={{ fontSize: 11, color: SHC.ui600, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, marginBottom: 4 }}>{t.passengers}</div>
              <button onClick={() => setPaxOpen(!paxOpen)} style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 15, fontWeight: 600, color: SHC.ui900, display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {adults + kids} <i data-lucide="chevron-down" style={{ width: 14, height: 14, color: SHC.ui600 }}></i>
              </button>
              {paxOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', right: 0, width: 240, background: '#fff',
                  border: `1px solid ${SHC.ui300}`, borderRadius: 10, padding: 16,
                  boxShadow: '0 12px 32px rgba(10,30,50,.18)', zIndex: 10,
                }}>
                  <PaxRow label={t.adultLabel} sub="18+" v={adults} setV={setAdults} min={1}/>
                  <PaxRow label={t.childLabel} sub="0–17" v={kids} setV={setKids} min={0}/>
                </div>
              )}
            </div>
            <button style={{
              background: '#b00f2e', color: '#fff', border: 'none', padding: '0 28px',
              fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <i data-lucide="search" style={{ width: 16, height: 16 }}></i>
              {t.search}
            </button>
          </div>

          {/* Quick stats row */}
          <div style={{
            display: 'flex', gap: 36, marginTop: 18, paddingTop: 18,
            borderTop: `1px solid ${SHC.ui200}`, fontSize: 13, color: SHC.ui700, flexWrap: 'wrap',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <i data-lucide="ship" style={{ width: 14, height: 14, color: SHC.coreBlue }}></i>
              {lang === 'sv' ? 'Daglig avgång 18:45 från Göteborg' : 'Daily departure 18:45 from Gothenburg'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <i data-lucide="clock" style={{ width: 14, height: 14, color: SHC.coreBlue }}></i>
              {lang === 'sv' ? 'Restid 14h 30m' : 'Crossing 14h 30m'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <i data-lucide="bed" style={{ width: 14, height: 14, color: SHC.coreBlue }}></i>
              {lang === 'sv' ? 'Hytt ingår från 1 245 kr' : 'Cabin from 1 245 SEK'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#b00f2e' }}>
              <i data-lucide="star" style={{ width: 14, height: 14 }}></i>
              {lang === 'sv' ? 'MORE-medlemmar sparar 10 %' : 'MORE members save 10%'}
            </span>
          </div>
        </div>
      </div>

      {/* spacer below booking widget */}
      <div style={{ height: 56 }}/>
    </section>
  );
}

function SearchField({ icon, label, value, sub }) {
  return (
    <div style={{ background: '#fff', padding: '14px 16px', cursor: 'pointer' }}>
      <div style={{ fontSize: 11, color: SHC.ui600, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
        <i data-lucide={icon} style={{ width: 12, height: 12 }}></i> {label}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: SHC.ui900, lineHeight: 1.2 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: SHC.ui600, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function PaxRow({ label, sub, v, setV, min }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${SHC.ui200}` }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: SHC.ui900 }}>{label}</div>
        <div style={{ fontSize: 12, color: SHC.ui600 }}>{sub}</div>
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => setV(Math.max(min, v - 1))} disabled={v <= min} style={{
          width: 28, height: 28, borderRadius: 9999, border: `1px solid ${SHC.ui300}`,
          background: '#fff', cursor: v <= min ? 'not-allowed' : 'pointer',
          color: v <= min ? SHC.ui400 : SHC.coreBlue, fontSize: 16, lineHeight: 1, padding: 0,
        }}>−</button>
        <span style={{ fontSize: 15, fontWeight: 600, color: SHC.ui900, minWidth: 18, textAlign: 'center' }}>{v}</span>
        <button onClick={() => setV(v + 1)} style={{
          width: 28, height: 28, borderRadius: 9999, border: `1px solid ${SHC.ui300}`,
          background: '#fff', cursor: 'pointer', color: SHC.coreBlue, fontSize: 16, lineHeight: 1, padding: 0,
        }}>+</button>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, plus }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase', color: SHC.ui600, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: SHC.ui900, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {value}{plus && <sup style={{ fontSize: 11, color: SHC.ui600, fontWeight: 400, marginLeft: 3 }}>{plus}</sup>}
      </div>
      <div style={{ fontSize: 12, color: SHC.ui600, marginTop: 4 }}>{sub}</div>
    </div>
  );
}
function Arrow() {
  return <i data-lucide="arrow-right" style={{ width: 16, height: 16, color: SHC.ui400 }}></i>;
}

// ============ FACILITIES GRID ============
function FacilitiesGrid({ lang }) {
  const COPY = {
    en: { title: 'On board', lead: 'Restaurants, bars, a tax-free shop, cabins and a quiet lounge — across three decks of public space.' },
    sv: { title: 'Ombord', lead: 'Restauranger, barer, taxfree-shop, hytter och en tyst lounge — på tre däck med allmänna utrymmen.' },
  };
  const t = COPY[lang];
  const facLinks = { restaurants: 'Dining.html', shop: 'Shop.html', bar: 'Bar.html', lounge: 'Bar.html' };

  return (
    <section style={{ padding: '64px 32px 56px', background: '#fff' }} data-screen-label="What's onboard">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 32, maxWidth: 720 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: SHC.ui900, margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-.005em' }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: SHC.ui700, margin: 0, lineHeight: 1.55, textWrap: 'pretty' }}>{t.lead}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: `1px solid ${SHC.ui300}`, borderLeft: `1px solid ${SHC.ui300}` }}>
          {FACILITIES.map(f => {
            const link = facLinks[f.id];
            return (
              <a key={f.id} href={link || '#'} style={{
                padding: '28px 24px', borderRight: `1px solid ${SHC.ui300}`, borderBottom: `1px solid ${SHC.ui300}`,
                display: 'flex', flexDirection: 'column', gap: 12, textDecoration: 'none', color: 'inherit',
                background: '#fff', transition: 'background .2s', minHeight: 200,
              }}
              onMouseEnter={e => e.currentTarget.style.background = SHC.molnigare}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                <i data-lucide={f.icon} style={{ width: 24, height: 24, color: SHC.coreBlue }}></i>
                <div style={{ fontSize: 11, color: SHC.ui600, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500 }}>Deck {f.deck}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, color: SHC.ui900, lineHeight: 1.25 }}>{f.name[lang]}</h3>
                <p style={{ fontSize: 13, color: SHC.ui600, margin: 0, lineHeight: 1.5, flex: 1, textWrap: 'pretty' }}>{f.desc[lang]}</p>
                {link && <div style={{ fontSize: 13, color: SHC.coreBlue, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {lang === 'sv' ? 'Läs mer' : 'Learn more'} <i data-lucide="arrow-right" style={{ width: 12, height: 12 }}></i>
                </div>}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ DINING TEASER ============
function DiningTeaser({ lang }) {
  const COPY = {
    en: { title: 'Food & dining',
          lead: 'Four restaurants on board, from buffet and à la carte to a casual bistro and coffee bar. Pre-book to skip the queue.',
          cta: 'See all restaurants & menus' },
    sv: { title: 'Mat & restauranger',
          lead: 'Fyra restauranger ombord, från buffé och à la carte till avslappnad bistro och kaffebar. Förboka för att slippa kön.',
          cta: 'Se alla restauranger & menyer' },
  };
  const t = COPY[lang];
  return (
    <section style={{ padding: '56px 32px', background: SHC.molnigare }} data-screen-label="Dining teaser">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: SHC.ui900, margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-.005em' }}>{t.title}</h2>
            <p style={{ fontSize: 15, color: SHC.ui700, margin: 0, lineHeight: 1.55 }}>{t.lead}</p>
          </div>
          <a href="Dining.html" style={{
            color: SHC.coreBlue, fontSize: 14, fontWeight: 500, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>{t.cta} <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i></a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {DINING.slice(0, 2).map(d => (
            <a key={d.id} href={`Dining.html#${d.id}`} style={{
              background: '#fff', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column',
              textDecoration: 'none', color: 'inherit', boxShadow: '0 1px 3px rgba(0,0,0,.04)',
              transition: 'transform .25s, box-shadow .25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(20,62,98,.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,.04)'; }}>
              {d.image && <img src={d.image} alt="" style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }} />}
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ fontSize: 11, color: SHC.ui600, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 8 }}>Deck {d.deck} · {d.hours[lang]}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 10px', color: SHC.ui900 }}>{d.name[lang]}</h3>
                <p style={{ fontSize: 14, color: SHC.ui700, margin: 0, lineHeight: 1.55, textWrap: 'pretty' }}>{d.blurb[lang]}</p>
                {d.moreDiscount && <div style={{ marginTop: 12, fontSize: 12, color: SHC.coreBlue, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <i data-lucide="sparkles" style={{ width: 12, height: 12 }}></i>
                  {lang === 'sv' ? '20% Stena MORE-rabatt' : '20% off for Stena MORE members'}
                </div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SHOP TEASER ============
function ShopTeaser({ lang }) {
  const COPY = {
    en: { title: 'Tax-free shopping',
          lead: 'Travel-value prices on spirits, perfume, electronics and gifts — pre-order online and collect on board.',
          cta: 'Browse the shop',
          savings: 'Save vs Systembolaget on every bottle of spirits' },
    sv: { title: 'Taxfree-shopping',
          lead: 'Resepriser på sprit, parfym, elektronik och presenter — förbeställ online och hämta ombord.',
          cta: 'Bläddra i shoppen',
          savings: 'Spara mot Systembolaget på varje flaska sprit' },
  };
  const t = COPY[lang];
  // Pick four interesting featured products
  const featured = ['bombay-sapphire', 'dior-jadore', 'glenlivet', 'lego-tulips'].map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  return (
    <section style={{ padding: '56px 32px', background: '#fff' }} data-screen-label="Shop teaser">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: SHC.ui900, margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-.005em' }}>{t.title}</h2>
            <p style={{ fontSize: 15, color: SHC.ui700, margin: 0, lineHeight: 1.55 }}>{t.lead}</p>
          </div>
          <a href="Shop.html" style={{
            color: SHC.coreBlue, fontSize: 14, fontWeight: 500, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>{t.cta} <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i></a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {featured.map(p => <ProductTile key={p.id} p={p} lang={lang}/>)}
        </div>

        <div style={{ marginTop: 20, padding: '12px 18px', background: SHC.himmelLighter, borderRadius: 8, fontSize: 13, color: SHC.mussla, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <i data-lucide="check-circle-2" style={{ width: 14, height: 14 }}></i> {t.savings}
        </div>
      </div>
    </section>
  );
}

window.GermHero = GermHero;
window.FacilitiesGrid = FacilitiesGrid;
window.DiningTeaser = DiningTeaser;
window.ShopTeaser = ShopTeaser;
