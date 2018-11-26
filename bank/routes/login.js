var express = require('express');
var router = express.Router();
var passport = require('passport')
const { forgotPassword } = require('./mailer')

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.user) {
    return res.redirect('/user')
  }
  res.render('login', {title: "Login"});
});


router.get('/passrecover', function(req, res, next) {
  res.render('passrecover', {title: "Odzyskiwanie Hasła"});
});

router.post('/passrecover', async function(req, res, next) {
  console.log(req.body)
  const url = await forgotPassword(req.body.username).catch((err) => {
    return next(err)
  });
  if(url) {
    res.send(`<a href="${url}">Twoje nowe hasło w mailu</a>`)
  } else {
    res.sendStatus(500)
  }
});

router.post('/',
  passport.authenticate('local', {failureRedirect: '/login'}),
  function(req, res, next) {
    res.redirect('/user')
  }
);

module.exports = router;
