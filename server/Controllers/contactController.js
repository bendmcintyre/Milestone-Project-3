const ContactForm = require('../Models/contactForm');

exports.submitForm = async (req, res) => {
  try {
    const contactForm = new ContactForm(req.body);
    await contactForm.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
};
