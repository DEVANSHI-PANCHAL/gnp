import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = Product & { qty: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  add: (product: Product, qty?: number) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
  open: boolean
  setOpen: (v: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)

  const value = useMemo(() => {
    const add = (product: Product, qty = 1) => {
      setItems((prev) => {
        const found = prev.find((i) => i.id === product.id)
        if (found) {
          return prev.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + qty } : i,
          )
        }
        return [...prev, { ...product, qty }]
      })
      setOpen(true)
    }

    const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))
    const setQty = (id: string, qty: number) => {
      if (qty < 1) return remove(id)
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
    }
    const clear = () => setItems([])
    const count = items.reduce((s, i) => s + i.qty, 0)
    const total = items.reduce((s, i) => s + i.price * i.qty, 0)

    return { items, count, total, add, remove, setQty, clear, open, setOpen }
  }, [items, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
