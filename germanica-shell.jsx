// Site shell — header, footer, sub-nav for the Stena Scandinavica section.
// Header is intentionally lean: Logo · Ferries (link) · Help · 🌐 EN/SV · Sign in
// Sub-nav scopes the on-board content: Overview · Tax-free shop · Food & dining · Bar & lounges
const SH = window.STENA;

const SITE_STR = {
  en: {
    nav: [
      { label: 'Ferries', href: '#ferries' },
      { label: 'Help',    href: '#help' },
    ],
    onboardSubnav: [
      { id: 'overview', label: 'Scandinavica overview', href: 'Overview.html' },
      { id: 'shop',     label: 'Tax-free shop',         href: 'Shop.html'     },
      { id: 'dining',   label: 'Food & dining',         href: 'Food.html'     },
      { id: 'bar',      label: 'Bar & lounges',         href: 'Bar.html'      },
    ],
    breadcrumbHome: 'Home',
    breadcrumbFerries: 'Ferries',
    breadcrumbShip: 'Stena Scandinavica',
    signin: 'Sign in',
    member: 'Stena MORE',
    routeLabel: 'Stena Scandinavica · Gothenburg → Kiel',
    sek: 'kr', eur: '€',
    saveLabel: 'Save', memberOnly: 'Stena MORE member', nonMember: 'Non-member',
  },
  sv: {
    nav: [
      { label: 'Färjor', href: '#ferries' },
      { label: 'Hjälp',  href: '#help' },
    ],
    onboardSubnav: [
      { id: 'overview', label: 'Scandinavica översikt', href: 'Overview.html' },
      { id: 'shop',     label: 'Taxfree-shop',          href: 'Shop.html'     },
      { id: 'dining',   label: 'Mat & restauranger',    href: 'Food.html'     },
      { id: 'bar',      label: 'Barer & lounger',       href: 'Bar.html'      },
    ],
    breadcrumbHome: 'Hem',
    breadcrumbFerries: 'Färjor',
    breadcrumbShip: 'Stena Scandinavica',
    signin: 'Logga in',
    member: 'Stena MORE',
    routeLabel: 'Stena Scandinavica · Göteborg → Kiel',
    sek: 'kr', eur: '€',
    saveLabel: 'Spara', memberOnly: 'Stena MORE-medlem', nonMember: 'Icke-medlem',
  },
};

function useLang() {
  const [lang, setLang] = React.useState(() =>
    (typeof window !== 'undefined' && localStorage.getItem('stena-lang')) || 'en'
  );
  React.useEffect(() => { localStorage.setItem('stena-lang', lang); }, [lang]);
  const t = SITE_STR[lang];
  const fmtPrice = (sek, eur) => lang === 'sv' ? `${sek} kr` : `€${eur}`;
  return { lang, setLang, t, fmtPrice };
}

function langBtn(active) {
  return {
    background: active ? '#fff' : 'transparent',
    color: active ? SH.coreBlue : SH.ui600,
    border: 'none',
    boxShadow: active ? '0 1px 2px rgba(0,0,0,.08)' : 'none',
    borderRadius: 9999, padding: '4px 10px',
    fontSize: 12, fontWeight: 600, cursor: 'pointer',
    fontFamily: 'inherit', letterSpacing: '.04em',
  };
}

