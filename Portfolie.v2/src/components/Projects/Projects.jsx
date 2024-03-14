import '../../App.css';
import './Projects.css';
import techBlogImg from '../../assets/img/Techblog-img.png';

export const Projects = () => {
    const projects = [
        {
          title: "Tech Blog",
          description: "Tech Blog application for users to share and discuss the latest trends and insights in technology. This platform allows users to create, edit, and delete their posts, as well as comment on other users' posts.",
          imageUrl: techBlogImg, 
          liveUrl: "https://aqueous-bastion-73706-3db583281a72.herokuapp.com/", 
          codeUrl: "https://github.com/SanyamSamS/Tech-Blog" 
        },
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          liveUrl: "#", // Replace with your live URL
          codeUrl: "#" // Replace with your code URL
        },
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          liveUrl: "#", // Replace with your live URL
          codeUrl: "#" // Replace with your code URL
        },
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          liveUrl: "#", // Replace with your live URL
          codeUrl: "#" // Replace with your code URL
        },
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          liveUrl: "#", // Replace with your live URL
          codeUrl: "#" // Replace with your code URL
        },
        {
          title: "Project 1",
          description: "This is a brief description of Project 1, highlighting its purpose and what technologies were used.",
          imageUrl: "path/to/image", // Replace image path
          liveUrl: "#", // Replace with your live URL
          codeUrl: "#" // Replace with your code URL
        },
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
                    <a className='btn-primary' href={project.liveUrl} target="_blank">Live App</a>
                    <a className='btn-secondary' href={project.codeUrl} target="_blank">Source Code</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};
