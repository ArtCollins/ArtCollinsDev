import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-badge reveal reveal-d1">
          <span className="badge-dot"></span>
          Application Developer & AI Integrator
        </div>
        
        <h1 className="hero-title reveal reveal-d2">
          Engineering <span className="text-highlight">Intelligent</span> <br />
          & Scalable Apps.
        </h1>
        
        <p className="hero-subtitle reveal reveal-d3">
          I specialize in building high-performance, full-stack applications with seamless AI integrations. 
          By combining robust backend architecture with premium frontend experiences, I deliver software 
          that is both powerful and intuitive.
        </p>
        
        <div className="hero-actions reveal reveal-d4">
          <a href="#projects" className="btn btn-primary hover-lift">View Projects</a>
          <a href="#contact" className="btn btn-secondary hover-lift">Get in Touch</a>
        </div>
      </div>

      {/* Background visual elements */}
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
    </section>
  );
};

export default Hero;
