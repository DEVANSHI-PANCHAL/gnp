import Seo from '../components/Seo'

export default function About() {
  return (
    <div className="page prose about">
      <Seo
        title="About"
        description="Gifts N Presents packs celebration and Diwali hampers to order in Ahmedabad. Custom gourmet boxes with a handwritten card."
        path="/about"
      />
      <h1>About Gifts N Presents</h1>
      <p>
        We tie hampers the way you would for someone you love: extra ribbon, a handwritten card, and
        treats you would actually keep for yourself.
      </p>
      <p>
        Gifts N Presents started as a small studio packing celebration boxes for friends. Today we
        curate gourmet, festive, and corporate hampers from local makers: chocolatiers, tea blenders,
        bakers, and florists.
      </p>
      <p>
        Every hamper is assembled to order in Ahmedabad. Message us on Instagram or email with the
        occasion, and we will build something that feels personal.
      </p>
    </div>
  )
}
