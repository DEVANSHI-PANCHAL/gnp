import { useState } from 'react'

type Props = {
  images: string[]
  alt: string
  onSelect?: () => void
}

export default function HamperCarousel({ images, alt, onSelect }: Props) {
  const [index, setIndex] = useState(0)
  const last = images.length
  if (!last) return null

  const go = (delta: number, e?: { stopPropagation: () => void; preventDefault: () => void }) => {
    e?.stopPropagation()
    e?.preventDefault()
    setIndex((i) => (i + delta + last) % last)
  }

  return (
    <div className="hamper-carousel">
      <img src={images[index]} alt={alt} onClick={onSelect} />
      {last > 1 && (
        <>
          <button
            type="button"
            className="hamper-carousel-nav prev"
            onClick={(e) => go(-1, e)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="hamper-carousel-nav next"
            onClick={(e) => go(1, e)}
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="hamper-carousel-dots">
            {images.map((_, d) => (
              <button
                key={d}
                type="button"
                className={d === index ? 'on' : ''}
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(d)
                }}
                aria-label={`Photo ${d + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
