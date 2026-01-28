"use client"

import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/app/Components/FadeIn"
import TextReveal from "@/app/Components/TextReveal"
import CountUp from "@/app/Components/CountUp"
import { StaggerContainer, StaggerItem } from "@/app/Components/StaggerContainer"

// Service data
const services = [
  {
    icon: "⚜",
    title: "Interior Design",
    description: "Crafting bespoke interiors that blend functionality with timeless elegance, using premium materials and meticulous attention to detail."
  },
  {
    icon: "❖",
    title: "Construction",
    description: "Full-scale construction services from foundation to finish, delivering projects with precision, quality, and lasting durability."
  },
  {
    icon: "✦",
    title: "Renovation",
    description: "Transforming existing spaces with thoughtful renovations that respect the original character while introducing modern refinement."
  }
]

// Portfolio projects
const projects = [
  {
    slug: 'courtyard-residence',
    title: 'Courtyard Residence',
    category: 'Interior Design',
    image: '/images/project-1.jpg',
  },
  {
    slug: 'urban-villa',
    title: 'Urban Villa',
    category: 'Construction',
    image: '/images/project-2.jpg',
  },
  {
    slug: 'studio-block',
    title: 'Studio Block',
    category: 'Renovation',
    image: '/images/project-3.jpg',
  },
]

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="hero-container" style={{ marginTop: "-80px" }}>
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <FadeIn delay={0.2} direction="none">
                <p style={{
                  color: "var(--bronze-400)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem"
                }}>
                  ◆ Interior & Construction Excellence
                </p>
              </FadeIn>

              <TextReveal delay={0.4}>
                <h1 className="hero-tagline">
                  Where <span className="highlight">Craftsmanship</span> meets
                  <br />Timeless Elegance
                </h1>
              </TextReveal>

              <FadeIn delay={0.8}>
                <p className="hero-subtitle">
                  We transform spaces into refined sanctuaries — blending
                  premium materials, expert craftsmanship, and sophisticated
                  design to create interiors and structures of enduring value.
                </p>
              </FadeIn>

              <FadeIn delay={1}>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/contact-us" className="btn btn-royal">
                    Request Consultation
                  </Link>
                  <Link href="/portfolio" className="btn btn-outline-royal">
                    View Our Work
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats-grid">
            <FadeIn delay={0.1}>
              <div className="stat-card">
                <div className="stat-icon">❖</div>
                <div className="stat-num-royal">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="stat-label-royal">Years of Excellence</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="stat-card">
                <div className="stat-icon">◈</div>
                <div className="stat-num-royal">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="stat-label-royal">Signature Projects</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="stat-card">
                <div className="stat-icon">✦</div>
                <div className="stat-num-royal">
                  <CountUp end={50} suffix="+" />
                </div>
                <div className="stat-label-royal">Master Craftsmen</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="stat-card">
                <div className="stat-icon">⚜</div>
                <div className="stat-num-royal">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="stat-label-royal">Client Satisfaction</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION*/}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="overline">What We Offer</p>
              <h2>Our Expertise</h2>
              <div className="divider-bronze"></div>
              <p>
                A comprehensive suite of services tailored to bring your vision
                to life with uncompromising quality.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="row g-4">
            {services.map((service, index) => (
              <StaggerItem key={index} className="col-md-4">
                <div className="service-card">
                  <div className="service-icon">
                    <span style={{ fontSize: "1.5rem" }}>{service.icon}</span>
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT PREVIEW SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <FadeIn direction="left">
                <p style={{
                  color: "var(--bronze-400)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontSize: "0.85rem",
                  marginBottom: "1rem"
                }}>
                  Our Philosophy
                </p>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--warm-white)",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  marginBottom: "1.5rem",
                  lineHeight: "1.3"
                }}>
                  Designing Spaces of <br />
                  <span style={{ color: "var(--bronze-400)" }}>Quiet Authority</span>
                </h2>
                <p style={{ color: "var(--charcoal-300)", lineHeight: "1.8", marginBottom: "1rem" }}>
                  We believe that exceptional spaces are born from the harmony of
                  material, light, and purpose. Every project begins with deep
                  understanding — of context, of client, of craft.
                </p>
                <p style={{ color: "var(--charcoal-400)", lineHeight: "1.8", marginBottom: "2rem" }}>
                  From luxurious interiors to robust construction, we approach
                  each endeavour with the precision of artisans and the vision
                  of architects.
                </p>
                <Link href="/about" className="btn btn-outline-royal">
                  Learn More About Us
                </Link>
              </FadeIn>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <FadeIn direction="right" delay={0.2}>
                <div className="quote-card">
                  <p>
                    "Architecture and interiors should never shout. They should
                    speak quietly, with confidence and permanence."
                  </p>
                  <p style={{
                    fontWeight: "600",
                    color: "var(--charcoal-800)",
                    marginBottom: "0.25rem",
                    fontStyle: "normal"
                  }}>
                    — The Cuts & Grooves Team
                  </p>
                  <span style={{ color: "var(--charcoal-500)", fontSize: "0.9rem" }}>
                    Design Philosophy
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PORTFOLIO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <p className="overline">Our Portfolio</p>
              <h2>Selected Works</h2>
              <div className="divider-bronze"></div>
              <p>
                A curated collection showcasing our commitment to excellence
                in interior design and construction.
              </p>
            </div>
          </FadeIn>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.15}>
                <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none" }}>
                  <div className="portfolio-item">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="portfolio-overlay">
                      <span>{project.category}</span>
                      <h4>{project.title}</h4>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-5">
              <Link href="/portfolio" className="btn btn-dark btn-lg">
                View All Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <h2>Ready to Transform Your Space?</h2>
            <p>
              Let us bring your vision to life with our expertise in interior
              design and construction.
            </p>
            <Link href="/contact-us" className="btn btn-royal btn-lg glow-bronze" style={{ position: "relative" }}>
              Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
