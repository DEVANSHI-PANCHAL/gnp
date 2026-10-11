export type PackId =
  | 'pvc'
  | 'eco'
  | 'mint'
  | 'peach'
  | 'kappa-green'
  | 'kappa-floral'

export type HamperItem = {
  id: string
  name: string
  detail: string
  price: number
  image: string
  cutout: string
  group: 'treats' | 'festive' | 'extras'
  /** Footprint on the pack floor, in centimetres. */
  w: number
  h: number
  unit?: 'each'
}

export const packs: {
  id: PackId
  name: string
  blurb: string
  image: string
  preview: string
  price: number | null
  /** Interior floor in cm (width × length). */
  floorW: number
  floorH: number
  sizeLabel: string
  placeItems?: boolean
}[] = [
  {
    id: 'pvc',
    name: 'PVC frosted bag',
    blurb: 'Frosted bag with a burgundy handle and gold bow. 8 × 9 × 4 in.',
    image: '/products/pvc-bag-pack.jpg',
    preview: '/products/pvc-bag-brand.jpg',
    price: 150,
    floorW: 8 * 2.54,
    floorH: 9 * 2.54,
    sizeLabel: '8 × 9 × 4 in',
  },
  {
    id: 'eco',
    name: 'Eco-friendly box',
    blurb: 'Corrugated petal craft hamper box. 6 × 6 × 3 in.',
    image: '/products/eco-petal-box-pack.jpg',
    preview: '/products/eco-petal-box-pack.jpg',
    price: null,
    floorW: 6 * 2.54,
    floorH: 6 * 2.54,
    sizeLabel: '6 × 6 × 3 in',
    placeItems: false,
  },
  {
    id: 'mint',
    name: 'Mint Diwali box',
    blurb: 'Corrugated mint hamper mailer. 6 × 6 × 3 in.',
    image: '/products/mint-diwali-box-pack.jpg',
    preview: '/products/mint-diwali-box-pack.jpg',
    price: null,
    floorW: 6 * 2.54,
    floorH: 6 * 2.54,
    sizeLabel: '6 × 6 × 3 in',
    placeItems: false,
  },
  {
    id: 'peach',
    name: 'Peach Diwali box',
    blurb: 'Corrugated peach hamper mailer. 6 × 6 × 3 in.',
    image: '/products/peach-diwali-box-pack.jpg',
    preview: '/products/peach-diwali-box-pack.jpg',
    price: null,
    floorW: 6 * 2.54,
    floorH: 6 * 2.54,
    sizeLabel: '6 × 6 × 3 in',
    placeItems: false,
  },
  {
    id: 'kappa-green',
    name: 'Green Floral Box',
    blurb: 'Premium green floral window box with a matching dori bag.',
    image: '/products/kappa-green-pack.jpg',
    preview: '/products/kappa-green-pack.jpg',
    price: null,
    floorW: 10 * 2.54,
    floorH: 8 * 2.54,
    sizeLabel: 'Box + carry bag',
    placeItems: false,
  },
  {
    id: 'kappa-floral',
    name: 'White Floral Box',
    blurb: 'Premium ivory floral window box with a matching dori bag.',
    image: '/products/kappa-floral-pack.jpg',
    preview: '/products/kappa-floral-pack.jpg',
    price: null,
    floorW: 10 * 2.54,
    floorH: 8 * 2.54,
    sizeLabel: 'Box + carry bag',
    placeItems: false,
  },
]

