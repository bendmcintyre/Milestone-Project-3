import React, { useState } from "react";
import classes from '../styles/Contact.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const confirmation = window.confirm('Are you sure you want to submit the form?');
  if (!confirmation) {
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error:', errorResponse);
      throw new Error("Failed to submit form");
    }
    console.log("Form submitted successfully");
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className={classes.container}>
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className={classes.contactHeader1}>REPORT A DOG</h1>
        <h2 className={classes.contactHeader2}>FOUND AN ANIMAL?</h2>
        <p className={classes.contactText}>  If you have found an injured, endangered or unleashed animal, please contact us with the following information.

               • Location with cross streets if available
               • Time you saw the animal
               • Any details about the animal
            If you’ve taken a picture, please upload it with the form.
        </p>
      </div>
      <div>
        <h2 className={classes.contactHeader2}>GET IN TOUCH</h2>
          <p className={classes.contactText}>
            This is our general contact form. Contact us if you have any other questions that you might have or if you are interested in volunteering. 
            Otherwise, if you are interested in <a href="https://saferescueteam.org/adopt-a-pet/">adopting </a>
            or <a href="https://saferescueteam.org/become-a-foster/">fostering</a>, 
            please use the more in-depth form on the pages provided for each.
          </p>
      </div>
      <div>
        <label htmlFor="name">Your Name: *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Your Email: *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" >Send</button>
    </form>
    </div>
  );
};

export default ContactForm;