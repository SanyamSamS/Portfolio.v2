import '../../App.css';
import './Projects.css';
import techBlogImg from '../../assets/img/Techblog-img.png';

export const Projects = () => {
  
  const projects = [
      {
        title: "ChatterBox",
        description: "A chat messaging app that enables users to sign up, personalize their profiles, connect with friends, and secure their accounts with user authentication.",
        imageUrl: techBlogImg, // Replace image path
        liveUrl: "#", // Replace with your live URL 
        codeUrl: "https://github.com/SanyamSamS/ChatterBox" 
      },
      {
        title: "BrimLoft",
        description: "An ecommerce store for hat enthusiasts, featuring user authentication, personalized profiles, and an intuitive shopping interface to explore and purchase stylish hats.",
        imageUrl: techBlogImg, // Replace image path
        liveUrl: "https://protected-gorge-42703-db942224a3bb.herokuapp.com/", 
        codeUrl: "https://github.com/waltscode/BrimLoft" 
      },
      {
        title: "Movies Recommender",
        description: "A personalized movie trailer platform, offering extensive access to trailers through YouTube and OMDB API integrations. Users can save favorites to curate their own collection.",
        imageUrl: techBlogImg, // Replace image path
        liveUrl: "https://teamprojectmoviereview.github.io/Team-Project-/", 
        codeUrl: "https://github.com/SanyamSamS/Movie-recommendation" 
      },      
      {
        title: "Tech Blog",
        description: "A blog application for users to share and discuss the latest trends in technology. Users can post, edit, delete, and comment on tech trends and insights.",
        imageUrl: techBlogImg, 
        liveUrl: "https://aqueous-bastion-73706-3db583281a72.herokuapp.com/", 
        codeUrl: "https://github.com/SanyamSamS/Tech-Blog" 
      },
      {
        title: "J.A.T.E",
        description: "A browser-based, single-page PWA Text Editor with advanced data persistence for reliable offline and online note and code snippet storage, utilizing IndexedDB and IDB.",
        imageUrl: techBlogImg, // Replace image path
        liveUrl: "https://agile-island-84938-92ea0572926b.herokuapp.com/", 
        codeUrl: "https://github.com/SanyamSamS/Text-editor" 
      },
      {
        title: "Coding Quiz",
        description: "A JavaScript fundamentals timed quiz app featuring a question series, time penalties for incorrect answers, and a local storage-based highscore leaderboard.",
        imageUrl: techBlogImg, // Replace image path
        liveUrl: "https://sanyamsams.github.io/Coding-Quiz/", 
        codeUrl: "https://github.com/SanyamSamS/Coding-Quiz" 
      },
    ];
  
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-grid row">
            {projects.map((project, index) => (
              <div className="project col-md-4 col-sm-12" key={index}>
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a className='btn-primary' href={project.liveUrl}>Live App</a>
                  <a className='btn-secondary' href={project.codeUrl}>Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};
