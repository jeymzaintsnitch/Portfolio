import { Button, Section, SectionHeading } from '@/components/ui'
import { projects, social } from '@/data/portfolio'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  const githubUrl = social.find((s) => s.icon === 'github')?.url

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="03. Projects"
        title="Things I've built"
        subtitle="A selection of products, tools and experiments. Each one taught me something new."
      />

      <ul className="projects__grid stagger">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      {githubUrl ? (
        <div className="projects__more">
          <Button href={githubUrl} external variant="ghost" icon="github" iconPosition="left">
            See more on GitHub
          </Button>
        </div>
      ) : null}
    </Section>
  )
}
