import './App.css';

const skills = [
  {
    category: 'Frontend',
    summary: 'Clean interfaces with responsive layouts and reusable components.',
    items: [
      { name: 'HTML', image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      { name: 'CSS', image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      { name: 'JSX', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'React', image: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    ],
  },
  {
    category: 'Backend',
    summary: 'APIs, automation flows, and database-backed application logic.',
    items: [
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
      { name: 'SQL', image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png' },
    ],
  },
  {
    category: 'Tools',
    summary: 'Version control, deployment habits, and practical delivery workflows.',
    items: [
      { name: 'Git', image: 'https://cdn-icons-png.flaticon.com/512/4494/4494748.png' },
      { name: 'GitHub', image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    ],
  },
];

const projects = [
  {
    id: 1,
    eyebrow: 'Healthcare web',
    title: 'Hospital Website',
    description:
      'A professional hospital website for presenting services, doctors, appointments, and patient-friendly information with a responsive React interface.',
    skills: ['React', 'Node.js', 'SQL', 'CSS'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 2,
    eyebrow: 'Database system',
    title: 'Patient Database Management System',
    description:
      'A Streamlit and Python system for patient registration, medical history, appointment tracking, secure storage, and dashboard-based record access.',
    skills: ['Python', 'Streamlit', 'SQL', 'Database Management', 'Deployment'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 3,
    eyebrow: 'Computer vision',
    title: 'Face and Eye Tracking System',
    description:
      'A real-time OpenCV application using Haar Cascade classifiers to detect faces and eyes from a webcam feed with live bounding boxes.',
    skills: ['Python', 'OpenCV', 'Computer Vision', 'cv2'],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 4,
    eyebrow: 'API integration',
    title: 'Twilio Real-Time Communication System',
    description:
      'A Python and Twilio platform for automated calls, SMS alerts, OTP notifications, and scalable backend communication workflows.',
    skills: ['Python', 'Twilio', 'Flask', 'SQL', 'REST API'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
  {
    id: 5,
    eyebrow: 'Portfolio',
    title: 'React Portfolio Website',
    description:
      'A responsive personal portfolio built with React and JSX to showcase projects, skills, certifications, and contact information.',
    skills: ['HTML', 'CSS', 'React', 'JSX'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80',
    link: '#',
  },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-container">
          <a className="logo" href="#home">Portfolio</a>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">python & Full Stack Developer</p>
            <h1 className="hero-title">Hari Hara Rajan</h1>
            <p className="hero-description">
              Focused on React, Python, Node.js, SQL, and practical interfaces that make
              complex workflows easier to use.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects</a>
              <a className="secondary-button" href="#contact">Contact Me</a>
            </div>
          </div>

        
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Capabilities</p>
              <h2>Technical Skills</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skillGroup) => (
                <article key={skillGroup.category} className="skill-category">
                  <h3>{skillGroup.category}</h3>
                  <p>{skillGroup.summary}</p>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill) => (
                      <span key={skill.name} className="skill-tag">
                        <img src={skill.image} alt="" className="skill-icon" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2>Featured Projects</h2>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article key={project.id} className="project-card">
                  <a className="project-image" href={project.link} aria-label={`View ${project.title}`}>
                    <img src={project.image} alt={project.title} />
                  </a>

                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-skills" aria-label={`${project.title} technologies`}>
                      {project.skills.map((skill) => (
                        <span key={`${project.id}-${skill}`} className="project-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} className="project-link">
                      View Project
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-container">
            <div className="section-heading light">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something useful.</h2>
            </div>
            <p className="contact-subtitle">Open to projects, collaboration, and portfolio reviews.</p>
            <div className="contact-links">
              <a href="https://github.com/harihararaja" className="contact-button">GitHub</a>
              <a href="mailto:harihararajan30@gmail.com" className="contact-button primary">Email Me</a>
              <a href="https://www.linkedin.com/in/hari-hara-rajan-r-21039a34a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="contact-button">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Developer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
