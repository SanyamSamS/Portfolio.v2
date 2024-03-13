import '../../App.css';
import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Me</h2>
            <p>Have a question or want to work together? Let's talk.</p>
            
            <div className="contact-info">
              <p>Email: sanyam.edu@gmail.com</p>
              <p>GitHub: SanyamSamS</p>
            </div>
            
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
    );
};