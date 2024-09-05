const express = require('express');
const mailController = require('../controllers/MailController.js');

const router = express.Router();

router.post('/', mailController.sendEmail);



module.exports = router;