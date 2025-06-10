import React, { useState } from "react";
import "../styles/Contact.css"; // Ensure styling is applied

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Simulate form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">We'd love to hear from you! Send us a message.</p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
      )}
    </div>
  );
};

export default Contact;