// Shared product tile + bottle visual for the shop & teasers
const PT = window.STENA;

// Stylised bottle/box visual driven by category + accent color, OR a real product photo if p.image is set
function ProductVisual({ p, ratio = '1 / 1' }) {
  const cat = p.cat, sub = p.sub, c = p.color || '#888';
  if (p.image) {
    return (
      <div style={{ aspectRatio: ratio, width: '100%', position: 'relative', background: '#f6f4ef', overflow: 'hidden' }}>
        <img src={p.image} alt={p.brand}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
        {/* Soft inner shadow at top to anchor the badges */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.04) 100%)', pointerEvents: 'none' }}/>
      </div>
    );
  }
  return (
    <div style={{ aspectRatio: ratio, width: '100%', position: 'relative', background: PT.molnigare, overflow: 'hidden' }}>
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
        {(cat === 'spirits' && sub !== 'beer' && sub !== 'wine') && (
          <g>
            {/* Bottle */}
            <path d="M 86 44 L 114 44 L 114 72 Q 130 78 130 96 L 130 174 Q 130 180 124 180 L 76 180 Q 70 180 70 174 L 70 96 Q 70 78 86 72 Z" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <rect x="92" y="34" width="16" height="12" fill="#1a1a1a"/>
            <rect x="74" y="98" width="52" height="56" fill="#fafaf8" stroke="#0a1830" strokeWidth="0.6"/>
            <text x="100" y="118" fontSize="7" fontFamily="serif" fontWeight="700" fill="#0a1830" textAnchor="middle">{(p.brand || '').slice(0, 12).toUpperCase()}</text>
            <line x1="80" y1="126" x2="120" y2="126" stroke="#c9a548" strokeWidth="0.8"/>
            <text x="100" y="138" fontSize="5" fontFamily="serif" fill="#5c6171" textAnchor="middle">{(p.size || '').slice(0, 18)}</text>
            <text x="100" y="148" fontSize="5" fontFamily="serif" fill="#5c6171" textAnchor="middle">{(sub || '').toUpperCase()}</text>
          </g>
        )}
        {(sub === 'wine' || sub === 'beer' || sub === 'sparkling' || sub === 'champagne') && (
          <g>
            <path d="M 90 30 L 110 30 L 110 70 Q 122 80 122 100 L 122 175 Q 122 180 117 180 L 83 180 Q 78 180 78 175 L 78 100 Q 78 80 90 70 Z" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <rect x="93" y="22" width="14" height="10" fill="#1a1a1a"/>
            <rect x="80" y="110" width="40" height="48" fill="#fafaf8" stroke="#0a1830" strokeWidth="0.5"/>
            <text x="100" y="128" fontSize="6" fontFamily="serif" fontWeight="700" fill="#0a1830" textAnchor="middle">{(p.brand || '').slice(0, 14).toUpperCase()}</text>
          </g>
        )}
        {cat === 'perfume' && (
          <g>
            <rect x="68" y="76" width="64" height="96" rx="3" fill={c} fillOpacity="0.6" stroke="#0a1830" strokeWidth="1"/>
            <rect x="86" y="56" width="28" height="22" fill="#c9a548" stroke="#0a1830" strokeWidth="0.8"/>
            <rect x="92" y="46" width="16" height="12" fill="#222"/>
            <rect x="76" y="116" width="48" height="22" fill="#fff" stroke="#0a1830" strokeWidth="0.5"/>
            <text x="100" y="131" fontSize="7" fontFamily="serif" fontStyle="italic" fontWeight="600" fill="#0a1830" textAnchor="middle">{(p.brand || '').slice(0, 14)}</text>
          </g>
        )}
        {cat === 'beauty' && (
          <g>
            <rect x="62" y="64" width="76" height="100" rx="6" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <ellipse cx="100" cy="64" rx="38" ry="6" fill="#fff" stroke="#0a1830" strokeWidth="0.8"/>
            <rect x="72" y="100" width="56" height="32" fill="#fff"/>
            <text x="100" y="120" fontSize="9" fontFamily="serif" fontWeight="600" fill="#0a1830" textAnchor="middle">{(p.brand || '').slice(0, 12)}</text>
          </g>
        )}
        {cat === 'electronics' && (
          <g>
            <rect x="50" y="60" width="100" height="100" rx="14" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <rect x="60" y="70" width="80" height="56" fill="#0a1830"/>
            <text x="100" y="100" fontSize="11" fontFamily="sans-serif" fontWeight="700" fill="#fff" textAnchor="middle">{(p.brand || '').slice(0, 8).toUpperCase()}</text>
            <rect x="80" y="135" width="40" height="18" rx="3" fill="#fff" opacity=".4"/>
          </g>
        )}
        {cat === 'lifestyle' && (
          <g>
            <rect x="40" y="60" width="120" height="80" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <rect x="40" y="60" width="120" height="20" fill="#fff" opacity=".25"/>
            <text x="100" y="105" fontSize="11" fontFamily="sans-serif" fontWeight="800" fill="#fff" textAnchor="middle">{(p.brand || '').toUpperCase()}</text>
            <rect x="40" y="140" width="120" height="6" fill="rgba(0,0,0,.3)"/>
          </g>
        )}
        {cat === 'confectionery' && (
          <g>
            <rect x="36" y="60" width="128" height="84" rx="4" fill={c} stroke="#0a1830" strokeWidth="1"/>
            <rect x="36" y="56" width="128" height="14" fill="#0a1830"/>
            <text x="100" y="66" fontSize="9" fontFamily="sans-serif" fontWeight="800" fill="#fff" textAnchor="middle">{(p.brand || '').toUpperCase()}</text>
            <text x="100" y="108" fontSize="22" fontFamily="serif" fontStyle="italic" fontWeight="700" fill="#fff" textAnchor="middle">2×</text>
          </g>
        )}
      </svg>
    </div>
  );
}

