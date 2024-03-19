import '../../App.css';
import './Home.css';
import meLaptopImg from '../../assets/img/me-laptop.png';
import PDF from '../../assets/files/resume.pdf';

export const Home = () => {   
  
  const handleDownload = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        open(fileURL, '_blank')  
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "sanyam_resume.pdf";
        alink.click(); 
      });
    });
  };

  return (
      <section id="home" className="home-section">
        <div className="container">
          <img src={meLaptopImg} alt="Me with Laptop" className="home-img" />
          <div className="intro-text">
            <h1>Hi I'm Sanyam</h1>
            <p>Full Stack Web Developer</p>
            <a href="#about" className="btn-primary">Learn More</a>
            <a onClick={handleDownload} href="#" className="btn-secondary">Resume</a>
          </div>
        </div>
      </section>
  );
};