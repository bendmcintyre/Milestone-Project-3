const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactController');

router.post('/contact', contactController.submitForm);

module.exports = router;
