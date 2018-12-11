const express = require('express');
const router = express.Router();
const passport = require('passport');
const api = require('../../controllers/api')

router.use(function(req, res, next) {
    console.log(req.get('authorization'))
    next()
})

router.post('/login', api.requestJWTusingLocal);

router.get('/secret', passport.authenticate('jwt'), function(req, res, next) {
    res.json({
        bezpieczenstwo: 'poziom 100'
    })
})

module.exports = router;
