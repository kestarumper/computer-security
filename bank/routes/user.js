var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');
var {findUserById} = require('../database')
 
function logout(req, res, next) {
  req.session.destroy(function(err) {
    if(err) {
      console.error(err)
    }
  })
  res.redirect('/login')
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const user = req.user
  if(!user) {
    return res.redirect('/login')
  }
  res.render('user', {title: "Moje konto", user})
});

router.get('/logout', logout)


module.exports = router;
