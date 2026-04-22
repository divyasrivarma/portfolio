import { Link } from 'react-router-dom';
import '../styles/Home.css';


const skills = [
  {
    category: 'Languages',
    title: 'Programming',
    tags: ['Python', 'SQL', 'MySQL', 'HTML', 'CSS'],
  },
  {
    category: 'Tools & Platforms',
    title: 'Software',
    tags: ['MS Excel', 'Power BI', 'Tableau', 'MongoDB', 'Canva', 'MS PowerPoint'],
  },
  {
    category: 'Interests',
    title: 'Research',
    tags: ['Machine Learning', 'NLP', 'Data Structures', 'Cybersecurity', 'DBMS'],
  },
];

const education = [
  {
    year: 'Aug 2023 – Present',
    school: 'Mahindra University',
    degree: 'B.Tech in Artificial Intelligence',
    score: 'CGPA: 6.8 / 10',
  },
  {
    year: 'June 2021 – May 2023',
    school: 'Ignite Junior College',
    degree: 'Intermediate',
    score: 'Percentage: 90.6%',
  },
  {
    year: 'May 2020 – June 2021',
    school: 'Gauthami Vidya Kshetra (CBSE)',
    degree: '10th Grade',
    score: 'Percentage: 85%',
  },
];

const experience = [
  {
    year: '2024 – Present',
    role: 'Logistics Head',
    org: 'Beyond Barriers Club · Mahindra University',
    desc: 'Led logistics planning and coordination for club events, managing end-to-end execution and team communication.',
  },
  {
    year: '2023 – Present',
    role: 'Student Volunteer',
    org: 'Event Coordination Team · Mahindra University',
    desc: 'Supported the organisation and management of university-wide events, ensuring smooth operations.',
  },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow fade-up">AI & Developer Portfolio</p>
          <h1 className="hero-title fade-up-2">
            Divya Sri <em>N.</em>
          </h1>
          <p className="hero-subtitle fade-up-3">
            Artificial Intelligence · Data · Web
          </p>
          <p className="hero-desc fade-up-4">
            B.Tech AI student at Mahindra University. I build web apps, explore
            NLP, and turn data into stories. Passionate about clean code and
            meaningful interfaces.
          </p>
          <div className="hero-actions fade-up-4">
            <Link to="/projects">
              <button className="btn-primary">View Projects</button>
            </Link>
            <a href="mailto:ndivyasri2@gmail.com">
              <button className="btn-secondary">Say Hello</button>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-placeholder">
            {/* Replace the emoji below with:
                <img src={require('../assets/profile.jpg')} alt="Divya Sri" />
                after adding your photo to src/assets/ */}
            <img src={require('../assets/profile.jpg')} alt="Divya Sri" />
          </div>
          <span className="hero-deco-text">Hyderabad, India</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="section-label">About Me</p>
              <div className="divider" />
              <h2 className="about-heading fade-up">
                Who I <em>Am</em>
              </h2>
            </div>
            <div>
              <p className="about-text">
                I'm a third-year B.Tech student specialising in Artificial
                Intelligence at Mahindra University, Hyderabad. My academic
                journey spans data structures, machine learning, DBMS, and
                design algorithms — but my real passion lies at the intersection
                of AI and real-world applications.
              </p>
              <p className="about-text">
                Outside academics, I take the lead on logistics for the Beyond
                Barriers Club and love playing Throwball and Kho-Kho. I believe
                great software, like great teamwork, is built on clarity and
                care.
              </p>

              <div className="about-detail-row">
                {[
                  { label: 'Email', value: 'ndivyasri2@gmail.com' },
                  { label: 'College', value: 'se23uari033@mahindrauniversity.edu.in' },
                  { label: 'Phone', value: '+91 79897 34384' },
                  { label: 'GitHub', value: 'github.com/divyasrivarma' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/divyasri' },
                ].map(d => (
                  <div className="about-detail" key={d.label}>
                    <span className="about-detail-label">{d.label}</span>
                    <span>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section">
        <div className="container">
          <div className="skills-header">
            <p className="section-label">What I Work With</p>
            <h2 className="skills-title">Skills &amp; <em>Tools</em></h2>
          </div>
          <div className="skills-grid">
            {skills.map(s => (
              <div className="skill-card" key={s.category}>
                <p className="skill-card-category">{s.category}</p>
                <p className="skill-card-title">{s.title}</p>
                <div className="skill-tags">
                  {s.tags.map(t => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education-section">
        <div className="container">
          <p className="section-label">Academic Journey</p>
          <h2 className="education-title">My <em>Education</em></h2>
          <div className="edu-list">
            {education.map(e => (
              <div className="edu-item" key={e.school}>
                <span className="edu-year">{e.year}</span>
                <div>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-score">{e.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience-section">
        <div className="container">
          <p className="section-label">Involvement</p>
          <h2 className="experience-title">Experience &amp; <em>Leadership</em></h2>
          <div className="exp-list">
            {experience.map(e => (
              <div className="exp-item" key={e.role}>
                <span className="exp-year">{e.year}</span>
                <div>
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-org">{e.org}</p>
                  <p className="exp-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="contact-strip">
        <div className="container">
          <h2>Let's <em>Connect</em></h2>
          <p>Open to internships, collaborations, and new opportunities.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:ndivyasri2@gmail.com">Email Me</a>
            <a className="contact-link" href="https://github.com/divyasrivarma" target="_blank" rel="noreferrer">GitHub</a>
            <a className="contact-link" href="https://www.linkedin.com/in/divyasri-n-52386737b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-logo">Divya Sri N.</span>
        <span className="footer-copy">© 2026 — Built with React</span>
      </footer>

    </main>
  );
}