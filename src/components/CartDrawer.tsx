import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function CartDrawer() {
  const { items, total, setQty, remove, clear, open, setOpen } = useCart()

  if (!open) return null

  return (
    <div className="drawer-backdrop" onClick={() => setOpen(false)}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} aria-label="Cart">
        <header>
          <h2>Your hamper cart</h2>
          <button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="Close cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7l10 10M17 7L7 17" />
            </svg>
          </button>
        </header>
        {items.length === 0 ? (
          <p className="empty">Your cart is empty. Add a little joy.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <Link to={`/product/${item.id}`} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                    <p>{formatPrice(item.price)}</p>
                    <div className="qty-row compact">
                      <button type="button" onClick={() => setQty(item.id, item.qty - 1)}>
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => setQty(item.id, item.qty + 1)}>
                        +
                      </button>
                    </div>
                    <button type="button" className="text-btn" onClick={() => remove(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <footer>
              <p className="cart-total">
                Subtotal <strong>{formatPrice(total)}</strong>
              </p>
              <button type="button" className="btn-dark full" onClick={clear}>
                Checkout (demo)
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
