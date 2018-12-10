var express = require('express');
var router = express.Router();
const { renderRegister, handleRegistration } = require('../controllers/register')
var { hashPassword } = require('../database')
const { check } = require('express-validator/check')

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

router.get('/', renderRegister);

router.post('/', [
  // check('email').escape().isEmail().normalizeEmail(),
  // check('name').escape().not().isEmpty().isString(),
  // check('surname').escape().not().isEmpty().isString(),
  // check('password').escape().not().isEmpty(),
  // check('repassword').escape().not().isEmpty(),
  pwdAndRePwdMatch,
  hashPasswordMiddleware,
  reportError,
],
  handleRegistration
)

module.exports = router;
