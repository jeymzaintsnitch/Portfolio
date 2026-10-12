import { Card, Icon, TagList } from '@/components/ui'

/**
 * @param {{ group: { title: string, icon: string, description: string, skills: string[] } }} props
 */
export function SkillGroup({ group }) {
  return (
    <Card as="li" hover glow className="skill-group">
      <div className="skill-group__header">
        <span className="skill-group__icon">
          <Icon name={group.icon} size={22} />
        </span>
        <div>
          <h3 className="skill-group__title">{group.title}</h3>
          <p className="skill-group__description">{group.description}</p>
        </div>
      </div>
      <TagList items={group.skills} />
    </Card>
  )
}
