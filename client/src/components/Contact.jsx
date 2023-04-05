import React, { useState } from "react";
 



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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your server-side implementation goes here
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>REPORT A DOG</h1>
        <h2>FOUND AN ANIMAL?</h2>
        <p>  If you have found an injured, endangered or unleashed animal, please contact us with the following information.

               • Location with cross streets if available
               • Time you saw the animal
               • Any details about the animal
            If you’ve taken a picture, please upload it with the form.
        </p>
      </div>
      <div>
        <h2>GET IN TOUCH</h2>
          <p>
            This is our general contact form. Contact us if you have any other questions that you might have or if you are interested in volunteering. 
            Otherwise, if you are interested in <a href="https://saferescueteam.org/adopt-a-pet/">adopting</a>
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
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
