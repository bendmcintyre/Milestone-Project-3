const express = require('express');
const router = express.Router();
const petController = require('./controllers/petController');

// Routes
router.get('/pets', async (req, res, next) => {
  try {
    const allPets = await petController.getAllPets();
    //const allPets = [{name:"flim"},{name:"billy"}]
    res.json(allPets);
  } catch (err) {
    next(err);
  }
});

router.get('/pet/:id', async (req, res, next) => {
  try {
    const pet = await petController.getPet(req.params.id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/pet', async (req, res, next) => {
  try {
    const newPet = await petController.createPet(req.body);
    res.json(newPet);
  } catch (err) {
    next(err);
  }
});

router.post('/api/contact', async (req, res, next) => {
    try {
      const { name, email, subject, message } = req.body;
      const contactForm = new ContactForm({ name, email, subject, message });
      await contactForm.save();
      console.log('Contact form saved:', contactForm);
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  });
  

router.put('/pet/:id', async (req, res, next) => {
  try {
    const updatedPet = await petController.updatePet(req.params.id, req.body);
    if (updatedPet) {
      res.json(updatedPet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/pet/:id', async (req, res, next) => {
  try {
    const deletedPet = await petController.deletePet(req.params.id);
    if (deletedPet) {
      res.json({ message: 'Pet deleted' });
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (err) {
    next(err);
  }
});



module.exports = router;