export const hamperItems: HamperItem[] = [
  {
    id: 'trail-jar',
    name: 'Trail mix in glass jar',
    detail: '250 gm',
    price: 250,
    image: '/products/trail-mix-jar-ai.jpg',
    cutout: '/products/trail-mix-jar-cut.png',
    group: 'treats',
    w: 3 * 2.54,
    h: 3 * 2.54,
  },
  {
    id: 'trail-potli',
    name: 'Trail mix in jute potli',
    detail: '150 gm',
    price: 150,
    image: '/products/jute-potli-mix-ai.jpg',
    cutout: '/products/jute-potli-mix-cut.png',
    group: 'treats',
    w: 10,
    h: 10,
  },
  {
    id: 'cadbury',
    name: 'Cadbury Celebrations box',
    detail: 'Assorted pack',
    price: 50,
    image: '/products/cadbury-ai.jpg',
    cutout: '/products/cadbury-cut.png',
    group: 'treats',
    w: 7.5,
    h: 13,
  },
  {
    id: 'choco-jar',
    name: 'Premium chocolates in glass jar',
    detail: 'Glass jar',
    price: 120,
    image: '/products/chocolates-jar-ai.jpg',
    cutout: '/products/chocolates-jar-cut.png',
    group: 'treats',
    w: 3 * 2.54,
    h: 3 * 2.54,
  },
  {
    id: 'choco-potli',
    name: 'Premium chocolates in jute potli',
    detail: 'Jute potli',
    price: 100,
    image: '/products/jute-potli-choco-ai.jpg',
    cutout: '/products/jute-potli-choco-cut.png',
    group: 'treats',
    w: 10,
    h: 10,
  },
  {
    id: 'urli',
    name: 'Big urli candle gold',
    detail: 'Set',
    price: 150,
    image: '/products/urli-candle-ai.jpg',
    cutout: '/products/urli-candle-cut.png',
    group: 'festive',
    w: 18,
    h: 18,
  },
  {
    id: 'holder',
    name: 'Small gold candle holder',
    detail: 'Lotus holder',
    price: 100,
    image: '/products/candle-holder-ai.jpg',
    cutout: '/products/candle-holder-cut.png',
    group: 'festive',
    w: 11,
    h: 11,
  },
  {
    id: 'scent',
    name: 'Small scented candle',
    detail: 'Tin',
    price: 80,
    image: '/products/scented-candle-ai.jpg',
    cutout: '/products/scented-candle-cut.png',
    group: 'festive',
    w: 6,
    h: 6,
  },
  {
    id: 'card',
    name: 'Customised Diwali card',
    detail: 'Handwritten',
    price: 20,
    image: '/products/diwali-card-ai.jpg',
    cutout: '/products/diwali-card-cut.png',
    group: 'extras',
    w: 14,
    h: 10,
  },
  {
    id: 'ferrero',
    name: 'Ferrero Rocher chocolate',
    detail: '8 pieces',
    price: 160,
    image: '/products/ferrero-original.jpg',
    cutout: '/products/ferrero-original.jpg',
    group: 'treats',
    w: 19,
    h: 9.5,
  },
  {
    id: 'kaju-katli',
    name: 'Kaju katli box',
    detail: '200 gm',
    price: 280,
    image: '/products/kaju-katli-200.jpg',
    cutout: '/products/kaju-katli-200.jpg',
    group: 'treats',
    w: 16,
    h: 11,
  },
  {
    id: 'diya-s',
    name: 'Clay diya small',
    detail: 'Each',
    price: 5,
    image: '/products/clay-diya-small-ai.jpg',
    cutout: '/products/clay-diya-small-cut.png',
    group: 'festive',
    w: 4,
    h: 4,
    unit: 'each',
  },
  {
    id: 'diya-m',
    name: 'Clay diya medium',
    detail: 'Each',
    price: 10,
    image: '/products/clay-diya-medium-brand.jpg',
    cutout: '/products/clay-diya-medium-cut.png',
    group: 'festive',
    w: 7,
    h: 7,
    unit: 'each',
  },
  {
    id: 'diya-c',
    name: 'Colorful clay diya',
    detail: 'Each',
    price: 25,
    image: '/products/colorful-diya-ai.jpg',
    cutout: '/products/colorful-diya-cut.png',
    group: 'festive',
    w: 8,
    h: 8,
    unit: 'each',
  },
  {
    id: 'diya-g',
    name: 'Gold premium ceramic diya',
    detail: 'Each',
    price: 35,
    image: '/products/ceramic-diya-ai.jpg',
    cutout: '/products/ceramic-diya-cut.png',
    group: 'festive',
    w: 9,
    h: 7,
    unit: 'each',
  },
]

/** Website hides rupees for now. Client list: /catalog.html */
export const SHOW_PRICES = false

export const INSTAGRAM = 'https://www.instagram.com/gifts.n.presents/'
export const INSTAGRAM_DM = 'https://ig.me/m/gifts.n.presents'
export const EMAIL = 'thegnpstore@gmail.com'

export type ReadyHamper = {
  name: string
  kicker: string
  blurb: string
  image: string
  sizeLabel: string
  soldOut?: boolean
  contents: { name: string; detail: string; image: string }[]
}

