import { SocialLinks } from '@/components/ui'
import { navLinks, profile, social } from '@/data/portfolio'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__name">
            {profile.name}
          </a>
          <p className="footer__tagline">Building thoughtful software, one commit at a time.</p>
        </div>

        <ul className="footer__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <SocialLinks links={social} size="sm" />
      </div>

      <div className="container footer__bottom">
        <p className="mono">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="mono">Built with React + Vite</p>
      </div>
    </footer>
  )
}
