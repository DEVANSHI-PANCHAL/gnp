import { useEffect } from 'react'
import { EMAIL, INSTAGRAM_DM, type ReadyHamper } from '../data/hamper'
import HamperCarousel from './HamperCarousel'

type Props = {
  product: ReadyHamper | null
  onClose: () => void
}

export default function ReadyHamperSheet({ product, onClose }: Props) {
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  if (!product) return null

  const quoteLines = product.contents.map((item) => `• ${item.name}: ${item.detail}`)
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Quote request: ${product.name}`,
  )}&body=${encodeURIComponent(
    `Hi Gifts N Presents,\n\nI would like a quote for ${product.name} (corporate Diwali hamper).\n\nWhat's inside:\n${quoteLines.join('\n')}\n\nQuantity:\nCompany / team:\nDelivery city:\n\nThank you.\n`,
  )}`
  const dmHref = `${INSTAGRAM_DM}?text=${encodeURIComponent(
    `Hi! I would like a quote for ${product.name} for corporate Diwali gifting.`,
  )}`
  const titleId = `${product.name.toLowerCase().replace(/\s+/g, '-')}-title`

  return (
    <div className="sheet-backdrop" onClick={onClose} role="presentation">
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="sheet-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="sheet-grid">
          {product.images && product.images.length > 1 ? (
            <HamperCarousel images={product.images} alt={product.name} />
          ) : (
            <img src={product.image} alt={product.name} />
          )}
          <div className="sheet-copy">
            <p className="hamper-kicker">{product.kicker}</p>
            <h2 id={titleId}>{product.name}</h2>
            <p className="sheet-lead">{product.blurb}</p>
            <p className="hamper-scale">Size: {product.sizeLabel}</p>

            <h3>What’s inside</h3>
            <ul className="sheet-items">
              {product.contents.map((item) => (
                <li key={item.name}>
                  <img src={item.image} alt="" />
                  <div>
                    <span>{item.name}</span>
                    <small>{item.detail}</small>
                  </div>
                </li>
              ))}
            </ul>

            {product.soldOut ? (
              <p className="sheet-quote-note sold-out-note">Sold out. Ask us about other Diwali hampers.</p>
            ) : (
              <>
                <p className="sheet-quote-note">Bulk and branding quoted on request.</p>
                <div className="hero-actions hamper-enquire">
                  <a className="btn-pink" href={dmHref} target="_blank" rel="noopener noreferrer">
                    Get quote on Instagram
                  </a>
                  <a className="btn-outline" href={mailHref}>
                    Email for a quote
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
