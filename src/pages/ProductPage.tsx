import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { formatPrice, products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { add } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) return <Navigate to="/shop" replace />

  return (
    <div className="page product-page">
      <Link to="/shop" className="back">
        ← Back to shop
      </Link>
      <div className="product-layout">
        <img src={product.image} alt={product.name} />
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="price lg">{formatPrice(product.price)}</p>
          <p>{product.description}</p>
          <div className="qty-row">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              −
            </button>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
            />
            <button type="button" onClick={() => setQty((q) => q + 1)}>
              +
            </button>
          </div>
          <button type="button" className="add-cart" onClick={() => add(product, qty)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
