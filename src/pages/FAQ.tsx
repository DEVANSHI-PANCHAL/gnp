import Seo from '../components/Seo'

const faqs = [
  {
    q: 'Can I customise a hamper?',
    a: 'Yes. Message us on Instagram or email with dietary notes, colours, or a budget and we will build a custom box.',
  },
  {
    q: 'Are hampers vegetarian?',
    a: 'Most collections are vegetarian. Ask us on Instagram or email for allergen details.',
  },
  {
    q: 'Can I add a gift note?',
    a: 'Yes. Share your message when you enquire on Instagram or email. We hand-write it on our Diwali card.',
  },
  {
    q: 'How do I order?',
    a: 'We do not sell or ship from this website. Open a ready-made hamper or build your own, then get a quote on Instagram or email.',
  },
]

export default function FAQ() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="page prose">
      <Seo
        title="FAQ"
        description="How to order a Gifts N Presents hamper, custom boxes, vegetarian options, and gift notes. We quote on Instagram and email."
        path="/faq"
        jsonLd={faqLd}
      />
      <h1>FAQ</h1>
      {faqs.map((f) => (
        <section key={f.q}>
          <h2>{f.q}</h2>
          <p>{f.a}</p>
        </section>
      ))}
    </div>
  )
}
