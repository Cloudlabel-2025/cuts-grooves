"use client"

import SectionTitle from '@/app/Components/SectionTitle'
import ProjectCard from '@/app/Components/ProjectCard'
import FadeIn from '@/app/Components/FadeIn'

const projects = [
  {
    slug: 'courtyard-residence',
    title: 'Courtyard Residence',
    location: 'Chennai',
    category: 'Residential Architecture',
    image: '/images/project-1.jpg',
  },
  {
    slug: 'urban-villa',
    title: 'Urban Villa',
    location: 'Coimbatore',
    category: 'Private Residence',
    image: '/images/project-2.jpg',
  },
  {
    slug: 'studio-block',
    title: 'Studio Block',
    location: 'Bengaluru',
    category: 'Commercial Architecture',
    image: '/images/project-3.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <section className="section mt-5">
      <SectionTitle title="Selected Works" />

      <p className="col-lg-6 fs-5 mb-5">
        A curated selection of projects reflecting our approach to
        context-driven, enduring architecture.
      </p>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.slug}>
            <FadeIn>
              <ProjectCard project={project} />
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  )
}
