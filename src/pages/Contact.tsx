import Seo from '../components/Seo'
import { EMAIL, INSTAGRAM } from '../data/hamper'
import { SITE_NAME, SITE_URL } from '../site'

export default function Contact() {
  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: `${SITE_URL}/contact`,
    email: EMAIL,
    sameAs: [INSTAGRAM],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    areaServed: 'IN',
  }

  return (
    <div className="page prose">
      <Seo
        title="Contact"
        description="Contact Gifts N Presents in Ahmedabad for a Diwali hamper quote. Email thegnpstore@gmail.com or message @gifts.n.presents."
        path="/contact"
        jsonLd={contactLd}
      />
      <h1>Contact us</h1>
      <p>
        We pack to order in Ahmedabad. There is no walk-in store and we do not ship from this site.
        Write to us for a quote.
      </p>
      <p>
        Gifts N Presents
        <br />
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <br />
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          @gifts.n.presents
        </a>
      </p>
      <div className="hero-actions">
        <a className="btn-pink" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a className="btn-outline" href={`mailto:${EMAIL}`}>
          Email
        </a>
      </div>
    </div>
  )
}
