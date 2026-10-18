import heroImg from '../assets/hero.jpeg'

function Hero() {
  return (
    <div className="cover-slide">
      <div style={{ height: '100%' }}>
        <div className="cover-left">
          <span className="top-tag">PORTFOLIO 2026</span>
          
          <h1 className="hero-title">Hello, I&apos;m Sreethika.</h1>

          <p className="subtitle">MCA Graduate &amp; Software Developer — Palakkad, Kerala</p>
          <p className="tagline">
            Curious about how code meets real-world utility. Building practical software and exploring AI systems without the buzzwords.
          </p>
          <nav className="hero-actions" aria-label="Profile links">
            <a className="hero-action hero-action-primary" href="#projects">View projects</a>
            <a className="hero-action" href="/Sreethika_R_Resume.pdf" download="Sreethika_R_Resume.pdf">Download Resume</a>
            <a className="hero-action" href="https://github.com/Sreethika-R" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </div>
      
      <div style={{ height: '100%' }}>
        <div className="cover-right-box">
          <img 
            src={heroImg} 
            alt="Sreethika Radhakrishnan" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero