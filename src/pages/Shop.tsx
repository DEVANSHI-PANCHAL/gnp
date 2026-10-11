import { useMemo, useState } from 'react'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [filter, setFilter] = useState<'all' | (typeof categories)[number]['id']>('all')
  const list = useMemo(
    () => (filter === 'all' ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div className="page">
      <header className="page-hero">
        <img src="/logo-stamp.svg" alt="" className="page-stamp" />
        <h1>Shop</h1>
        <p>Hand-tied hampers for birthdays, festivals, clients, and quiet thank-yous.</p>
      </header>
      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={filter === c.id ? 'active' : ''}
            onClick={() => setFilter(c.id)}
          >
            {c.title}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
