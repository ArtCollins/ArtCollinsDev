import './AboutContact.css';

const AboutContact = () => {
  return (
    <section id="contact" className="about-contact-container">
      <div className="split-layout">
        
        <div className="about-section reveal">
          <h2 className="section-title">Application <span className="text-highlight">Architect</span></h2>
          <p className="about-text">
            I bridge the gap between complex backend logic and frictionless frontend experiences. 
            My philosophy is simple: great software requires a robust architecture under the hood 
            and a premium, intuitive interface on the surface.
          </p>
          <p className="about-text">
            I build modern web and mobile applications from the ground up, specializing in integrating 
            cutting-edge AI models to automate workflows and unlock new capabilities. Whether you need 
            a scalable SaaS platform or a high-performance interactive prototype, I engineer solutions 
            that deliver results.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">Full</span>
              <span className="stat-label">Stack Expertise</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">AI</span>
              <span className="stat-label">Driven Solutions</span>
            </div>
          </div>
        </div>

        <div className="contact-section reveal reveal-d2">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">secure_comm.sh</span>
            </div>
            <div className="terminal-body">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{'<'} Name {'>'}</label>
                  <input type="text" id="name" className="form-input" placeholder="Enter alias..." />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{'<'} Protocol_Address {'>'}</label>
                  <input type="email" id="email" className="form-input" placeholder="Enter email..." />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">{'<'} Payload {'>'}</label>
                  <textarea id="message" className="form-input form-textarea" placeholder="Enter encrypted message..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary terminal-btn hover-lift">
                  Transmit Data
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutContact;
