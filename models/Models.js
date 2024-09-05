const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Houses = sequelize.define('Houses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrimant: true},
    title:  {type: DataTypes.STRING, unique: true},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)},
    price: {type: DataTypes.INTEGER},
    bedrooms: {type: DataTypes.INTEGER},
    bathrooms: {type: DataTypes.INTEGER},
    capacity: {type: DataTypes.INTEGER}
}, { timestamps: false});

const Reservations = sequelize.define('Reservations', {
    id: {type: DataTypes.UUID, allowNull: false,
    autoIncrement: false, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    house_id: {type: DataTypes.INTEGER},
    check_in: {type: DataTypes.STRING},
    check_out: {type: DataTypes.STRING},
    number_persons: {type: DataTypes.INTEGER},
    guestId: {type: DataTypes.UUID}
});

const Guests = sequelize.define('Guests', {
    id: {type: DataTypes.UUID, allowNull: false,
    autoIncrement: false, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    lastname: {type: DataTypes.STRING, allowNull: false},
    firstname: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, isEmail: true},
    phone: {type: DataTypes.STRING}
});

// const ReservedHouses = sequelize.define('ReservedHouses', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrimant: true},
//     houseId: {type: DataTypes.INTEGER, references: {model: Houses, key: 'id'}},
//     guestId: {type: DataTypes.INTEGER, references: {model: Guests, key: 'id'}},
//     reservationId: {type: DataTypes.INTEGER, references: {model: Reservations, key: 'id'}},
//     check_in: {type: DataTypes.STRING},
//     check_out: {type: DataTypes.STRING},
//     totalPrice: {type: DataTypes.INTEGER},
//     status: {type: DataTypes.STRING}
// });

// const OccupiedHouses = sequelize.define('OccupiedHouses', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrimant: true},
//     houseId: {type: DataTypes.INTEGER, references: {model: Houses, key: 'id'}},
//     guestId: {type: DataTypes.INTEGER, references: {model: Guests, key: 'id'}},
//     reservationId: {type: DataTypes.INTEGER, references: {model: Reservations, key: 'id'}},
//     check_in: {type: DataTypes.DATE},
//     check_out: {type: DataTypes.DATE},
//     status: {type: DataTypes.STRING}
// });

Houses.hasMany(Reservations, {foreignKey: 'house_id'})
Reservations.belongsTo(Houses, {foreignKey: 'house_id'});

// Reservations.hasOne(Houses, {foreignKey: 'reservationId'});
// Houses.belongsTo(Reservations, {foreignKey: 'reservationId'});

Guests.hasMany(Reservations, {foreignKey: 'guestId', as: 'Guests'});
Reservations.belongsTo(Guests, {foreignKey: 'guestId', as: 'Guests'});

// Reservations.hasOne(Guests);
// Guests.belongsTo(Reservations);




module.exports = {
    Houses,
    Guests,
    Reservations,
    // ReservedHouses,
};
