const { Reservations, Guests } = require('../models/Models');

// make a reservation

const makeResevation = async(req,res) => {
    const { houseId, startDate, endDate, 
        numberPersons,firstname, lastname, 
        email, phone } = req.body;
    
    try {

        const reservation = await Reservations.create(
            {
                house_id: houseId,
                check_in: startDate,
                check_out: endDate,
                number_persons: numberPersons,
                guestId: Guests.id,
                Guests: {
                    firstname: firstname,
                    lastname: lastname,
                    phone: phone,
                    email: email,
                    reservationId: Reservations.id
                }
            },
            { include: { model: Guests, as: 'Guests'} }
            );

        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { makeResevation }