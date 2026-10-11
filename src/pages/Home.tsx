import { useState } from 'react'
import HamperBuilder from '../components/HamperBuilder'
import ReadyHamperSheet from '../components/ReadyHamperSheet'
import Seo from '../components/Seo'
import {
  celebrationBag,
  ecoPetalHamper,
  EMAIL,
  INSTAGRAM,
  littleJoyBox,
  mintMailerBox,
  peachMailerBox,
  signatureBox,
  type ReadyHamper,
} from '../data/hamper'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '../site'

const instagram = [
  { src: '/diwali-pvc-bag.jpg?v=bow', alt: 'The Celebration Bag Diwali hamper' },
  { src: '/diwali-little-joy-box.jpg?v=floral', alt: 'The GNP Little Joy Box in a White Floral Box' },
  { src: '/diwali-mint-box.jpg', alt: 'The Mint Diwali Box hamper' },
  { src: '/diwali-peach-box.jpg?v=candle', alt: 'The Peach Diwali Box hamper' },
  { src: '/diwali-eco-box.jpg', alt: 'The Eco Petal Box hamper' },
  { src: '/diwali-signature-box.jpg', alt: 'The Signature Box Diwali hamper' },
]

export default function Home() {
  const [openHamper, setOpenHamper] = useState<ReadyHamper | null>(null)

  return (
    <>
      <Seo
        title={`${SITE_NAME} | Diwali Gift Hampers in Ahmedabad`}
        description={DEFAULT_DESCRIPTION}
        path="/"
      />
      <section className="hero">
        <img
          src="/hero.jpg"
          alt="Burgundy gift box with a gold ribbon"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-copy">
          <h1>Make Every Moment Memorable.</h1>
        </div>
      </section>

      <section className="banner diwali">
        <span className="confetti c1" />
        <span className="confetti c2" />
        <span className="confetti c3" />
        <h2>Diwali hampers</h2>
        <div className="diwali-grid">
          <button
            type="button"
            className="diwali-card"
            onClick={() => setOpenHamper(celebrationBag)}
          >
            <img
              src="/diwali-pvc-bag.jpg?v=bow"
              alt="The Celebration Bag with trail mix, chocolates, urli candle and Diwali card"
            />
            <p>The Celebration Bag</p>
          </button>
          <button type="button" className="diwali-card sold-out" onClick={() => setOpenHamper(signatureBox)}>
            <span className="sold-out-badge">Sold out</span>
            <img
              src="/diwali-signature-box.jpg"
              alt="The Signature Box with trail mix, chocolates, gold diyas and Diwali card"
            />
            <p>The Signature Box</p>
          </button>
          <button type="button" className="diwali-card" onClick={() => setOpenHamper(littleJoyBox)}>
            <img
              src="/diwali-little-joy-box.jpg?v=floral"
              alt="The GNP Little Joy Box in a White Floral Box"
            />
            <p>The GNP Little Joy Box</p>
          </button>
          <button type="button" className="diwali-card" onClick={() => setOpenHamper(mintMailerBox)}>
            <img
              src="/diwali-mint-box.jpg"
              alt="Mint 6 by 6 box with Celebrations, candle, gold diya and Diwali card"
            />
            <p>The Mint Diwali Box</p>
          </button>
          <button type="button" className="diwali-card" onClick={() => setOpenHamper(peachMailerBox)}>
            <img
              src="/diwali-peach-box.jpg?v=candle"
              alt="Peach 6 by 6 box with chocolate potli, clay diyas, mini scented candle and Diwali card"
            />
            <p>The Peach Diwali Box</p>
          </button>
          <button type="button" className="diwali-card" onClick={() => setOpenHamper(ecoPetalHamper)}>
            <img
              src="/diwali-eco-box.jpg"
              alt="Eco petal 6 by 6 box with trail mix potli, clay diyas and Diwali card"
            />
            <p>The Eco Petal Box</p>
          </button>
        </div>
      </section>

      <HamperBuilder />

      <ReadyHamperSheet product={openHamper} onClose={() => setOpenHamper(null)} />

      {/* {categories.map((cat) => (
        <ProductSlider
          key={cat.id}
          title={cat.title}
          products={products.filter((p) => p.category === cat.id)}
        />
      ))} */}

      <section className="instagram">
        <h2>Follow Us on Instagram</h2>
        <p className="insta-handle">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            @gifts.n.presents
          </a>
        </p>
        <p className="insta-email">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="insta-grid">
          {instagram.map((shot) => (
            <a key={shot.src} href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
