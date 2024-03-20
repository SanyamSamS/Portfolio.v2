import '../../App.css';
import './About.css';
import jsIcon from '../../assets/img/js-icon.png';

export const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="row gx-3">

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
              <ul className='skill-list'>
                <li><i className="fa fa-html5"></i> HTML</li>
                <li><i className="fa fa-css3"></i> CSS</li>
                <li><img src={jsIcon} /> JavaScript</li>
                <li><i className="fa-brands fa-react"></i> React.js</li>
                <li><i className="fa fa-database"></i> MongoDB, SQL</li>
                <li><i className="fa fa-node-js"></i> Node.js, Express.js</li>
                <li><i className="fa fa-bootstrap"></i> Bootstrap, <i className="fa fa-wind"></i> Tailwind</li>
                <li><i className="fa fa-github"></i> GitHub</li>
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

