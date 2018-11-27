var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');
const { renderUserPage } = require('../controllers/user')
const { renderNewTransfer, renderTransferList, renderTransferConfirm, renderTransferExecute } = require('../controllers/transfer')

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
router.get('/', renderUserPage);

router.get('/transfer', renderNewTransfer);

router.get('/transfer/list', renderTransferList);

router.post('/transfer/confirm', renderTransferConfirm)

router.post('/transfer/execute', renderTransferExecute)

router.get('/logout', logout)


module.exports = router;
