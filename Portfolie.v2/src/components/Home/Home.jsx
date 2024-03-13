import '../../App.css';
import './Home.css';

export const Home = () => {   
    return (
        <section id="home" className="home-section">
          <div className="container">
            <div className="intro-text">
              <h1>Hi I'm Sanyam</h1>
              <p>Full Stack Web Developer.</p>
              <a href="#about" className="btn btn-primary">Learn More About Me</a>
            </div>
          </div>
        </section>
    );
};