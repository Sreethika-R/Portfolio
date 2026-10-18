import AnimatedCard from './AnimatedCard'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'PHP', 'Java', 'C++'],
  },
  {
    title: 'Frontend & Web',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Responsive Design'],
  },
  {
    title: 'Backend & Architecture',
    skills: ['Django', 'OOP', 'Database Design', 'Role-Based Access Control (RBAC)', 'Transaction Management'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Oracle SQL', 'SQLite', 'PostgreSQL (working knowledge)'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'scikit-learn', 'Classification Models', 'Gradient Boosting', 'Grid Search', 'Cross-Validation'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Agile/Scrum', 'Software Testing', 'Debugging', 'Technical Documentation'],
  },
]

function Skills() {
  return (
    <section className="slide-section">
      <div className="section-tracker">WHAT I BRING</div>
      <h2 className="main-heading">My skill set.</h2>

      <div className="grid-2 skills-grid">
        {skillGroups.map((group, index) => (
          <AnimatedCard key={group.title} delay={index * 0.1}>
            <div className="editorial-card skills-card">
              <h3>{group.title}</h3>
              <ul className="skill-tags" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}

export default Skills
