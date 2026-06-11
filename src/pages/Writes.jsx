import { Link } from 'react-router-dom'
import './Category.css'

const services = [
  { title: 'Script Development', desc: 'From concept to final draft, we develop compelling screenplays that capture imaginations.' },
  { title: 'Story Editing', desc: 'Professional story editors refine narratives, strengthen character arcs, and perfect dialogue.' },
  { title: 'Pitch Decks', desc: 'Create stunning visual presentations that sell your story to producers and investors.' },
  { title: 'Writing Workshops', desc: 'Intensive training programs nurturing the next generation of screenwriters.' },
]

function Writes() {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src="/images/DSAMMY WRITES.jpeg" alt="DSAMMY Writes" />
          <div className="category-hero-overlay"></div>
        </div>
        <div className="category-hero-content container">
          <span className="hero-tag">Division 01</span>
          <h1 className="category-hero-title">DSAMMY Writes</h1>
          <p className="category-hero-subtitle">Screenwriting & Story Development</p>
        </div>
      </section>

      <section className="category-detail">
        <div className="container">
          <div className="category-intro">
            <div className="category-intro-text">
              <span className="section-tag">The Written Word</span>
              <h2 className="section-title">Where Every Story Begins</h2>
              <p>
                At DSAMMY Writes, we believe that every great film starts with an extraordinary 
                story. Our division is dedicated to the craft of screenwriting — nurturing writers 
                who have the power to move audiences, challenge perspectives, and create lasting 
                cultural impact.
              </p>
              <p>
                Through mentorship programs, collaborative workshops, and hands-on project 
                development, we help aspiring writers transform their ideas into polished, 
                production-ready screenplays.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.title} className="service-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="category-cta">
        <div className="container">
          <div className="category-cta-content">
            <h2>Have a Story to Tell?</h2>
            <p>Join DSAMMY Writes and let&apos;s bring your vision to the page.</p>
            <a href="https://wa.me/2349013989363" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Join Writes Division
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Writes
