// Stena Line booking UI kit — components shared globally for index.html
const { useState } = React;

const STENA = {
  coreBlue: '#004a93',
  mussla: '#122f66',
  modernBlue: '#1178df',
  himmelLight: '#cae2fb',
  himmelLighter: '#e1edfd',
  sand: '#faf6eb',
  molnigare: '#fafaf8',
  sjobod: '#b00f2e',
  ui200: '#f4f4f4',
  ui300: '#ebebeb',
  ui400: '#c9c9c9',
  ui600: '#5c6171',
  ui700: '#424551',
  ui900: '#000',
  green600: '#509e27',
  orange400: '#ffb633',
};

// ----- TopBar / SiteHeader -----
function SiteHeader({ activePath = '/', onNav }) {
  const links = [
    ['Ferry', '/'],
    ['Holiday packages', '/holidays'],
    ['Freight', '/freight'],
    ['On board', '/onboard'],
    ['Help', '/help'],
  ];
  return (
    <header style={{
      background: '#fff', borderBottom: `1px solid ${STENA.ui300}`,
      padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, height: 64,
      fontFamily: 'var(--swui-font-primary)'
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="assets/StenaFlag.svg" style={{ width: 36, height: 24 }} alt="" />
        <span style={{ fontWeight: 800, fontSize: 20, color: STENA.coreBlue, letterSpacing: '-.5px' }}>STENA</span>
        <span style={{ fontWeight: 400, fontSize: 20, color: STENA.coreBlue, letterSpacing: 2 }}>LINE</span>
      </a>
      <nav style={{ display: 'flex', gap: 4, flex: 1 }}>
        {links.map(([label, path]) => (
          <a key={path} href="#" onClick={e => { e.preventDefault(); onNav?.(path); }} style={{
            padding: '8px 14px', borderRadius: 9999, fontSize: 14, fontWeight: 500,
            color: activePath === path ? STENA.coreBlue : STENA.ui900,
            background: activePath === path ? STENA.himmelLighter : 'transparent',
            textDecoration: 'none'
          }}>{label}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={btnFlat()}><i data-lucide="globe" style={{ width: 16, height: 16 }}></i>EN £</button>
        <button style={btnFlat()}><i data-lucide="user" style={{ width: 16, height: 16 }}></i>Sign in</button>
      </div>
    </header>
  );
}

function btnPrimary(extra = {}) {
  return { background: STENA.coreBlue, color: '#fff', border: `1px solid ${STENA.coreBlue}`,
    borderRadius: 9999, padding: '8px 24px', height: 48, fontSize: 18, fontWeight: 500,
    fontFamily: 'var(--swui-font-primary)', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: 8, ...extra };
}
function btnSecondary(extra = {}) {
  return { background: '#fff', color: STENA.coreBlue, border: `1px solid ${STENA.coreBlue}`,
    borderRadius: 9999, padding: '6px 16px', height: 36, fontSize: 16, fontWeight: 500,
    fontFamily: 'var(--swui-font-primary)', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: 6, ...extra };
}
function btnFlat(extra = {}) {
  return { background: 'transparent', color: STENA.coreBlue, border: '1px solid transparent',
    borderRadius: 9999, padding: '6px 12px', height: 36, fontSize: 14, fontWeight: 500,
    fontFamily: 'var(--swui-font-primary)', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: 6, ...extra };
}

// ----- Field -----
function Field({ label, icon, value, onChange, placeholder, readOnly }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: 12, fontWeight: 500, color: STENA.ui700, textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</span>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: '#fff', border: `1px solid ${STENA.ui400}`, borderRadius: 4,
        height: 48, padding: '0 12px'
      }}>
        {icon && <i data-lucide={icon} style={{ width: 18, height: 18, color: STENA.coreBlue }}></i>}
        <input value={value} onChange={e => onChange?.(e.target.value)} placeholder={placeholder} readOnly={readOnly}
          style={{ border: 'none', outline: 'none', flex: 1, fontSize: 16, fontFamily: 'inherit', background: 'transparent', minWidth: 0 }} />
      </div>
    </label>
  );
}

// ----- BookingSearchPanel (homepage hero search) -----
function BookingSearchPanel({ onSearch }) {
  const [from, setFrom] = useState('Holyhead');
  const [to, setTo] = useState('Dublin');
  const [out, setOut] = useState('21 Mar 2026');
  const [back, setBack] = useState('25 Mar 2026');
  const [pax, setPax] = useState('2 adults');
  return (
    <div style={{
      background: '#fff', borderRadius: 16,
      boxShadow: '0 2px 4px -1px rgba(20,62,98,.15), 0 1px 10px 0 rgba(0,0,0,.12)',
      padding: 24, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 980,
    }}>
      <div style={{ display: 'flex', gap: 16, borderBottom: `1px solid ${STENA.ui300}`, paddingBottom: 12 }}>
        <button style={tabActive()}>Ferry</button>
        <button style={tabInactive()}>Ferry + hotel</button>
        <button style={tabInactive()}>Freight</button>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Field label="From" icon="anchor" value={from} onChange={setFrom} />
        <Field label="To" icon="map-pin" value={to} onChange={setTo} />
        <Field label="Outbound" icon="calendar" value={out} onChange={setOut} />
        <Field label="Return" icon="calendar" value={back} onChange={setBack} />
        <Field label="Travellers" icon="users" value={pax} onChange={setPax} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, color: STENA.ui700 }}>
          <input type="checkbox" defaultChecked /> Add a vehicle
        </label>
        <button style={btnPrimary()} onClick={onSearch}>
          <i data-lucide="search" style={{ width: 18, height: 18 }}></i>Search ferries
        </button>
      </div>
    </div>
  );
}
function tabActive() {
  return { background: 'transparent', border: 'none', borderBottom: `2px solid ${STENA.coreBlue}`,
    padding: '8px 12px', fontSize: 16, fontWeight: 500, color: STENA.coreBlue, cursor: 'pointer', fontFamily: 'inherit' };
}
function tabInactive() {
  return { background: 'transparent', border: 'none', borderBottom: '2px solid transparent',
    padding: '8px 12px', fontSize: 16, fontWeight: 500, color: STENA.ui900, cursor: 'pointer', fontFamily: 'inherit' };
}

// ----- DepartureCard (results list item) -----
function DepartureCard({ depart, arrive, duration, ship, price, selected, onSelect, fromCode, toCode }) {
  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${selected ? STENA.coreBlue : STENA.ui300}`,
      borderRadius: 8, padding: 16,
      boxShadow: selected ? '0 0 0 1px ' + STENA.coreBlue : '0 3px 1px -2px rgba(0,0,0,.15), 0 0 4px 0 rgba(0,0,0,.15)',
      display: 'flex', alignItems: 'center', gap: 24, cursor: 'pointer'
    }} onClick={onSelect}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: STENA.ui900 }}>{depart}</div>
          <div style={{ fontSize: 12, color: STENA.ui600 }}>{fromCode}</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: 12, color: STENA.ui600 }}>{duration}</div>
          <div style={{ width: '100%', height: 1, background: STENA.ui400, position: 'relative' }}>
            <i data-lucide="ship" style={{ position: 'absolute', left: '50%', top: -10, transform: 'translateX(-50%)', background: '#fff', padding: 2, color: STENA.coreBlue, width: 18, height: 18 }}></i>
          </div>
          <div style={{ fontSize: 11, color: STENA.ui600 }}>{ship}</div>
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: STENA.ui900 }}>{arrive}</div>
          <div style={{ fontSize: 12, color: STENA.ui600 }}>{toCode}</div>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 11, color: STENA.ui600, textTransform: 'uppercase', letterSpacing: '.04em' }}>From</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: STENA.coreBlue }}>£{price}</div>
        <div style={{ fontSize: 12, color: STENA.ui600 }}>per car + 2 adults</div>
      </div>
      <button style={selected ? btnPrimary({ height: 40, fontSize: 16, padding: '6px 20px' }) : btnSecondary({ height: 40 })}>
        {selected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}

// ----- BookingSummary (right rail) -----
function BookingSummary({ items, total }) {
  return (
    <aside style={{
      background: '#fff', borderRadius: 8, border: `1px solid ${STENA.ui300}`,
      padding: 20, position: 'sticky', top: 24, width: 320,
      boxShadow: '0 3px 1px -2px rgba(0,0,0,.15), 0 0 4px 0 rgba(0,0,0,.15)'
    }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: STENA.ui900, marginBottom: 12 }}>Your booking</div>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${STENA.ui200}`, fontSize: 14 }}>
          <div>
            <div style={{ color: STENA.ui900, fontWeight: 500 }}>{it.label}</div>
            {it.sub && <div style={{ color: STENA.ui600, fontSize: 12 }}>{it.sub}</div>}
          </div>
          <div style={{ color: STENA.ui900, fontWeight: 500 }}>£{it.price.toFixed(2)}</div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 12, borderTop: `2px solid ${STENA.ui300}` }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>Total</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: STENA.coreBlue }}>£{total.toFixed(2)}</div>
      </div>
      <div style={{ fontSize: 12, color: STENA.ui600, marginTop: 4 }}>Includes port fees · No hidden costs</div>
    </aside>
  );
}

