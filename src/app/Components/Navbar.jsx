'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    ['/about', 'About'],
    ['/interior', 'Interior'],
    ['/construction', 'Construction'],
    ['/portfolio', 'Portfolio'],
    ['/contact-us', 'Contact'],
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled
          ? 'rgba(26, 26, 26, 0.98)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(205, 127, 50, 0.2)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 0, 0, 0.15)'
          : 'none',
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          transition: 'padding 0.4s ease',
        }}>

          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            {/* Logo Mark */}
            <div style={{
              width: '42px',
              height: '42px',
              background: 'linear-gradient(135deg, var(--bronze-500), var(--bronze-400))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <span style={{
                color: 'var(--charcoal-900)',
                fontWeight: '700',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-display)',
              }}>
                C&G
              </span>
            </div>

            {/* Logo Text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                color: 'var(--royal-ink)',
                fontWeight: '600',
                fontSize: '1.15rem',
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
              }}>
                Cuts & Grooves
              </span>
              <span style={{
                color: 'var(--royal-gold)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: '2px',
              }}>
                Interior & Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
            className="d-none d-lg-flex"
          >
            {navLinks.map(([href, label]) => {
              const isActive = mounted && pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? 'var(--royal-gold)' : 'var(--royal-ink)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '700' : '500',
                    padding: '0.5rem 1rem',
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = 'var(--royal-gold)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = 'var(--royal-ink)'
                  }}
                >
                  {label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      background: 'var(--royal-gold)',
                    }} />
                  )}
                </Link>
              )
            })}

            {/* CTA Button */}
            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="btn btn-royal"
              style={{
                marginLeft: '1rem',
                fontSize: '0.85rem',
                padding: '0.7rem 1.5rem',
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            style={{
              border: '2px solid var(--charcoal-500)',
              padding: '0.5rem',
              background: 'transparent',
            }}
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--bronze-400)',
              marginBottom: '5px',
            }} />
            <span style={{
              display: 'block',
              width: '18px',
              height: '2px',
              background: 'var(--bronze-400)',
              marginBottom: '5px',
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--bronze-400)',
            }} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="collapse navbar-collapse d-lg-none" id="mainNav">
          <div style={{
            padding: '1rem 0 2rem',
            borderTop: '1px solid var(--charcoal-700)',
          }}>
            {navLinks.map(([href, label]) => {
              const isActive = mounted && pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: isActive ? 'var(--royal-gold)' : 'var(--royal-slate)',
                    fontSize: '1rem',
                    fontWeight: isActive ? '600' : '500',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--royal-pearl)',
                  }}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact-us"
              className="btn btn-royal"
              style={{
                display: 'block',
                marginTop: '1rem',
                padding: '1rem',
                textAlign: 'center',
                width: '100%',
              }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
