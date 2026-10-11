import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="brand-logo" aria-label="Gifts N Presents home">
          <img src="/logo-nav.svg" alt="Gifts N Presents" />
        </Link>
      </div>
    </header>
  )
}
