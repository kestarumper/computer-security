const passport = require('passport')
const JWT = require('jsonwebtoken');
const { createTransfer } = require('../database')

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_OPTIONS = {
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
    algorithm: process.env.JWT_ALGORITHM,
    expiresIn: process.env.JWT_EXPIRESIN
}

function generateJWTfromPayload(payload) {
    return new Promise((resolve, reject) => {
        JWT.sign(payload, JWT_SECRET, JWT_OPTIONS, (err, token) => {
            if(err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })
}

async function makeTransfer(req, res, next) {
    const {id, iban, money} = req.body
    const response = await createTransfer(id, iban, money).catch(err => err);
    if(response.errno) {
        res.sendStatus(500)
    } else {
        res.sendStatus(200)
    }
}

function requestJWTusingLocal(req, res, next) {
    passport.authenticate('local', async function(err, user, info) {
        if(err) { return next(err); }
        if(!user) { return res.sendStatus(401); }
        const jwt = await generateJWTfromPayload({ id: user.id });
        res.send(jwt)
    })(req, res, next);
}

module.exports = {
    requestJWTusingLocal,
    makeTransfer
}