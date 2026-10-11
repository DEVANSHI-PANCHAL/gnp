import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="quick-view">Quick View</span>
      </Link>
      <h3>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="price">{formatPrice(product.price)}</p>
      <div className="qty-row">
        <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrement">
          −
        </button>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
          aria-label="Quantity"
        />
        <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increment">
          +
        </button>
      </div>
      <button type="button" className="add-cart" onClick={() => add(product, qty)}>
        Add to Cart
      </button>
    </article>
  )
}
