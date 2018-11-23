const nodemailer = require('nodemailer');
const { findUserByEmail, setNewGeneratedPassword } = require('../database')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'y6k5g5gnuawdnusu@ethereal.email',
        pass: 'ehnZqmEdHhnS4mpwxw'
    }
});

async function forgotPassword(email) {
    return new Promise(async (resolve, reject) => {
        const password = await setNewGeneratedPassword(email).catch((err) => {
            reject(err)
        })
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Bank Ślunski" <passwordrecovery@bank.slunski.com>', // sender address
            to: `${email}`, // list of receivers
            subject: 'Password recovery', // Subject line
            text: `Your password: ${password}`, // plain text body
            html: `Your password: <b>${password}</b>` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error)
                return console.log(error);
            }
            resolve(nodemailer.getTestMessageUrl(info));
        });
    });
}

module.exports = {
    forgotPassword
}