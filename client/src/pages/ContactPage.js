import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(response => {
        console.log('Message sent!', response.data);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {submitted && <p>Thank you! Your message has been sent.</p>}
    </div>
  );
};

export default ContactPage;
