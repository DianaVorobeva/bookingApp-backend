const nodemailer = require('nodemailer');
require('dotenv').config();


 
const transporter = nodemailer.createTransport({
    service: 'Gmail',
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
	}
});

exports.sendMail = (fields) => transporter.sendMail(fields);