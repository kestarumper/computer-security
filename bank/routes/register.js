var express = require('express');
var router = express.Router();
var argon2 = require('argon2')
var { insertUser, hashPassword } = require('../database')
const { check, validationResult } = require('express-validator/check')

async function hashPasswordMiddleware(req, res, next) {
  const pwd = req.body.password;
  if (pwd) {
    req.body.password = await hashPassword(pwd)
  }
  next()
}

async function pwdAndRePwdMatch(req, res, next) {
  const pwd = req.body.password;
  const repwd = req.body.repassword;
  if (pwd !== repwd) {
    return next(new Error("ReTyped password doesn't match the original."))
  }
  next()
}

function reportError(err, req, res, next) {
  if(err) {
    console.error(err)
    return res.json({message: err.message})
  }
  next();
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('register', { title: "Rejestracja" });
});

router.post('/', [
  check('email').escape().isEmail().normalizeEmail(),
  check('name').escape().not().isEmpty().isString(),
  check('surname').escape().not().isEmpty().isString(),
  check('password').escape().not().isEmpty(),
  check('repassword').escape().not().isEmpty(),
  pwdAndRePwdMatch,
  hashPasswordMiddleware,
  reportError,
],
  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const { email, name, surname, password } = req.body
    // res.json(req.body)
    const response = await insertUser(email, name, surname, password)
    res.redirect('/login')
  }
)

module.exports = router;
