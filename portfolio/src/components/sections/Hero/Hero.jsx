import { Button, GradientText, SocialLinks } from '@/components/ui'
import { useMediaQuery, useTyping } from '@/hooks'
import { profile, social } from '@/data/portfolio'
import './Hero.css'

export function Hero() {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const typed = useTyping(profile.roles, { enabled: !reducedMotion })

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__greeting mono">
          <span className="hero__prompt">&gt;</span> {profile.greeting}
        </p>

        <h1 className="hero__title">
          <GradientText animated>{profile.name}</GradientText>
        </h1>

        <p className="hero__role" aria-live="polite">
          <span className="hero__role-text">{typed}</span>
          <span className="hero__cursor" aria-hidden="true">
            |
          </span>
        </p>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <Button href="#projects" variant="primary" size="lg" icon="arrow-right">
            View Projects
          </Button>
          <Button href="#contact" variant="ghost" size="lg" icon="mail" iconPosition="left">
            Contact Me
          </Button>
        </div>

        <SocialLinks links={social} className="hero__social" />
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-track">
          <span className="hero__scroll-dot" />
        </span>
        <span className="hero__scroll-label mono">scroll</span>
      </a>
    </section>
  )
}
