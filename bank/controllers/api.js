const passport = require('passport')
const JWT = require('jsonwebtoken');

const JWT_SECRET = "adasamoloty"
const JWT_OPTIONS = {
    algorithm: 'HS256',
    expiresIn: '1h'
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

function requestJWTusingLocal(req, res, next) {
    passport.authenticate('local', async function(err, user, info) {
        if(err) { return next(err); }
        if(!user) { return res.sendStatus(401); }
        const jwt = await generateJWTfromPayload({ id: user.id });
        res.send(jwt)
    })(req, res, next);
}

module.exports = {
    requestJWTusingLocal
}