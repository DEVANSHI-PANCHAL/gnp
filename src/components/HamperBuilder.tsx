import { useMemo, useState } from 'react'
import {
  EMAIL,
  INSTAGRAM,
  SHOW_PRICES,
  hamperItems,
  layoutHamper,
  packs,
  type HamperItem,
  type PackId,
} from '../data/hamper'

type QtyMap = Record<string, number>
type Filter = 'all' | HamperItem['group']

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'View all' },
  { id: 'treats', label: 'Treats' },
  { id: 'festive', label: 'Diyas & candles' },
  { id: 'extras', label: 'Notes' },
]

function rupee(n: number) {
  return `₹${n.toLocaleString('en-IN')}`
}

function packPriceLabel(price: number | null) {
  return price == null ? 'Quote' : rupee(price)
}

function enquireBody(packName: string, lines: string[], total: number) {
  const totalLine = SHOW_PRICES ? `\n\nTotal: ${rupee(total)}\n` : '\n'
  return encodeURIComponent(
    `Hi Gifts N Presents,\n\nI would like to order a custom Diwali hamper.\n\nPackaging: ${packName}\n${lines.join('\n')}${totalLine}`,
  )
}

export default function HamperBuilder() {
  const [packId, setPackId] = useState<PackId | null>(null)
  const [qty, setQty] = useState<QtyMap>({})
  const [filter, setFilter] = useState<Filter>('all')

  const pack = packs.find((p) => p.id === packId) ?? null
  const chosen = hamperItems.filter((item) => (qty[item.id] ?? 0) > 0)
  const visible = hamperItems.filter((item) => filter === 'all' || item.group === filter)
  const pieceCount = chosen.reduce((n, item) => n + (qty[item.id] ?? 0), 0)

  const packPrice = pack?.price ?? 0
  const itemsTotal = chosen.reduce((sum, item) => sum + item.price * (qty[item.id] ?? 0), 0)
  const total = packPrice + itemsTotal

  const layout = useMemo(() => {
    if (!pack) return { placed: [], overflow: false }
    const pieces = chosen.flatMap((item) => {
      const n = Math.min(qty[item.id] ?? 0, item.unit === 'each' ? 12 : 4)
      return Array.from({ length: n }, (_, i) => ({
        key: `${item.id}-${i}`,
        cutout: item.cutout,
        w: item.w,
        h: item.h,
      }))
    })
    return layoutHamper(pieces, pack.floorW, pack.floorH)
  }, [chosen, pack, qty])

  const setItemQty = (item: HamperItem, next: number) => {
    const value = Math.max(0, Math.min(item.unit === 'each' ? 24 : 6, next))
    setQty((prev) => ({ ...prev, [item.id]: value }))
  }

  const summaryLines = [
    pack
      ? SHOW_PRICES
        ? `• ${pack.name}: ${packPriceLabel(pack.price)}`
        : `• ${pack.name}`
      : '',
    ...chosen.map((item) => {
      const n = qty[item.id] ?? 0
      return SHOW_PRICES ? `• ${item.name} × ${n}: ${rupee(item.price * n)}` : `• ${item.name} × ${n}`
    }),
  ].filter(Boolean)

  const mailHref = pack
    ? `mailto:${EMAIL}?subject=${encodeURIComponent('Custom Diwali hamper')}&body=${enquireBody(pack.name, summaryLines, total)}`
    : `mailto:${EMAIL}`

  return (
    <section className="builder" id="create-hamper">
      <div className="builder-hero">
        <p className="hamper-kicker">Build a hamper</p>
        <h2>Create your hamper</h2>
        <p className="hamper-lead">
          Choose a pack, add treats and diyas, then send us the list. Built for Diwali gifting.
        </p>
        <ol className="builder-steps">
          <li className={!packId ? 'on' : 'done'}>
            <span>1</span> Pack
          </li>
          <li className={packId && pieceCount === 0 ? 'on' : packId ? 'done' : ''}>
            <span>2</span> Fill
          </li>
          <li className={pieceCount > 0 ? 'on' : ''}>
            <span>3</span> Enquire
          </li>
        </ol>
      </div>

      <div className="builder-shell">
        <div className="builder-catalog">
          <p className="hamper-kicker">1. Choose packaging</p>
          <div className="pack-row">
            {packs.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`pack-card${packId === p.id ? ' on' : ''}`}
                onClick={() => setPackId(p.id)}
              >
                <img src={p.image} alt="" />
                <span>
                  {p.name}
                  {/* Prices are in /catalog.html for clients */}
                  {SHOW_PRICES && <em>{packPriceLabel(p.price)}</em>}
                </span>
                <small>{p.blurb}</small>
              </button>
            ))}
          </div>

          <div className="catalog-head">
            <p className="hamper-kicker">2. Add items</p>
            <div className="pill-row" role="tablist" aria-label="Item categories">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`pill${filter === f.id ? ' on' : ''}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {!packId && (
            <p className="hamper-lock">Pick a bag or box first, then add treats and diyas.</p>
          )}
          <div className={`item-grid${!packId ? ' is-locked' : ''}`}>
            {visible.map((item) => {
              const n = qty[item.id] ?? 0
              return (
                <article key={item.id} className={`item-card${n ? ' on' : ''}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-body">
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                    {SHOW_PRICES && (
                      <strong>
                        {rupee(item.price)}
                        {item.unit === 'each' ? ' each' : ''}
                      </strong>
                    )}
                    {n === 0 ? (
                      <button
                        type="button"
                        className="add-btn"
                        disabled={!packId}
                        onClick={() => setItemQty(item, 1)}
                      >
                        Add
                      </button>
                    ) : (
                      <div className="item-qty">
                        <button type="button" onClick={() => setItemQty(item, n - 1)} aria-label="Remove one">
                          −
                        </button>
                        <span>{n}</span>
                        <button type="button" onClick={() => setItemQty(item, n + 1)} aria-label="Add one">
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <aside className="builder-tray">
          <div className="tray-card">
            <div className="tray-title">
              <h3>Your hamper</h3>
              {pieceCount > 0 && <span className="tray-badge">{pieceCount}</span>}
            </div>

            {pack ? (
              <div className={`stage stage-${pack.id}`}>
                <img src={pack.preview} alt={pack.name} className="stage-pack" />
                {pack.placeItems !== false && layout.placed.length > 0 && (
                  <ul className="stage-floor">
                    {layout.placed.map((piece) => (
                      <li
                        key={piece.key}
                        style={{
                          left: `${piece.left}%`,
                          top: `${piece.top}%`,
                          width: `${piece.width}%`,
                          height: `${piece.height}%`,
                        }}
                      >
                        <img src={piece.cutout} alt="" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="stage stage-empty">
                <p>Your pack preview will land here</p>
              </div>
            )}

            {pack && <p className="hamper-scale">Size: {pack.sizeLabel}</p>}
            {layout.overflow && (
              <p className="hamper-warn">This mix is tight for this pack. Try fewer large pieces.</p>
            )}

            <ul className="tray-lines">
              {pack && (
                <li>
                  <img src={pack.image} alt="" />
                  <div>
                    <span>{pack.name}</span>
                    <small>{pack.sizeLabel}</small>
                  </div>
                  {SHOW_PRICES && <em>{packPriceLabel(pack.price)}</em>}
                </li>
              )}
              {chosen.map((item) => (
                <li key={item.id}>
                  <img src={item.cutout} alt="" />
                  <div>
                    <span>
                      {item.name} × {qty[item.id]}
                    </span>
                    <button type="button" className="text-btn" onClick={() => setItemQty(item, 0)}>
                      Remove
                    </button>
                  </div>
                  {SHOW_PRICES && <em>{rupee(item.price * (qty[item.id] ?? 0))}</em>}
                </li>
              ))}
            </ul>

            {SHOW_PRICES && (
              <div className="hamper-total">
                <span>Total</span>
                <strong>{rupee(total)}</strong>
              </div>
            )}
            <div className="hero-actions hamper-enquire">
              <a
                className={`btn-pink${pack && pieceCount ? '' : ' is-disabled'}`}
                href={pack && pieceCount ? INSTAGRAM : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!pack || !pieceCount}
              >
                Enquire on Instagram
              </a>
              <a className="btn-outline" href={mailHref}>
                Email this hamper
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
