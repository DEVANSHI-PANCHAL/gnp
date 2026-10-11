import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Seo from './components/Seo'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { EMAIL, INSTAGRAM } from './data/hamper'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/logo-stamp.svg`,
  sameAs: [INSTAGRAM],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  description: DEFAULT_DESCRIPTION,
}

export default function App() {
  return (
    <>
      <Seo title={SITE_NAME} description={DEFAULT_DESCRIPTION} path="/" jsonLd={organizationLd} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Navigate to="/" replace />} />
          <Route path="/product/:id" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Navigate to="/contact" replace />} />
          <Route path="/policy" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
