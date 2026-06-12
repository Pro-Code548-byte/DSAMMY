import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'
import './About.css'

const stats = [
  { number: '5+', label: 'Creative Divisions' },
  { number: '100+', label: 'Talents Nurtured' },
  { number: '50+', label: 'Projects Completed' },
  { number: '100%', label: 'Passion Driven' },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-overlay"></div>
          <img src="/images/DSAMMY GLOBAL.jpeg" alt="DSAMMY" />
        </div>
        <div className="page-hero-content container">
          <span className="hero-tag">About Us</span>
          <h1 className="page-hero-title">The Story of DSAMMY</h1>
          <p className="page-hero-subtitle">
            Building the future of filmmaking by empowering young talent
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text animate-fade-in">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title">Shaping Tomorrow&apos;s Storytellers</h2>
              <p>
                DSAMMY is a dynamic film production and talent development company dedicated to 
                discovering, nurturing, and empowering young talents across every facet of the 
                movie industry.
              </p>
              <p>
                From the written word to the silver screen, from the artist&apos;s sketchpad to 
                cutting-edge digital technology, we provide a platform where creativity knows 
                no bounds and every voice finds its audience.
              </p>
              <p>
                Our comprehensive approach covers screenwriting, film production, photography 
                and videography, comic art, and film technology — ensuring that every aspect 
                of modern filmmaking is represented and elevated.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Work With Us
              </Link>
            </div>
            <div className="mission-image animate-fade-in stagger-2">
              <img src="/images/DSAMMY STUDIO.jpeg" alt="DSAMMY Studio" />
              <div className="mission-image-border"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="stat-number"><CountUp target={stat.number} /></span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container">
          <div className="vision-content">
            <span className="section-tag animate-fade-in">Our Vision</span>
            <h2 className="section-title animate-fade-in stagger-1">A New Era of African Cinema</h2>
            <p className="vision-text animate-fade-in stagger-2">
              We envision a vibrant film industry where young African talents lead the global 
              stage — telling our stories, our way. DSAMMY is committed to building the 
              infrastructure, training the talent, and producing the content that will define 
              the next generation of cinema.
            </p>
            <div className="vision-values">
              <div className="value-item animate-fade-up stagger-1">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4>Creativity</h4>
                <p>Unleashing unlimited creative potential</p>
              </div>
              <div className="value-item animate-fade-up stagger-2">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Excellence</h4>
                <p>Pursuing the highest standards in every craft</p>
              </div>
              <div className="value-item animate-fade-up stagger-3">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h4>Community</h4>
                <p>Building a family of passionate creators</p>
              </div>
              <div className="value-item animate-fade-up stagger-4">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4>Innovation</h4>
                <p>Embracing technology to push creative boundaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
