import './Category.css'

const services = [
  { title: 'Comic Creation', desc: 'Original comic book development from concept to printed page and digital release.' },
  { title: 'Illustration', desc: 'Professional character design, storyboarding, and concept art for all media.' },
  { title: 'Graphic Novels', desc: 'Long-form visual storytelling combining rich narratives with stunning artwork.' },
  { title: 'Comic Workshops', desc: 'Training programs teaching the art of sequential storytelling and illustration.' },
]

function Comics() {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src="/images/DSAMMY COMICS.jpeg" alt="DSAMMY Comics" />
          <div className="category-hero-overlay"></div>
        </div>
        <div className="category-hero-content container">
          <span className="hero-tag">Division 04</span>
          <h1 className="category-hero-title">DSAMMY Comics</h1>
          <p className="category-hero-subtitle">Comic Art & Illustration</p>
        </div>
      </section>

      <section className="category-detail">
        <div className="container">
          <div className="category-intro">
            <div className="category-intro-text">
              <span className="section-tag">Art Meets Narrative</span>
              <h2 className="section-title">Where Imagination Takes Form</h2>
              <p>
                DSAMMY Comics is a vibrant community of illustrators, writers, and visual 
                storytellers who bring extraordinary worlds to life through the power of 
                sequential art.
              </p>
              <p>
                We create compelling comic books, graphic novels, and illustrated content that 
                push the boundaries of visual storytelling while developing the next generation 
                of comic artists.
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
            <h2>Draw Your Dreams</h2>
            <p>Join DSAMMY Comics and create worlds without limits.</p>
            <a href="https://wa.me/2349013989363" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Join Comics Division
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comics
