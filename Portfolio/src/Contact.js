import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:theertha.r2023aiml@sece.ac.in" className="contact-link">
            theertha.r2023aiml@sece.ac.in
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            My GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            My LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
