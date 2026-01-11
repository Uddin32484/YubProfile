import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Information</h2>

      <div className="contact-card">
        <div className="contact-row">
          <span className="label">Name:</span>
          <span className="value">Yub Uddin</span>
        </div>

        <div className="contact-row">
          <span className="label">Email:</span>
          <a className="value" href="mailto:UddinYub@Gmail.com">
            UddinYub@Gmail.com
          </a>
        </div>

        <div className="contact-row">
          <span className="label">Phone:</span>
          <span className="value">(347) 806-9984</span>
        </div>

        <div className="contact-row">
          <span className="label">Location:</span>
          <span className="value">Kansas City, USA</span>
        </div>

        <div className="contact-row">
          <span className="label">LinkedIn:</span>
          <a
            className="value"
            href="https://www.linkedin.com/in/yub32484"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click on LinkedIn
          </a>
        </div>

        <div className="contact-row">
          <span className="label">GitHub:</span>
          <a
            className="value"
            href="https://github.com/Uddin32484?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click on Git repositories
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
