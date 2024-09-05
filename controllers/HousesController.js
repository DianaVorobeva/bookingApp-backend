const { Houses } = require('../models/Models');

// create a new house

const createHouse = async(req,res) => {
    const { title, images, price, bedrooms, bathrooms, capacity } = req.body;

    try {
        const house = await Houses.create({title, images, price, bedrooms, bathrooms, capacity});
        res.status(201).json(house);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get all Houses

const getAllHouses = async(req,res) => {
        try {
            const houses = await Houses.findAll();
        res.status(200).json(houses);
       
        } catch (error) {
            res.status(500).json(error);
        }
        
};

// get one House

const getOneHouse = async(req,res) => {
    const { id }= req.params;

    try {
         const house = await Houses.findByPk(id);
    res.status(200).json(house);

    } catch (error) {
        res.status(500).json(error);
    }
   
};

module.exports = { createHouse, getAllHouses, getOneHouse };