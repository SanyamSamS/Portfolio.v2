import '../../App.css';
import './About.css';

export const About = () => {
    return (
        <section id="about" className="about-section">
          <div className="container">
            <h2>About Me</h2>
            <p>Hello! I'm Sanyam, a passionate Full Stack Web Developer with a love for creating dynamic and responsive web applications that provide intuitive user experiences. With a solid foundation in both frontend and backend technologies, I strive to bridge the gap between graphical design and technical implementation, ensuring high performance and user-centric designs.</p>
            
            <div className="skills">
              <h3>Skills</h3>
              <ul className="skill-list">
                <li>University of Toronto Full Stack Developer Certificate</li>
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS</li>
                <li>Node.js and Express</li>
                <li>Database Management (SQL & NoSQL)</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
          </div>
        </section>
    );
};