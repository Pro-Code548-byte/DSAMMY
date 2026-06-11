import { Link } from 'react-router-dom'
import './Home.css'

const categories = [
  {
    title: 'Writes',
    subtitle: 'Screenwriting & Story Development',
    description: 'Crafting compelling narratives that captivate audiences worldwide. Our writers breathe life into stories.',
    path: '/writes',
    image: 'DSAMMY WRITES.jpeg',
  },
  {
    title: 'Production',
    subtitle: 'Film & Media Production',
    description: 'End-to-end production services that transform visions into cinematic realities.',
    path: '/production',
    image: 'DSAMMY PRODUCTION.jpeg',
  },
  {
    title: 'Studio',
    subtitle: 'Photography & Videography',
    description: 'Professional studio services capturing moments with artistic precision and technical excellence.',
    path: '/studio',
    image: 'DSAMMY STUDIO.jpeg',
  },
  {
    title: 'Comics',
    subtitle: 'Comic Art & Illustration',
    description: 'Where imagination meets illustration. Creating vibrant comic worlds and unforgettable characters.',
    path: '/comics',
    image: 'DSAMMY COMICS.jpeg',
  },
  {
    title: 'Tech',
    subtitle: 'Film Technology & Innovation',
    description: 'Pushing boundaries with cutting-edge technology to enhance every aspect of film production.',
    path: '/tech',
    image: 'DSAMMY TECH.jpeg',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content container">
          <span className="hero-tag animate-fade-in">DSAMMY</span>
          <h1 className="hero-title animate-fade-in stagger-1">
            Where Talent Meets
            <span className="hero-title-accent">Cinema</span>
          </h1>
          <p className="hero-subtitle animate-fade-in stagger-2">
            We discover, nurture, and empower young talents across writing, production, 
            technology, photography, and comics — building the future of filmmaking.
          </p>
          <div className="hero-actions animate-fade-in stagger-3">
            <Link to="/about" className="btn btn-primary">
              Discover More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="https://wa.me/2349013989363" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Join Us
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header animate-fade-in">
            <span className="section-tag">Our Divisions</span>
            <h2 className="section-title">Explore Our Creative World</h2>
            <p className="section-subtitle">
              From script to screen, from panel to page — discover the diverse disciplines that make DSAMMY a powerhouse of creative talent.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link to={cat.path} key={cat.title} className="category-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="category-card-image">
                  <img src={`/images/${cat.image}`} alt={cat.title} loading="lazy" />
                  <div className="category-card-overlay"></div>
                </div>
                <div className="category-card-content">
                  <span className="category-card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="category-card-title">{cat.title}</h3>
                  <p className="category-card-subtitle">{cat.subtitle}</p>
                  <p className="category-card-description">{cat.description}</p>
                  <span className="category-card-link">
                    Explore {cat.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container">
          <div className="cta-content">
            <span className="section-tag">Get in Touch</span>
            <h2 className="cta-title">Ready to Create Something Extraordinary?</h2>
            <p className="cta-text">
              Whether you&apos;re a budding writer, a tech enthusiast, or a visual artist, 
              DSAMMY is your platform to shine. Join us and let&apos;s make magic together.
            </p>
            <a
              href="https://wa.me/2349013989363"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Us on WhatsApp — 09013989363
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
