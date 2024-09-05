const express = require('express');
const housesController = require('../controllers/HousesController.js');


const router = express.Router();
router.post('/', housesController.createHouse);
router.get('/', housesController.getAllHouses);
router.get('/:id', housesController.getOneHouse);

module.exports = router;