// ----- Stepper (booking flow) -----
function Stepper({ steps, current }) {
  return (
    <ol style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: 0, fontFamily: 'var(--swui-font-primary)' }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current;
        return (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
            <span style={{
              width: 28, height: 28, borderRadius: 9999,
              background: done ? STENA.green600 : active ? STENA.coreBlue : '#fff',
              border: `1px solid ${done ? STENA.green600 : active ? STENA.coreBlue : STENA.ui400}`,
              color: done || active ? '#fff' : STENA.ui600,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600, flex: 'none'
            }}>{done ? '✓' : i + 1}</span>
            <span style={{ fontSize: 14, fontWeight: active ? 500 : 400, color: active ? STENA.ui900 : STENA.ui600 }}>{label}</span>
            {i < steps.length - 1 && <span style={{ flex: 1, height: 1, background: STENA.ui300, margin: '0 8px' }}/>}
          </li>
        );
      })}
    </ol>
  );
}

// ----- Footer -----
function SiteFooter() {
  const cols = [
    ['Travel', ['Routes', 'Timetables', 'Special offers', 'Travel updates']],
    ['Booking', ['Manage booking', 'Check in', 'Cancellation', 'Refunds']],
    ['About', ['Careers', 'Press', 'Sustainability', 'Investor relations']],
    ['Help', ['Contact', 'FAQ', 'Travel docs', 'Accessibility']],
  ];
  return (
    <footer style={{ background: STENA.mussla, color: '#fff', padding: '48px 32px 24px', fontFamily: 'var(--swui-font-primary)', marginTop: 40 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, maxWidth: 1280, margin: '0 auto' }}>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>{h}</div>
            {items.map(s => <div key={s} style={{ fontSize: 13, lineHeight: 2, color: '#cae2fb' }}>{s}</div>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', marginTop: 32, paddingTop: 16, fontSize: 12, color: '#b4d4f9', display: 'flex', justifyContent: 'space-between', maxWidth: 1280, margin: '32px auto 0' }}>
        <span>© Stena Line Scandinavia AB</span><span>Connecting Europe by sea since 1962</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  STENA, btnPrimary, btnSecondary, btnFlat,
  SiteHeader, BookingSearchPanel, DepartureCard, BookingSummary, Stepper, SiteFooter, Field
});
