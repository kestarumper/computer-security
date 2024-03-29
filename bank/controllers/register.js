const { validationResult } = require('express-validator/check')
const { insertUser, hashPassword } = require('../database')

function renderRegister(req, res, next) {
    res.render('register', { title: "Rejestracja" });
}

async function handleRegistration(req, res, next) {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() })
    // }
    const { email, name, surname, password } = req.body
    const hPass = await hashPassword(password).catch((err) => {
        return next(err)
    })
    const response = await insertUser(email, name, surname, hPass).catch((err) => {
        return next(new Error('Error '))
    })
    res.redirect('/login')
  }

module.exports = {
    renderRegister,
    handleRegistration
}