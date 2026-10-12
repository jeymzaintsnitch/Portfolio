import { useEffect, useMemo, useState } from 'react'
import { Button, Icon } from '@/components/ui'
import { useActiveSection } from '@/hooks'
import { navLinks, profile } from '@/data/portfolio'
import { NavLink } from './NavLink'
import './Navbar.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const ids = useMemo(() => navLinks.map((link) => link.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the drawer with Escape.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`.trim()}>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" onClick={close} aria-label="Back to top">
          <span className="navbar__brand-mark mono">{profile.initials}</span>
          <span className="navbar__brand-name">{profile.name}</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} active={active === link.id} onClick={close} />
            ))}
          </ul>
          <Button href={profile.resumeUrl} variant="ghost" size="sm" icon="download" className="navbar__cta">
            Resume
          </Button>
        </nav>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div id="mobile-nav" className="navbar__drawer" aria-hidden={!open}>
        <ul className="navbar__drawer-links">
          {navLinks.map((link) => (
            <NavLink key={link.id} {...link} active={active === link.id} onClick={close} />
          ))}
        </ul>
        <Button href={profile.resumeUrl} variant="primary" icon="download" onClick={close}>
          Download Resume
        </Button>
      </div>
    </header>
  )
}
