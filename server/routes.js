const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/about', controller.about);
router.get('/adopt', controller.adopt);
router.get('/contact', controller.contact);
router.get('/how-to-help', controller.howToHelp);

module.exports = router;
