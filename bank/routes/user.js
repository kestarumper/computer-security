var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');
var { findUserById, createTransfer } = require('../database')

function logout(req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    res.redirect('/login')
  })
}

function checkIfLogged(req, res, next) {
  if (!req.user) {
    return res.redirect('/login')
  } else {
    next()
  }
}

router.use(checkIfLogged);

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const user = req.user
  res.render('user', { title: "Moje konto", user })
});

/* GET users listing. */
router.get('/transfer', function (req, res, next) {
  res.render('transfer', { title: "Nowy przelew" });
});

router.post('/transfer/confirm', function (req, res, next) {
  const { iban, money } = req.body
  if(!iban || !money) {
    return next(new Error("Brak wymaganych danych."))
  }
  res.render('transfer_confirm', {
    title: "Potwierdź przelew",
    confirm: {
      to_id: iban,
      money: money
    }
  })
})

router.post('/transfer/execute', async function (req, res, next) {
  const { iban, money } = req.body
  const user = req.user;
  const response = await createTransfer(user.id, iban, money).catch((err) => {
    console.error(err)
    return next(new Error("Błędne dane. Przelew nie został wykonany"))
  });
  if(response) {
    res.render('transfer_execute', {
      title: "Serwer otrzymał przelew",
      confirm: {
        to_id: iban,
        money: money
      }
    })
  }
})

router.get('/logout', logout)


module.exports = router;
