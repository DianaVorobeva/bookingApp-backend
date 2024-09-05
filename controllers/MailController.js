const { sendMail } = require('../utils/mailer.js');
const path = require('path');

const sendEmail = async (req,res) => {
    const { email, firstname, lastname } = req.body;
    const text = `Hello ${firstname} ${lastname}, your reservation has been made successfully.`;
	try {
    await sendMail({
        to: email,
        subject: 'Forest Houses', 
        text: text
    })
    return res.send('Email sent successfully')
	
	} catch (error) {
		console.log(error)
	}
}

module.exports = { sendEmail };