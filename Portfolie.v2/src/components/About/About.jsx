import '../../App.css';
import './About.css';

export const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="row">

            {/* Me Box */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="info-box">
                <h3>Me</h3>
                <p>A brief introduction about yourself, your interests, or background.</p>
              </div>
            </div>

            {/* Skills Box */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="info-box">
                <h3>Skills</h3>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  {/* Add more skills as needed */}
                </ul>
              </div>
            </div>

            {/* Education Box */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="info-box">
                <h3>Education</h3>
                <p>Your educational background, degrees, certifications, etc.</p>
              </div>
            </div>
            
            {/* Experience Box */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="info-box">
                <h3>Experience</h3>
                <p>Overview of your professional experience and major projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};