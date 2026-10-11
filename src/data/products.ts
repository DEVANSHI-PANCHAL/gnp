export type Product = {
  id: string
  name: string
  price: number
  category: 'celebration' | 'gourmet' | 'corporate'
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 'celebration-bloom',
    name: 'Celebration Bloom Hamper',
    price: 2499,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    description:
      'A festive hamper of artisan chocolates, sparkling cider, dried blooms, and a handwritten note. Ready for birthdays and big news.',
  },
  {
    id: 'birthday-bliss',
    name: 'Birthday Bliss Basket',
    price: 1899,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    description:
      'Party-ready treats, confetti candles, and gourmet cookies wrapped in our signature burgundy ribbon.',
  },
  {
    id: 'luxe-wrap',
    name: 'Luxe Wrap Collection',
    price: 1299,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80',
    description:
      'Layered gift boxes with gold tissue, dried petals, and a keepsake ornament for unforgettable unwrapping.',
  },
  {
    id: 'sweet-surprise',
    name: 'Sweet Surprise Crate',
    price: 1599,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80',
    description:
      'A tower of truffles, macarons, and cocoa dusted almonds for anyone who loves a sugar-kissed moment.',
  },
  {
    id: 'new-baby',
    name: 'Welcome Baby Hamper',
    price: 2199,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    description:
      'Soft muslin, organic tea for new parents, and a tiny keepsake box to mark the first days at home.',
  },
  {
    id: 'festival-gold',
    name: 'Festival Gold Hamper',
    price: 3299,
    category: 'celebration',
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80',
    description:
      'Diwali and festive gifting with dry fruits, scented candles, and a gold-foiled hamper box.',
  },
  {
    id: 'gourmet-harvest',
    name: 'Gourmet Harvest Box',
    price: 2799,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description:
      'Cheese crackers, fruit preserves, honey, and roasted nuts curated for long lunches and slow evenings.',
  },
  {
    id: 'tea-hour',
    name: 'Afternoon Tea Hamper',
    price: 1699,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80',
    description:
      'Assam and chamomile tins, shortbread, and a linen napkin. A pause in a box.',
  },
  {
    id: 'chocolate-atelier',
    name: 'Chocolate Atelier Crate',
    price: 2099,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1606312619070-d48b4e809a91?auto=format&fit=crop&w=800&q=80',
    description:
      'Single-origin bars, salted caramels, and cocoa nibs from small-batch makers.',
  },
  {
    id: 'spa-unwind',
    name: 'Unwind & Spa Hamper',
    price: 2399,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    description:
      'Bath salts, soy candle, herbal infusion, and a silk eye mask for a restorative night in.',
  },
  {
    id: 'brunch-basket',
    name: 'Weekend Brunch Basket',
    price: 1999,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    description:
      'Specialty coffee, granola, jam, and a ceramic mug for a slow Sunday.',
  },
  {
    id: 'wine-pair',
    name: 'Wine & Nibble Pairing',
    price: 3499,
    category: 'gourmet',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description:
      'A bottle of sparkling grape, olive crackers, and dark chocolate, designed to share.',
  },
  {
    id: 'client-thanks',
    name: 'Client Thank-You Box',
    price: 2599,
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80',
    description:
      'Branded-ready corporate hamper with gourmet snacks and a custom card for clients and teams.',
  },
  {
    id: 'desk-delight',
    name: 'Desk Delight Kit',
    price: 1499,
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80',
    description:
      'Notebook, artisan coffee sachets, and a mini plant. A thoughtful onboarding or work-anniversary gift.',
  },
  {
    id: 'executive-gold',
    name: 'Executive Gold Hamper',
    price: 4999,
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    description:
      'Our most generous corporate collection: dry fruits, teas, chocolates, and a keepsake lacquer box.',
  },
  {
    id: 'team-cheer',
    name: 'Team Cheer Pack',
    price: 1199,
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80',
    description:
      'Individually wrapped treats perfect for bulk gifting across offices and events.',
  },
]

export const categories = [
  { id: 'celebration' as const, title: 'Celebration Hampers' },
  { id: 'gourmet' as const, title: 'Gourmet Treats' },
  { id: 'corporate' as const, title: 'Corporate Gifts' },
]

export function formatPrice(n: number) {
  return `₹${n.toLocaleString('en-IN')}`
}
