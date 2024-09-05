require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/Models');
const cors = require('cors');
const HousesRoute = require('./routes/HousesRoute.js');
const FilterRoute = require('./routes/FilterRoute.js');
const ReservationRoute = require('./routes/ReservationRoute.js');
const MailRoute = require('./routes/MailRoute.js');
const { or } = require('sequelize');

PORT = process.env.PORT || 7000;

const app = express();
 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// parse application/json
app.use(bodyParser.json());

app.use('/houses', HousesRoute);
app.use('/reservation', ReservationRoute);
app.use('/filter', FilterRoute);
app.use('/sendEmail', MailRoute);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()