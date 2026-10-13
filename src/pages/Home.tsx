import { useState } from 'react'
import HamperBuilder from '../components/HamperBuilder'
import HamperCarousel from '../components/HamperCarousel'
import ReadyHamperSheet from '../components/ReadyHamperSheet'
import Seo from '../components/Seo'
import {
  celebrationBag,
  ecoPetalHamper,
  EMAIL,
  hamperV1,
  hamperV2,
  hamperV3,
  INSTAGRAM,
  mintMailerBox,
  peachMailerBox,
  signatureBox,
  signatureDuo,
  signatureTrio,
  type ReadyHamper,
} from '../data/hamper'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '../site'

const instagram = [
  { src: '/diwali-pvc-bag.jpg?v=bow', alt: 'Bloom Bag Diwali hamper' },
  { src: '/diwali-mint-box.jpg', alt: 'The Mint Diwali Box hamper' },
  { src: '/diwali-peach-box.jpg?v=candle', alt: 'The Peach Diwali Box hamper' },
  { src: '/diwali-eco-box.jpg', alt: 'The Eco Petal Box hamper' },
  { src: '/diwali-signature-box-closed.jpg', alt: 'The Signature Box with four gold-lid jars' },
  { src: '/diwali-signature-trio-closed.jpg', alt: 'The Signature Trio with three gold-lid jars' },
  { src: '/diwali-signature-duo-closed.jpg', alt: 'The Signature Duo with two gold-lid jars' },
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
        <h2>Hampers for Diwali</h2>
        <div className="diwali-collection">
          <div className="diwali-motifs" aria-hidden="true">
            <img className="motif lg left" src="/diwali-mandala.png" alt="" />
            <img className="motif sm right" src="/diwali-mandala.png" alt="" />
          </div>
          <h3>The Festive Bloom Collection</h3>
          <div className="diwali-grid diwali-grid-four">
            <div className="diwali-card">
              <HamperCarousel
                images={hamperV1.images ?? [hamperV1.image]}
                alt="Bloom 01 White Floral Box closed with carry bag, and packed open"
                onSelect={() => setOpenHamper(hamperV1)}
              />
              <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(hamperV1)}>
                Bloom 01
              </button>
            </div>
            <div className="diwali-card">
              <HamperCarousel
                images={hamperV3.images ?? [hamperV3.image]}
                alt="Bloom 03 Green Floral Box closed with carry bag, and packed open"
                onSelect={() => setOpenHamper(hamperV3)}
              />
              <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(hamperV3)}>
                Bloom 03
              </button>
            </div>
            <button
              type="button"
              className="diwali-card"
              onClick={() => setOpenHamper(celebrationBag)}
            >
              <img
                src="/diwali-pvc-bag.jpg?v=bow"
                alt="Bloom Bag with trail mix, chocolates, urli candle and Diwali card"
              />
              <p>Bloom Bag</p>
            </button>
            <div className="diwali-card">
              <HamperCarousel
                images={hamperV2.images ?? [hamperV2.image]}
                alt="Bloom 02 White Floral Box closed with carry bag, and packed open"
                onSelect={() => setOpenHamper(hamperV2)}
              />
              <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(hamperV2)}>
                Bloom 02
              </button>
            </div>
          </div>
        </div>
        <div className="diwali-collection">
          <div className="diwali-motifs" aria-hidden="true">
            <img className="motif md right" src="/diwali-mandala.png" alt="" />
            <img className="motif xs mid" src="/diwali-mandala.png" alt="" />
          </div>
          <h3>The Signature Collection</h3>
          <div className="diwali-grid">
          <div className="diwali-card">
            <HamperCarousel
              images={signatureBox.images ?? [signatureBox.image]}
              alt="The Signature Box closed, open, and with jars filled with kaju, badam, raisins and mukhwas"
              onSelect={() => setOpenHamper(signatureBox)}
            />
            <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(signatureBox)}>
              The Signature Box
            </button>
          </div>
          <div className="diwali-card">
            <HamperCarousel
              images={signatureTrio.images ?? [signatureTrio.image]}
              alt="The Signature Trio closed, open, and with jars filled with almonds, kaju, and raisins"
              onSelect={() => setOpenHamper(signatureTrio)}
            />
            <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(signatureTrio)}>
              The Signature Trio
            </button>
          </div>
          <div className="diwali-card">
            <HamperCarousel
              images={signatureDuo.images ?? [signatureDuo.image]}
              alt="The Signature Duo closed, open, and with jars filled with almonds and kaju"
              onSelect={() => setOpenHamper(signatureDuo)}
            />
            <button type="button" className="diwali-card-name" onClick={() => setOpenHamper(signatureDuo)}>
              The Signature Duo
            </button>
          </div>
          </div>
        </div>
        <div className="diwali-collection">
          <div className="diwali-motifs" aria-hidden="true">
            <img className="motif lg right low" src="/diwali-mandala.png" alt="" />
            <img className="motif sm left low" src="/diwali-mandala.png" alt="" />
          </div>
          <h3>The Classic Collection</h3>
          <div className="diwali-grid">
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
        <h2>Follow us on Instagram</h2>
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
