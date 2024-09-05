const express = require('express');
const resevationController = require('../controllers/ReservationController.js');

const router = express.Router();

router.post('/', resevationController.makeResevation);

module.exports = router;