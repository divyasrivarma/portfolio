import '../styles/Projects.css';

const projects = [
  {
    id: '01',
    emoji: '✅',
    bg: '#f2e8df',
    name: 'Task Management Web App',
    date: 'Sept 2025 – Nov 2025',
    tags: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A web-based task management system to track and organise tasks efficiently with a clean, responsive interface.',
    points: [
      'Developed a responsive UI using HTML, CSS, and JavaScript.',
      'Enables users to add, update, and delete tasks in real time.',
      'Designed for simplicity and usability across devices.',
    ],
    github: 'https://github.com/divyasrivarma/task-management-app',
    featured: false,
  },
  {
    id: '02',
    emoji: '🎙️',
    bg: '#e8d5c4',
    name: 'Automatic Subtitle Generator',
    date: 'Sept 2025 – Nov 2025',
    tags: ['Python', 'NLP', 'Speech-to-Text'],
    desc: 'An NLP-based system that automatically generates accurate subtitles from audio or speech input.',
    points: [
      'Performed audio preprocessing and speech-to-text conversion.',
      'Applied Natural Language Processing techniques for accuracy.',
      'Explored practical real-world NLP applications.',
    ],
    github: 'https://github.com/divyasrivarma/automatic-subtitle-generator',
    featured: false,
  },
  {
    id: '03',
    emoji: '🔐',
    bg: '#ddd0c8',
    name: 'Information Security Risk Assessment',
    date: '2026 – Present',
    tags: ['Python', 'Streamlit', 'Cybersecurity'],
    desc: 'An interactive risk assessment system that identifies, evaluates, and visualises security vulnerabilities in information systems.',
    points: [
      'Classified risks into Critical, High, Medium, and Low categories.',
      'Built an interactive Streamlit dashboard for decision-making.',
      'Improved usability with quick vulnerability identification.',
      'Currently under active development.',
    ],
    github: 'https://github.com/divyasrivarma/task-management-app',
    featured: true,
  },
];

export default function Projects() {
  return (
    <main className="projects-page">

      {/* ── HERO ── */}
      <section className="projects-hero">
        <p className="section-label">My Work</p>
        <h1 className="projects-hero-title">
          Selected <em>Projects</em>
        </h1>
        <p className="projects-hero-sub">3 projects · React · Python · NLP · Cybersecurity</p>
      </section>

      {/* ── GRID ── */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(p => (
              <div className="project-card fade-up" key={p.id}>
                {p.featured && <span className="project-badge">Active</span>}
                <div className="project-card-banner" style={{ background: p.bg }}>
                  <span>{p.emoji}</span>
                </div>
                <div className="project-card-body">
                  <p className="project-number">Project _{p.id}</p>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-date">{p.date}</p>
                  <p className="project-desc">{p.desc}</p>
                  <ul className="project-points">
                    {p.points.map(pt => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {p.tags.map(t => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="projects-cta">
        <div className="container">
          <h2>Want to <em>Collaborate?</em></h2>
          <p>I'm always open to interesting projects and internship opportunities.</p>
          <a href="mailto:ndivyasri2@gmail.com">
            <button className="btn-primary">Get in Touch</button>
          </a>
        </div>
      </section>

    </main>
  );
}