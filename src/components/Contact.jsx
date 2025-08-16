import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* Header */}
      <div className="section-head contact-head">
        <h2 className="section-title red">Get In Touch</h2>
        <p className="subtitle">Do you have a project I can help you with? Let’s talk about it.</p>

        {/* Icons row — update the hrefs */}
        <div className="contact-icons" aria-label="contact links">
          <a className="contact-icon" href="mailto:saisudhapidugu@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a className="contact-icon" href="https://github.com/sudhasai783" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="contact-icon" href="https://www.linkedin.com/in/saisudha19072000/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Form card (Formspree) */}
      <div className="contact-card">
        <form action="https://formspree.io/f/xanbkkgr" method="POST">
          <label className="label" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your full name" required />

          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required />

          <label className="label" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message" required />

          <input type="hidden" name="_subject" value="New message from portfolio site" />
          {/* Optional redirect after submit:
          <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html" /> */}

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
