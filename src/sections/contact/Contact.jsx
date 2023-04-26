import './contact.css'
import contacts from './data'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Connect</h2>
      <p>
        Feel free to connect with me at any of the following links.
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact