import { useRef } from 'react'
import type { Product } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductSlider({
  title,
  products,
}: {
  title: string
  products: Product[]
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="slider-section">
      <div className="slider-head">
        <h2>{title}</h2>
        <div className="slider-nav">
          <button type="button" aria-label="Previous Product" onClick={() => scrollBy(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next Product" onClick={() => scrollBy(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="slider-track" ref={scroller}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
