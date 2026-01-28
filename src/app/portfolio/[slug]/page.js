import Image from 'next/image'
import FadeIn from '../../components/FadeIn'

export default function ProjectDetail({ params }) {
  const slug = params?.slug ?? 'project'
  const title = slug.replace(/-/g, ' ')

  return (
    <article className="container section">
      {/* ARRIVAL */}
      <header className="mb-5">
        <h1 className="fw-semibold text-capitalize mb-3">
          {title}
        </h1>
        <p className="text-muted col-lg-6">
          A private residential project shaped by light, proportion,
          and material restraint.
        </p>
      </header>

      {/* ESTABLISHING IMAGE */}
      <FadeIn>
        <section className="mb-5">
          <Image
            src="/images/project-1.jpg"
            alt={title}
            width={1600}
            height={1000}
            className="img-fluid"
          />
          <section className="section-tight">
            <div className="container text-center">
              <p className="fs-5 mb-4 col-lg-6 mx-auto">
                Considering a project of similar ambition?
              </p>
              <a href="/contact-us" className="btn btn-dark btn-lg">
                Request a Private Consultation
              </a>
            </div>
          </section>
        </section>
      </FadeIn>
    </article>

  )
}