// Compact tile used in grids and teasers
function ProductTile({ p, lang }) {
  const t = window.SITE_STR[lang];
  const fmt = lang === 'sv' ? `${p.price.sek} kr` : `€${p.price.eur}`;
  const rrpDisplay = p.rrp ? (lang === 'sv' && p.rrp.sek ? `${p.rrp.sek} kr` : (p.rrp.eur ? `€${p.rrp.eur}` : (p.rrp.sek ? `${p.rrp.sek} kr` : null))) : null;
  const save = (p.rrp && p.rrp.sek && lang === 'sv') ? p.rrp.sek - p.price.sek : (p.rrp && p.rrp.eur ? Math.round((p.rrp.eur - p.price.eur) * 10) / 10 : 0);
  const badgeMap = {
    new: { en: 'New on board', sv: 'Ny ombord', bg: '#509e27' },
    'travel-exclusive': { en: 'Travel exclusive', sv: 'Endast ombord', bg: '#1178df' },
    member: { en: 'Member offer', sv: 'Medlemserbjudande', bg: '#b00f2e' },
  };
  const badge = badgeMap[p.badge];

  return (
    <article style={{
      background: '#fff', border: `1px solid ${PT.ui300}`, borderRadius: 12, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', transition: 'transform .2s, box-shadow .2s', cursor: 'pointer',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(20,62,98,.18)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
      <div style={{ position: 'relative' }}>
        <ProductVisual p={p}/>
        {badge && (
          <span style={{ position: 'absolute', top: 10, left: 10, background: badge.bg, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 9999, letterSpacing: '.04em', textTransform: 'uppercase' }}>{badge[lang]}</span>
        )}
      </div>
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        <div style={{ fontSize: 11, color: PT.ui600, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 500 }}>{p.brand} · {p.size}</div>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0, color: PT.ui900, lineHeight: 1.3, flex: 1 }}>{p.name[lang]}</h4>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: PT.coreBlue, fontVariantNumeric: 'tabular-nums' }}>{fmt}</span>
          {rrpDisplay && <span style={{ fontSize: 12, textDecoration: 'line-through', color: PT.ui600 }}>{rrpDisplay}</span>}
        </div>
        {p.rrp && p.rrp.hint && save > 0 && (
          <div style={{ fontSize: 11, color: '#509e27', fontWeight: 600 }}>
            {(lang === 'sv' ? 'Spara' : 'Save')} {lang === 'sv' ? `${save} kr` : `€${save}`} {p.rrp.hint && <span style={{ color: PT.ui600, fontWeight: 400 }}>vs {p.rrp.hint}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

window.ProductVisual = ProductVisual;
window.ProductTile = ProductTile;