function GermHeader({ active = 'overview', lang, setLang, showSubnav = true }) {
  const t = SITE_STR[lang];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Main bar */}
      <div style={{
        background: '#fff', borderBottom: `1px solid ${SH.ui300}`,
        padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, height: 64,
      }}>
        <a href="Overview.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="assets/StenaFlag.svg" style={{ width: 36, height: 24 }} alt="" />
          <span style={{ fontWeight: 800, fontSize: 20, color: SH.coreBlue, letterSpacing: '-.5px' }}>STENA</span>
          <span style={{ fontWeight: 400, fontSize: 20, color: SH.coreBlue, letterSpacing: 2 }}>LINE</span>
        </a>
        <nav style={{ display: 'flex', gap: 4, flex: 1 }}>
          {t.nav.map((item, i) => (
            <a key={i} href={item.href} style={{
              padding: '8px 14px', borderRadius: 9999, fontSize: 14, fontWeight: 500,
              color: SH.ui900,
              textDecoration: 'none'
            }}>{item.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', background: SH.ui200, borderRadius: 9999, padding: 3, fontSize: 13 }}>
            <button onClick={() => setLang('en')} style={langBtn(lang === 'en')}>EN</button>
            <button onClick={() => setLang('sv')} style={langBtn(lang === 'sv')}>SV</button>
          </div>
          <button style={{ background: 'transparent', border: '1px solid transparent', borderRadius: 9999, padding: '6px 12px', height: 36, fontSize: 14, fontWeight: 500, fontFamily: 'inherit', color: SH.coreBlue, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <i data-lucide="user" style={{ width: 16, height: 16 }}></i>{t.signin}
          </button>
        </div>
      </div>
      {/* Sub-nav for Stena Scandinavica section */}
      {showSubnav && (
        <div style={{
          background: SH.molnigare, borderBottom: `1px solid ${SH.ui300}`,
          padding: '0 32px', display: 'flex', alignItems: 'center', gap: 24, height: 52, overflowX: 'auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: SH.ui600, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase', flex: 'none' }}>
            <i data-lucide="ship" style={{ width: 14, height: 14 }}></i> {t.routeLabel}
          </div>
          <nav style={{ display: 'flex', gap: 0, flex: 1 }}>
            {t.onboardSubnav.map(item => (
              <a key={item.id} href={item.href} style={{
                padding: '14px 18px', fontSize: 14, fontWeight: 500,
                color: active === item.id ? SH.coreBlue : SH.ui700,
                borderBottom: active === item.id ? `2px solid ${SH.coreBlue}` : '2px solid transparent',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function GermFooter({ lang }) {
  const FOOTER_STR = {
    en: {
      moreTitle: 'Earn points on every voyage',
      moreBody: 'Stena MORE members get free WiFi, lounge access on selected routes, member prices on board and points toward future bookings.',
      moreCta: 'Join Stena MORE',
      cols: [
        ['Stena Scandinavica', ['Overview', 'Tax-free shop', 'Food & dining', 'Bar & lounges']],
        ['Booking', ['Manage booking', 'Pre-order taxfree', 'Pre-book dining', 'Check-in']],
        ['Stena Line', ['All ferries', 'Sustainability', 'Careers', 'Stena MORE']],
        ['Help', ['Contact', 'Travel updates', 'Accessibility', 'Terms']],
      ],
      copyright: '© Stena Line Scandinavia AB',
      tagline: 'Connecting Europe by sea since 1962',
    },
    sv: {
      moreTitle: 'Tjäna poäng på varje resa',
      moreBody: 'Stena MORE-medlemmar får fri WiFi, lounge-åtkomst på utvalda rutter, medlemspriser ombord och poäng mot framtida bokningar.',
      moreCta: 'Bli Stena MORE-medlem',
      cols: [
        ['Stena Scandinavica', ['Översikt', 'Taxfree-shop', 'Mat & restauranger', 'Barer & lounger']],
        ['Bokning', ['Hantera bokning', 'Förbeställ taxfree', 'Förboka mat', 'Incheckning']],
        ['Stena Line', ['Alla färjor', 'Hållbarhet', 'Karriär', 'Stena MORE']],
        ['Hjälp', ['Kontakt', 'Reseinfo', 'Tillgänglighet', 'Villkor']],
      ],
      copyright: '© Stena Line Scandinavia AB',
      tagline: 'Förbinder Europa till sjöss sedan 1962',
    },
  };
  const f = FOOTER_STR[lang];
  return (
    <footer style={{ marginTop: 80, fontFamily: 'var(--swui-font-primary)' }}>
      <div style={{ background: SH.himmelLighter, color: SH.mussla, padding: '40px 32px', borderTop: `1px solid ${SH.ui300}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#fff', borderRadius: 9999, fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12, color: SH.coreBlue }}>
              <i data-lucide="sparkles" style={{ width: 12, height: 12 }}></i> Stena MORE
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 6px', lineHeight: 1.2, color: SH.ui900 }}>{f.moreTitle}</h2>
            <p style={{ fontSize: 15, color: SH.ui700, margin: 0, maxWidth: 640, lineHeight: 1.5 }}>{f.moreBody}</p>
          </div>
          <button style={{ background: SH.coreBlue, color: '#fff', border: 'none', borderRadius: 9999, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
            {f.moreCta} <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
          </button>
        </div>
      </div>
      <div style={{ background: SH.mussla, color: '#fff', padding: '48px 32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, maxWidth: 1200, margin: '0 auto' }}>
          {f.cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>{h}</div>
              {items.map(s => <div key={s} style={{ fontSize: 13, lineHeight: 2, color: '#cae2fb' }}>{s}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', marginTop: 32, paddingTop: 16, fontSize: 12, color: '#b4d4f9', display: 'flex', justifyContent: 'space-between', maxWidth: 1200, margin: '32px auto 0' }}>
          <span>{f.copyright}</span><span>{f.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

window.GermHeader = GermHeader;
window.GermFooter = GermFooter;
window.useLang = useLang;
window.SITE_STR = SITE_STR;
