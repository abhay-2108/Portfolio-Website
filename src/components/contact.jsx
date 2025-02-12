import React, { useState } from 'react';
import '../styles/contact.css';
import SocialMedia from './SocialMedia';

const Contact = () => {
  // Create state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Update state as user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission by creating a mailto link
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:abhaytiwari0821@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section" id="contact">
      <div className="title">
        <h2 className="about">Contact Me</h2>
      </div>
      <div className="contact-details">
        <div className="left-contact">
          {/* <section>Contact Me</section> */}
          <p>
            Feel free to share your messages, views, ideas &amp; suggestions with me through various available mediums mentioned here...
          </p>
          <SocialMedia />
        </div>
        <div className="right-content">
          <section className="msg">Message Me</section>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
