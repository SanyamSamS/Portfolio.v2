import '../../App.css';
import './Projects.css';

export const Projects = () => {
    const projects = [
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          demoUrl: "#", // Replace with your demo URL
          codeUrl: "#" // Replace with your code URL
        },
        // Add projects
      ];
    
      return (
        <section id="projects" className="projects-section">
          <div className="container">
            <h2>My Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <div className="project" key={index}>
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};
