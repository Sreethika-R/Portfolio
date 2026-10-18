import AnimatedCard from './AnimatedCard'

function Projects() {
  return (
    <section className="slide-section">
      <div className="section-tracker">RECENT WORK</div>
      <h2 className="main-heading">Projects I'm proud of.</h2>

      {/* Featured Project 1: SafePassage */}
      <AnimatedCard delay={0.2}>
        <div className="editorial-card" style={{ marginBottom: '25px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#D8B5E3', fontWeight: 600, textTransform: 'uppercase' }}>AI-Driven Personal Safety Platform</span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '4px' }}>SafePassage</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#EED7FF', fontWeight: 500 }}>Jan 2026 – Apr 2026</span>
          </div>
          <div className="project-metrics" role="group" aria-label="SafePassage project metrics">
            <span className="metric-badge"><strong>108</strong> routing endpoints</span>
            <span className="metric-badge"><strong>79</strong> automated tests</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#EED7FF', fontStyle: 'italic', margin: '8px 0 10px 0' }}>Python, Django, SQLite, REST APIs, AI/ML</p>

          {/* Hard Problem Callout */}
          <div style={{ background: 'rgba(216, 181, 227, 0.08)', borderLeft: '3px solid #D8B5E3', padding: '8px 12px', borderRadius: '4px', marginBottom: '12px', fontSize: '0.88rem', color: '#F3E8F5' }}>
            <strong style={{ color: '#D8B5E3' }}>Core Challenge:</strong> Bridging a Python/Django backend with a machine learning inference engine to ensure low-latency anomaly and risk scoring.
          </div>

          <p style={{ marginBottom: '12px', color: '#E8DFEC', fontSize: '0.95rem' }}>
            Built during my paid AI/ML internship at Right Soft Options Institute, Kochi. SafePassage is an intelligent web-based safety system for tourists and night workers, combining AI-driven risk analysis, real-time location tracking, and dual operating modes through a unified Django backend.
          </p>
          <ul className="square-list" style={{ fontSize: '0.95rem' }}>
            <li>Engineered a robust backend and REST API architecture spanning 108 distinct routing endpoints on a unified Django framework</li>
            <li>Developed and executed a comprehensive test suite of 79 automated test cases using the Django test runner to validate multi-tier user workflows and safety checks</li>
            <li>Serialized Random Forest and Decision Tree machine-learning models using joblib and scikit-learn</li>
          </ul>
        </div>
      </AnimatedCard>

      {/* Haritha Connect and Chai Book */}
      <div className="grid-2">
        <AnimatedCard delay={0.3}>
          <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#D8B5E3', fontWeight: 600, textTransform: 'uppercase' }}>Logistics Automation</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Haritha Connect</h3>
              <p style={{ fontSize: '0.8rem', color: '#EED7FF', fontWeight: 500, margin: '4px 0 8px 0' }}>Python, Django · Aug 2025 – Nov 2025</p>
            </div>
            <div className="project-metrics" role="group" aria-label="Haritha Connect project metrics">
              <span className="metric-badge"><strong>1,000+</strong> monthly collection requests</span>
            </div>
            
            <div style={{ background: 'rgba(216, 181, 227, 0.08)', borderLeft: '2px solid #D8B5E3', padding: '6px 10px', borderRadius: '4px', margin: '6px 0 10px 0', fontSize: '0.82rem', color: '#F3E8F5' }}>
              <strong style={{ color: '#D8B5E3' }}>Challenge:</strong> Automating multi-tiered scheduling logic for high-volume monthly workflows.
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#E8DFEC' }}>Managed 1,000+ monthly collection requests across an isolated multi-portal system.</p>
            <ul className="square-list" style={{ fontSize: '0.88rem', marginTop: 'auto' }}>
              <li>Designed an offline-first payment verification protocol for field operators</li>
              <li>Implemented a three-tier access control system across the isolated portals</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#D8B5E3', fontWeight: 600, textTransform: 'uppercase' }}>Transaction Management</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Chai Book</h3>
              <p style={{ fontSize: '0.8rem', color: '#EED7FF', fontWeight: 500, margin: '4px 0 8px 0' }}>PHP, MySQL, JavaScript · Apr 2025 – May 2025</p>
            </div>

            <div style={{ background: 'rgba(216, 181, 227, 0.08)', borderLeft: '2px solid #D8B5E3', padding: '6px 10px', borderRadius: '4px', margin: '6px 0 10px 0', fontSize: '0.82rem', color: '#F3E8F5' }}>
              <strong style={{ color: '#D8B5E3' }}>Challenge:</strong> Enforcing strict database integrity and query efficiency under concurrent operations.
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#E8DFEC' }}>Built with a focus on database integrity and query efficiency.</p>
            <ul className="square-list" style={{ fontSize: '0.88rem', marginTop: 'auto' }}>
              <li>Independently debugged logic errors using a methodical, root-cause approach</li>
              <li>Implemented secure session handling and data validation workflows to protect user transactions</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={0.5}>
        <div className="editorial-card" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#D8B5E3', fontWeight: 600, textTransform: 'uppercase' }}>Scheduling Platform</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Quick Serve</h3>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#EED7FF', fontWeight: 500 }}>Sep 2023 – Mar 2024</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#EED7FF', fontWeight: 500, margin: '4px 0 8px 0' }}>PHP, MySQL</p>

          <div style={{ background: 'rgba(216, 181, 227, 0.08)', borderLeft: '2px solid #D8B5E3', padding: '6px 10px', borderRadius: '4px', margin: '6px 0 10px 0', fontSize: '0.85rem', color: '#F3E8F5' }}>
            <strong style={{ color: '#D8B5E3' }}>Challenge:</strong> Resolving calendar collision and multi-user concurrency conflicts cleanly.
          </div>

          <p style={{ fontSize: '0.95rem', marginBottom: '10px', color: '#E8DFEC' }}>Multi-user appointment-scheduling platform.</p>
          <ul className="square-list" style={{ fontSize: '0.9rem' }}>
            <li>Engineered scheduling logic to process requests and resolve conflicts</li>
            <li>Created full technical documentation, system design diagrams, and testing protocols</li>
          </ul>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={0.6}>
        <div className="editorial-card" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#D8B5E3', fontWeight: 600, textTransform: 'uppercase' }}>Interactive Frontend Engineering &amp; UI Design</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>Personal Portfolio</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#EED7FF', fontWeight: 500 }}>Sep 2026</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#EED7FF', fontStyle: 'italic', margin: '8px 0 10px 0' }}>React, Vite, Framer Motion, Git/GitHub</p>
          <div style={{ background: 'rgba(216, 181, 227, 0.08)', borderLeft: '3px solid #D8B5E3', padding: '8px 12px', borderRadius: '4px', marginBottom: '12px', fontSize: '0.88rem', color: '#F3E8F5' }}>
            <strong style={{ color: '#D8B5E3' }}>Architectural Focus:</strong> Building a responsive component-driven portfolio with clear project storytelling and lightweight motion.
          </div>
          <ul className="square-list" style={{ fontSize: '0.95rem' }}>
            <li>Built a modular React interface with Vite</li>
            <li>Implemented responsive layouts and Framer Motion transitions</li>
            <li>Configured GitHub-based deployment to Vercel</li>
          </ul>
        </div>
      </AnimatedCard>
    </section>
  )
}

export default Projects