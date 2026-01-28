import FadeIn from '../components/FadeIn'

export default function AboutPage() {
  return (
    <article className="container section">

      {/* POSITIONING */}
      <FadeIn>
        <header className="mb-5">
          <h1 className="fw-semibold mb-4 col-lg-8">
            Architecture shaped by context, <span className="text-walnut">restraint</span>, and long-term relevance.
          </h1>
          <p className="fs-5 col-lg-6 text-muted">
            We approach architecture as a careful balance between site,
            material, and human experience — prioritising clarity over
            spectacle.
          </p>
        </header>
      </FadeIn>

      {/* BELIEFS */}
      <section className="section-tight">
        <FadeIn>
          <h2 className="fw-semibold mb-4">Our Approach</h2>
        </FadeIn>

        <div className="row g-4">
          <div className="col-md-4">
            <FadeIn>
              <h5 className="fw-semibold">Context First</h5>
              <p className="text-muted">
                Each project begins with a close reading of site,
                climate, and surroundings.
              </p>
            </FadeIn>
          </div>

          <div className="col-md-4">
            <FadeIn delay={0.1}>
              <h5 className="fw-semibold">Material Honesty</h5>
              <p className="text-muted">
                Materials are selected for longevity, texture,
                and appropriateness — not trend.
              </p>
            </FadeIn>
          </div>

          <div className="col-md-4">
            <FadeIn delay={0.2}>
              <h5 className="fw-semibold">Enduring Spaces</h5>
              <p className="text-muted">
                We design buildings to age with dignity,
                not demand constant reinvention.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="section">
        <FadeIn>
          <h2 className="fw-semibold mb-4">Practice</h2>
          <p className="fs-5 col-lg-6">
            Our work spans residential and commercial architecture,
            interior architecture, and project advisory — with a focus
            on carefully scoped, detail-driven commissions.
          </p>
        </FadeIn>
      </section>

      {/* CREDIBILITY */}
      <section className="section-tight">
        <FadeIn>
          <p className="text-muted col-lg-6">
            Based in South India, we work closely with clients,
            consultants, and craftsmen across all project stages —
            from early concept through on-site execution.
          </p>
        </FadeIn>
      </section>

      {/* SOFT CTA */}
      <section className="section-tight">
        <FadeIn>
          <p className="fs-5 mb-3">
            Interested in working with us?
          </p>
          <a href="/contact-us" className="btn btn-outline-dark">
            Start a Conversation
          </a>
        </FadeIn>
      </section>

    </article>
  )
}
