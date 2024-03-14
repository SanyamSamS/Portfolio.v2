import '../../App.css';
import './Contact.css';

export const Contact = () => {
    return (
    <section id="contact" class="contact-section">
      <div class="container">
        
        <div class="row">
          
            <h2>Contact Me</h2>
            <p>Get in touch!</p>

            <div class="col-lg-6 col-md-6 col-sm-12 order-md-1 order-2">
              <div className="contact-info">
                <p>Email: sanyam.edu@gmail.com</p>
                <p>GitHub: SanyamSamS</p>
              </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 order-md-2 order-1">
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

        </div>
      </div>
    </section>
    );
};