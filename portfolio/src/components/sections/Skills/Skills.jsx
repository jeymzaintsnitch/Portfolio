import { Section, SectionHeading } from '@/components/ui'
import { skillGroups } from '@/data/portfolio'
import { SkillGroup } from './SkillGroup'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="02. Skills"
        title="Technologies I work with"
        subtitle="A toolbox that spans the full stack, from browser to bare metal."
      />

      <ul className="skills__grid stagger">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </ul>
    </Section>
  )
}
