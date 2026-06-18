import './Category.css'

const services = [
  { title: 'Film Technology', desc: 'Cutting-edge tools and systems for digital cinematography and post-production.' },
  { title: 'VFX & Animation', desc: 'Stunning visual effects and 3D animation that bring impossible worlds to reality.' },
  { title: 'Sound Engineering', desc: 'Professional audio recording, mixing, and sound design for immersive experiences.' },
  { title: 'Tech Training', desc: 'Hands-on training programs in the latest film production technologies.' },
]

function Tech() {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src="/images/DSAMMY TECH.jpeg" alt="DSAMMY Tech" />
          <div className="category-hero-overlay"></div>
        </div>
        <div className="category-hero-content container">
          <span className="hero-tag">Division 05</span>
          <h1 className="category-hero-title">DSAMMY Tech</h1>
          <p className="category-hero-subtitle">Film Technology & Innovation</p>
        </div>
      </section>

      <section className="category-detail">
        <div className="container">
          <div className="category-intro">
            <div className="category-intro-text">
              <span className="section-tag">Innovation in Action</span>
              <h2 className="section-title">Technology Meets Creativity</h2>
              <p>
                DSAMMY Tech is at the forefront of film technology, merging artistic vision with 
                technical innovation. From visual effects to sound engineering, we push the 
                boundaries of what&apos;s possible in modern filmmaking.
              </p>
              <p>
                Our tech division not only provides cutting-edge production services but also 
                trains young technicians in the skills needed to excel in the rapidly evolving 
                film industry.
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
            <h2>Innovate With Us</h2>
            <p>Join DSAMMY Tech and shape the future of film technology.</p>
            <a href="https://chat.whatsapp.com/JNDzJjLmr93CkXrqddtaUY?s=cl&p=a&mlu=2" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Join Tech Division
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tech
