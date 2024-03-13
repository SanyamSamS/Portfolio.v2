import '../../App.css';
import './Home.css';
import meLaptopImg from '../../assets/img/me-laptop.png';

export const Home = () => {   
    return (
        <section id="home" className="home-section">
          <div className="container">
            <img src={meLaptopImg} alt="Me with Laptop" className="home-img" />
            <div className="intro-text">
              <h1>Hi I'm Sanyam</h1>
              <p>Full Stack Web Developer.</p>
              <a href="#about" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </section>
    );
};