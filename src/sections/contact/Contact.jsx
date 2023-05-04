import './contact.css'
import contacts from './data'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Using emailjs to create the email form: https://www.emailjs.com/docs/examples/reactjs/
// Message update using React Toastify: https://www.npmjs.com/package/react-toastify

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  }; 

  const notify = () => {
    toast.success("Message Sent");
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Are you interested in connecting? I'd love to hear from you!</p>
      <div className="container contact__container">
        <div className="contact__left">
      
          
           
          {/* <div className="container socials__container">
            {
              contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
            }
          </div> */}
        </div>

        <div className='contact__right'>
          <div className='contact-form-div'>
            <form ref={form} onSubmit={sendEmail} className='contact-form-div'>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input onClick={notify} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>

     
      {/* <div className="container socials__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div> */}
    </section>
  )
}

export default Contact

