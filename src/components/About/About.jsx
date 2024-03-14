import '../../App.css';
import './About.css';

export const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="row">

          {/* Me Box */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="info-box">
              <h3>Me</h3>
              <p>Me</p>
            </div>
          </div>

          {/* Skills Box */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="info-box">
              <h3>Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>MongoDB, SQL</li>
                <li>Node.js, Express.js</li>
              </ul>
            </div>
          </div>

          {/* Education Box */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="info-box">
              <h3>Education</h3>
              <p>University of Toronto Full Stack Development Certificate</p>
              <p>University of Toronto Honours Bachelor of Science</p>
              <p>Immigration Pracitioner Diploma: Law, Policies and Procedure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

