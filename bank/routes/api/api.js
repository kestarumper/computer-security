const express = require('express');
const router = express.Router();
const passport = require('passport');
const api = require('../../controllers/api')

router.use(function(req, res, next) {
    const authHeader = req.get('authorization');
    if(authHeader) {
        console.log(authHeader)
    }
    next()
})

router.post('/login', api.requestJWTusingLocal);

router.post('/transfer/new', passport.authenticate('jwt'), api.makeTransfer)

router.get('/secret', passport.authenticate('jwt'), function(req, res, next) {
    res.json({
        bezpieczenstwo: 'poziom 100'
    })
})


module.exports = router;
