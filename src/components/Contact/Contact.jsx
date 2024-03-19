import '../../App.css';
import './Contact.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const [ formState, setFormState ] = useState({
      name: '',
      email: '',
      message: ''
  });

  const { name, email, message } = formState;
  const formRef = useRef();

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y41czsf', 'template_mbtpg0b', formRef.current, 'XAYtiaZ8vLatU-noJ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setFormState({name: "", email: "", message: ""});
  }

  return (
  <section id="contact" className="contact-section">
    <div className="container">
      
      <div className="row">
        
          <h2>Contact Me</h2>

          <div className="contact-info col-lg-6 col-md-6 col-sm-12 order-md-2 order-2 row">

            <div className="contact-box">
              <a href="#contact" className="contact-box">
                <i class="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>sanyam.edu@gmail.com</p>
              </a>
            </div>

            <div className="contact-box">
              <a href="https://github.com/SanyamSamS" className="contact-box" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github"></i>
                <h4>GitHub</h4>
                <p>SanyamSamS</p>
              </a>
            </div>

            <div className="contact-box">
              <a href="https://www.linkedin.com/in/sanyam-singh-a16a83200/" className="contact-box" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin"></i>
                <h4>LinkedIn</h4>
                <p>Sanyam (Sam) Singh</p>
              </a>
            </div>

          </div>

          
          <div className="col-lg-6 col-md-6 col-sm-12 order-md-2 order-1">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <h3>Send me a message</h3>
              <input type="text" placeholder="Your Name" required onChange={handleChange} name='name' value={name}/>
              <input type="email" placeholder="Your Email" required onChange={handleChange} name='email' value={email} />
              <textarea placeholder="Your Message" required onChange={handleChange} name='message' value={message}></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

      </div>
    </div>
  </section>
  );
};


// Service ID:service_y41czsf
// Template ID:template_mbtpg0b
// Public key api: XAYtiaZ8vLatU-noJ
