import { Button, Card, TagList } from '@/components/ui'

/**
 * @param {{ project: {
 *   title: string, description: string, tags: string[],
 *   github?: string | null, live?: string | null, gradient: string, emoji?: string,
 * } }} props
 */
export function ProjectCard({ project }) {
  return (
    <Card as="li" hover glow padding="none" className="project-card">
      <div className="project-card__banner" style={{ background: project.gradient }} aria-hidden="true">
        <span className="project-card__emoji">{project.emoji}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <TagList items={project.tags} className="project-card__tags" />

        <div className="project-card__links">
          {project.github ? (
            <Button href={project.github} external variant="link" size="sm" icon="github" iconPosition="left">
              Code
            </Button>
          ) : null}
          {project.live ? (
            <Button href={project.live} external variant="link" size="sm" icon="external" iconPosition="left">
              Live demo
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
