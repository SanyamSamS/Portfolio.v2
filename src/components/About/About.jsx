import '../../App.css';
import './About.css';

export const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="row gx-3">

          {/* Skills Box */}
          <div className="col-lg-4 col-md-4 col-sm-12 order-2">
            <div className="info-box">
              <h3>Skills</h3>
              <ul className='skill-list'>
                <li><i className="fa fa-html5"></i> HTML</li>
                <li><i className="fa fa-css3"></i> CSS</li>
                <li><i className="material-symbols-outlined">javascript</i> JavaScript</li>
                <li><i className="fa-brands fa-react"></i> React.js</li>
                <li><i className="fa fa-database"></i> MongoDB, SQL</li>
                <li><i className="fa fa-node-js"></i> Node.js</li>
                <li> Express.js</li>
                <li><i className="fa fa-bootstrap"></i> Bootstrap 5</li>
                <li> <i className="fa fa-wind"></i> Tailwind</li>
                <li><i className="fa fa-github"></i> GitHub</li>
              </ul>
            </div>
          </div>

          {/* Me Box */}
          <div className="col-lg-4 col-md-4 col-sm-12 order-1">
            <div className="info-box">
              <h3>Me</h3>
              <p>I'm Sam, a Full Stack Web Developer, graduate from the University of Toronto's coding bootcamp. My journey into web development has been fueled by a passion for solving complex problems and creating user-friendly interfaces. I bring enthusiasm, a keen willingness to learn, and a commitment to developing high-quality web solutions. I'm excited to collaborate and grow alongside experienced teams, contributing fresh perspectives and innovative ideas. </p>
            </div>
          </div>

          {/* Education Box */}
          <div className="col-lg-4 col-md-4 col-sm-12 order-3">
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

