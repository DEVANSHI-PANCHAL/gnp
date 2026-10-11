import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-kicker">Visit</p>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <p className="footer-kicker">Reach us</p>
          <p>
            Gifts N Presents
            <br />
            <a href="mailto:thegnpstore@gmail.com">thegnpstore@gmail.com</a>
            <br />
            <a href="https://www.instagram.com/gifts.n.presents/" target="_blank" rel="noopener noreferrer">
              @gifts.n.presents
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} by Gifts N Presents.</p>
        <div className="socials footer-socials">
          <a
            href="https://www.instagram.com/gifts.n.presents/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a href="mailto:thegnpstore@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M4 7.5 12 13l8-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
