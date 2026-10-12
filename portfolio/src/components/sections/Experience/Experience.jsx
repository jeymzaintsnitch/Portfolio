import { Section, SectionHeading } from '@/components/ui'
import { experience } from '@/data/portfolio'
import { TimelineItem } from './TimelineItem'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="04. Experience"
        title="Where I've worked"
        subtitle="My journey so far, from the classroom to leading engineering teams."
      />

      <ol className="timeline stagger">
        {experience.map((item) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} />
        ))}
      </ol>
    </Section>
  )
}
