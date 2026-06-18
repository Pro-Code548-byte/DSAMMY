import './Category.css'

const services = [
  { title: 'Pre-Production', desc: 'Comprehensive planning including casting, location scouting, budgeting, and scheduling.' },
  { title: 'Principal Photography', desc: 'Professional film crews and state-of-the-art equipment for seamless production.' },
  { title: 'Post-Production', desc: 'Expert editing, color grading, sound design, and visual effects integration.' },
  { title: 'Production Management', desc: 'End-to-end coordination ensuring every project stays on time and on budget.' },
]

function Production() {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src="/images/DSAMMY PRODUCTION.jpeg" alt="DSAMMY Production" />
          <div className="category-hero-overlay"></div>
        </div>
        <div className="category-hero-content container">
          <span className="hero-tag">Division 02</span>
          <h1 className="category-hero-title">DSAMMY Production</h1>
          <p className="category-hero-subtitle">Film & Media Production</p>
        </div>
      </section>

      <section className="category-detail">
        <div className="container">
          <div className="category-intro">
            <div className="category-intro-text">
              <span className="section-tag">Bringing Stories to Life</span>
              <h2 className="section-title">From Script to Screen</h2>
              <p>
                DSAMMY Production is the engine room of our operation. With a team of experienced 
                producers, directors, and crew members, we handle every aspect of film production 
                — from the first planning meeting to the final frame.
              </p>
              <p>
                Our production division is committed to excellence, combining creative vision with 
                technical precision to deliver content that stands out in the global marketplace.
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
            <h2>Ready to Produce Your Vision?</h2>
            <p>Let DSAMMY Production turn your script into cinema.</p>
            <a href="https://chat.whatsapp.com/JNDzJjLmr93CkXrqddtaUY?s=cl&p=a&mlu=2" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Join Production Division
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Production
