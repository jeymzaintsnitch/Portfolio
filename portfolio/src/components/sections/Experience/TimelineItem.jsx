import { Card, Icon } from '@/components/ui'

/**
 * @param {{ item: { role: string, company: string, period: string, type: 'work' | 'education', bullets: string[] } }} props
 */
export function TimelineItem({ item }) {
  const iconName = item.type === 'education' ? 'graduation-cap' : 'briefcase'

  return (
    <li className={`timeline-item timeline-item--${item.type}`}>
      <span className="timeline-item__marker" aria-hidden="true">
        <Icon name={iconName} size={16} />
      </span>

      <Card hover className="timeline-item__card">
        <div className="timeline-item__header">
          <div>
            <h3 className="timeline-item__role">{item.role}</h3>
            <p className="timeline-item__company">{item.company}</p>
          </div>
          <p className="timeline-item__period mono">{item.period}</p>
        </div>

        <ul className="timeline-item__bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet.slice(0, 32)}>{bullet}</li>
          ))}
        </ul>
      </Card>
    </li>
  )
}