export const celebrationBag: ReadyHamper = {
  name: 'The Celebration Bag',
  kicker: 'Corporate Diwali hamper',
  blurb:
    'A ready-made festive bag for teams, clients and bulk orders. Frosted PVC with our burgundy handle, gold bow and a flower twig. Ask for a quote on quantity and branding.',
  image: '/diwali-pvc-bag.jpg?v=bow',
  sizeLabel: '8 × 9 × 4 in',
  contents: [
    {
      name: 'Frosted bag with burgundy handle',
      detail: 'Gold satin bow and flower twig. 8 × 9 × 4 in.',
      image: '/products/pvc-bag-brand.jpg',
    },
    {
      name: 'Trail mix in glass jar',
      detail: '250 gm, gold-lid jar',
      image: '/products/trail-mix-jar-ai.jpg',
    },
    {
      name: 'Premium chocolates in glass jar',
      detail: 'Foil-wrapped chocolates, gold-lid jar',
      image: '/products/chocolates-jar-ai.jpg',
    },
    {
      name: 'Burgundy tissue',
      detail: 'Scrunched gift tissue inside the bag',
      image: '/diwali-pvc-bag.jpg?v=bow',
    },
    {
      name: 'Big gold urli candle holder',
      detail: 'Six-diya set, placed standing in the bag',
      image: '/products/urli-candle-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Placed outside the bag, handwritten option for bulk',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

export const signatureBox: ReadyHamper = {
  name: 'The Signature Box',
  kicker: 'Corporate Diwali hamper',
  blurb:
    'Our burgundy magnetic box, packed for teams and clients. Two gold-lid jars, a pair of gold diyas, and a Diwali card tucked in the lid. This hamper is sold out for now.',
  image: '/diwali-signature-box.jpg',
  sizeLabel: '8 × 11 × 3.5 in',
  soldOut: true,
  contents: [
    {
      name: 'Burgundy magnetic box',
      detail: 'Signature cardboard box. 8 × 11 × 3.5 in.',
      image: '/products/cardboard-box-brand.jpg',
    },
    {
      name: 'Trail mix in glass jar',
      detail: '250 gm, gold-lid jar',
      image: '/products/trail-mix-jar-ai.jpg',
    },
    {
      name: 'Premium chocolates in glass jar',
      detail: '250 gm, gold-lid jar',
      image: '/products/chocolates-jar-ai.jpg',
    },
    {
      name: 'Gold ceramic diyas',
      detail: 'Pair of ornate gold diyas',
      image: '/products/ceramic-diya-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Tucked into the inner lid',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

export const littleJoyBox: ReadyHamper = {
  name: 'The GNP Little Joy Box',
  kicker: 'Corporate Diwali hamper',
  blurb:
    'A White Floral Box with matching dori bag. Inside: trail-mix potli, Celebrations chocolates, a scented candle, a gold lotus holder and a Diwali card. Ask for a quote on quantity and branding.',
  image: '/diwali-little-joy-box.jpg',
  sizeLabel: 'White Floral Box + carry bag',
  contents: [
    {
      name: 'White Floral Box',
      detail: 'Premium ivory floral window box and matching dori bag.',
      image: '/products/kappa-floral-pack.jpg',
    },
    {
      name: 'Trail mix in jute potli',
      detail: '150 gm, small potli',
      image: '/products/jute-potli-mix-ai.jpg',
    },
    {
      name: 'Cadbury Celebrations',
      detail: 'Assorted chocolate pack',
      image: '/products/cadbury-ai.jpg',
    },
    {
      name: 'Small scented candle',
      detail: 'Mandala tin',
      image: '/products/scented-candle-ai.jpg',
    },
    {
      name: 'Small gold candle holder',
      detail: 'Lotus tea-light holder',
      image: '/products/candle-holder-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Tucked into the inner lid',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

/** 6 × 6 × 3 in floor is 15.2 cm. Jars (3 in tall) and the 18 cm urli do not fit. */
export const mintMailerBox: ReadyHamper = {
  name: 'The Mint Diwali Box',
  kicker: '6 × 6 × 3 in hamper',
  blurb:
    'A mint 6 × 6 × 3 in mailer with Celebrations, a mandala tin candle, one gold ceramic diya, and a Diwali card on top.',
  image: '/diwali-mint-box.jpg',
  sizeLabel: '6 × 6 × 3 in',
  contents: [
    {
      name: 'Mint Diwali box',
      detail: 'Corrugated mint mailer. 6 × 6 × 3 in.',
      image: '/products/mint-diwali-box-pack.jpg',
    },
    {
      name: 'Cadbury Celebrations',
      detail: 'Assorted pack, 7.5 × 13 cm, laid flat',
      image: '/products/cadbury-ai.jpg',
    },
    {
      name: 'Small scented candle',
      detail: 'Mandala tin, 6 cm',
      image: '/products/scented-candle-ai.jpg',
    },
    {
      name: 'Gold premium ceramic diya',
      detail: 'One diya, 9 × 7 cm',
      image: '/products/ceramic-diya-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Rests on top, A6',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

export const peachMailerBox: ReadyHamper = {
  name: 'The Peach Diwali Box',
  kicker: '6 × 6 × 3 in hamper',
  blurb:
    'A peach 6 × 6 × 3 in mailer with a chocolate potli, two small clay diyas, a mini scented candle, and a Diwali card on top.',
  image: '/diwali-peach-box.jpg?v=candle',
  sizeLabel: '6 × 6 × 3 in',
  contents: [
    {
      name: 'Peach Diwali box',
      detail: 'Corrugated peach mailer. 6 × 6 × 3 in.',
      image: '/products/peach-diwali-box-pack.jpg',
    },
    {
      name: 'Premium chocolates in jute potli',
      detail: 'Jute potli, 10 cm',
      image: '/products/jute-potli-choco-ai.jpg',
    },
    {
      name: 'Clay diya small',
      detail: 'Two diyas, 4 cm each',
      image: '/products/clay-diya-small-ai.jpg',
    },
    {
      name: 'Mini scented candle',
      detail: 'Mandala tin, 6 cm',
      image: '/products/scented-candle-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Rests on top, A6',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

export const ecoPetalHamper: ReadyHamper = {
  name: 'The Eco Petal Box',
  kicker: '6 × 6 × 3 in hamper',
  blurb:
    'The kraft petal box (6 × 6 × 3 in) with a trail-mix potli, two small clay diyas, and a Diwali card on top.',
  image: '/diwali-eco-box.jpg',
  sizeLabel: '6 × 6 × 3 in',
  contents: [
    {
      name: 'Eco-friendly petal box',
      detail: 'Corrugated kraft petal box. 6 × 6 × 3 in.',
      image: '/products/eco-petal-box-pack.jpg',
    },
    {
      name: 'Trail mix in jute potli',
      detail: '150 gm, 10 cm potli',
      image: '/products/jute-potli-mix-ai.jpg',
    },
    {
      name: 'Clay diya small',
      detail: 'Two diyas, 4 cm each',
      image: '/products/clay-diya-small-ai.jpg',
    },
    {
      name: 'Customised Diwali greeting card',
      detail: 'Rests on top, A6',
      image: '/products/diwali-card-ai.jpg',
    },
  ],
}

export type PlacedPiece = {
  key: string
  cutout: string
  left: number
  top: number
  width: number
  height: number
}

export function layoutHamper(
  pieces: { key: string; cutout: string; w: number; h: number }[],
  floorW: number,
  floorH: number,
): { placed: PlacedPiece[]; overflow: boolean } {
  const gap = 0.4
  const sorted = [...pieces].sort((a, b) => b.w * b.h - a.w * a.h)
  let x = 0
  let y = 0
  let rowH = 0
  const placed: PlacedPiece[] = []

  for (const p of sorted) {
    let w = p.w
    let h = p.h
    if (w > floorW && h <= floorW) {
      const t = w
      w = h
      h = t
    }
    if (w > floorW) {
      const s = (floorW * 0.97) / w
      w *= s
      h *= s
    }
    if (h > floorH) {
      const s = (floorH * 0.97) / h
      w *= s
      h *= s
    }
    if (x > 0 && x + w > floorW) {
      x = 0
      y += rowH + gap
      rowH = 0
    }
    placed.push({
      key: p.key,
      cutout: p.cutout,
      left: (x / floorW) * 100,
      top: (y / floorH) * 100,
      width: (w / floorW) * 100,
      height: (h / floorH) * 100,
    })
    x += w + gap
    rowH = Math.max(rowH, h)
  }

  return { placed, overflow: y + rowH > floorH + 0.15 }
}
