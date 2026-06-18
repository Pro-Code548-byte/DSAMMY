import './Category.css'

const services = [
  { title: 'Photography', desc: 'Professional portrait, event, and commercial photography with artistic flair.' },
  { title: 'Videography', desc: 'Cinematic video production for films, commercials, music videos, and more.' },
  { title: 'Studio Rental', desc: 'Fully equipped studio space available for shoots, with professional lighting and backdrops.' },
  { title: 'Photo Editing', desc: 'Expert post-processing, retouching, and color grading for stunning visuals.' },
]

function Studio() {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src="/images/DSAMMY STUDIO.jpeg" alt="DSAMMY Studio" />
          <div className="category-hero-overlay"></div>
        </div>
        <div className="category-hero-content container">
          <span className="hero-tag">Division 03</span>
          <h1 className="category-hero-title">DSAMMY Studio</h1>
          <p className="category-hero-subtitle">Photography & Videography</p>
        </div>
      </section>

      <section className="category-detail">
        <div className="container">
          <div className="category-intro">
            <div className="category-intro-text">
              <span className="section-tag">Visual Storytelling</span>
              <h2 className="section-title">Capturing Moments That Matter</h2>
              <p>
                DSAMMY Studio is where visual artistry comes to life. Our team of photographers 
                and videographers are masters of light, composition, and storytelling — creating 
                images that speak volumes.
              </p>
              <p>
                From studio portraits to cinematic film sequences, we provide a full range of 
                visual services that meet the highest industry standards.
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
            <h2>Frame Your Vision</h2>
            <p>Work with DSAMMY Studio for your next visual project.</p>
            <a href="https://chat.whatsapp.com/JNDzJjLmr93CkXrqddtaUY?s=cl&p=a&mlu=2" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Join Studio Division
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Studio
