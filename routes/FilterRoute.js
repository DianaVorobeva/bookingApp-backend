const express = require('express');
const filterController = require('../controllers/FilterController.js');

const router = express.Router();

router.post('/', filterController.filterHouses);


module.exports = router;