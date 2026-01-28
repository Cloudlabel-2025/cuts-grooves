import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="text-decoration-none text-dark">
      <article>
        <div className="mb-3">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={800}
            className="img-fluid"
          />
        </div>

        <h5 className="fw-semibold mb-1">{project.title}</h5>
        <small className="text-muted">
          {project.category} — {project.location}
        </small>
      </article>
    </Link>
  )
}
