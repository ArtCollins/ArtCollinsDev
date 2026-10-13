import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import AboutContact from './components/AboutContact';
import './App.css'; // Optional: if there's global app layout styling needed

function App() {
  return (
    <div className="app-wrapper">
      <nav className="site-nav">
        <div className="nav-brand">{'<'} AC {'>'}</div>
        <div className="nav-links">
          <a href="#projects">Deployments</a>
          <a href="#contact">Terminal</a>
        </div>
      </nav>
      
      <main>
        <Hero />
        <ProjectShowcase />
        <AboutContact />
      </main>
      
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Art Collins. Intelligent Applications & UI Architecture.</p>
      </footer>
    </div>
  );
}

export default App;
