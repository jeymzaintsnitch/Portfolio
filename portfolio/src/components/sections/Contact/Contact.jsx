import { Icon, Section, SectionHeading, SocialLinks } from '@/components/ui'
import { contact, profile, social } from '@/data/portfolio'
import { ContactForm } from './ContactForm'
import './Contact.css'

export function Contact() {
  return (
    <Section id="contact">
      <div className="contact__grid">
        <div className="contact__intro">
          <SectionHeading eyebrow="05. Contact" title={contact.heading} subtitle={contact.text} />

          <a className="contact__email" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={20} />
            {profile.email}
          </a>

          <p className="contact__location">
            <Icon name="map-pin" size={16} />
            {profile.location}
          </p>

          <SocialLinks links={social} className="contact__social" />
        </div>

        <ContactForm to={profile.email} />
      </div>
    </Section>
  )
}
