import { Button, Section, SectionHeading } from '@/components/ui'
import { about, profile } from '@/data/portfolio'
import { FactChip } from './FactChip'
import './About.css'

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01. About" title="A bit about me" />

      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <Button href={profile.resumeUrl} variant="ghost" icon="download" className="about__cta">
            Download Resume
          </Button>
        </div>

        <ul className="about__facts stagger">
          {about.facts.map((fact) => (
            <FactChip key={fact.label} fact={fact} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
