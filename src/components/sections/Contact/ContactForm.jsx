import { useState } from 'react'
import { Button, Card } from '@/components/ui'

const initialState = { name: '', email: '', message: '' }

/**
 * Simple form that opens the visitor's mail client with a pre-filled message.
 * @param {{ to: string }} props
 */
export function ContactForm({ to }) {
  const [values, setValues] = useState(initialState)
  const [sent, setSent] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((v) => ({ ...v, [name]: value }))
    setSent(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name || 'a visitor'}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Card as="form" padding="lg" className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__row">
        <label className="contact-form__field">
          <span className="contact-form__label">Name</span>
          <input
            className="contact-form__input"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            value={values.name}
            onChange={onChange}
            required
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Email</span>
          <input
            className="contact-form__input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={values.email}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <label className="contact-form__field">
        <span className="contact-form__label">Message</span>
        <textarea
          className="contact-form__input contact-form__textarea"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          value={values.message}
          onChange={onChange}
          required
        />
      </label>

      <div className="contact-form__footer">
        <Button type="submit" variant="primary" icon="send">
          Send message
        </Button>
        {sent ? (
          <p className="contact-form__status mono" role="status">
            Opening your mail client…
          </p>
        ) : null}
      </div>
    </Card>
  )
}
