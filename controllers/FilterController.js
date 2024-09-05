const { Op } = require('sequelize');
const { Houses } = require('../models/Models');
const { Reservations } = require('../models/Models');



const filterHouses = async(req,res) => {
    const {  startDate, endDate, numberPersons }=  req.body;


    try {
        const allHouses = await Houses.findAll({
            required: false,
            where:{
                capacity: {[Op.gte]: numberPersons}
          }}
        );
        const bookedHouses = await Houses.findAll({
                required: false,
     
          
            include: [
                {
                  model: Reservations,
                  where: {
                    check_in: { [Op.eq]: startDate },
                    check_out: { [Op.eq]: endDate },
                  },
                },
              ],
        }
        );
        const availableHouses = allHouses.filter(item => bookedHouses.every(el => el.id !== item.id));
        res.status(200).json(availableHouses);

    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports =  {  filterHouses };
