import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="page prose">
      <Seo
        title="Page not found"
        description="This page is not on the Gifts N Presents site. Open Diwali hampers or contact us for a quote."
        path="/404"
        robots="noindex, follow"
      />
      <h1>Page not found</h1>
      <p>That link does not match a page on our site.</p>
      <p>
        <Link to="/">See Diwali hampers</Link>
        {' · '}
        <Link to="/contact">Contact us</Link>
      </p>
    </div>
  )
}
