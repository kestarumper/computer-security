var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title: "Login"});
});

router.post('/',
  passport.authenticate('local', {failureRedirect: '/kappa'}),
  function(req, res, next) {
    console.log("USER LOGGED IN!")
    res.json(req.user);
  }
);

module.exports = router;
