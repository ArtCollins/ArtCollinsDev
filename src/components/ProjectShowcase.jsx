import './ProjectShowcase.css';

const projects = [
  {
    id: 1,
    title: 'Aura Insight Dashboard',
    description: 'An AI-driven analytics dashboard that aggregates complex business metrics. Features a predictive neural network backend to forecast trends with high accuracy.',
    tech: ['React', 'Python', 'TensorFlow', 'WebSockets'],
    year: '2025'
  },
  {
    id: 2,
    title: 'Nexus Workflow Engine',
    description: 'A seamless automation platform utilizing LLMs for natural language task processing. The system adapts its behavior based on user interaction patterns.',
    tech: ['Vite', 'Node.js', 'Redis', 'OpenAI API'],
    year: '2024'
  },
  {
    id: 3,
    title: 'Neural Space Visualizer',
    description: 'A WebGL-powered interactive visualization tool for mapping multi-dimensional AI embeddings and presenting them in a responsive, immersive 3D environment.',
    tech: ['Three.js', 'React', 'AWS', 'WebGL'],
    year: '2023'
  }
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="showcase-container">
      <div className="section-header reveal">
        <h2 className="section-title">Classified <span className="text-highlight">Deployments</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className={`project-card hover-lift reveal reveal-d${(index % 5) + 1}`}
          >
            <div className="project-year">{project.year}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            
            <div className="project-overlay"></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
