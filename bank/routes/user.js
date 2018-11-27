const express = require('express');
const router = express.Router();
const csrf = require('csurf')
const { renderUserPage } = require('../controllers/user')
const { renderNewTransfer, renderTransferList, renderTransferConfirm, renderTransferExecute } = require('../controllers/transfer')

const csrfProtection = csrf();

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
router.get('/logout', logout)
router.get('/transfer/list', renderTransferList);

router.get('/transfer', csrfProtection, renderNewTransfer);
router.post('/transfer/confirm', csrfProtection, renderTransferConfirm)
router.post('/transfer/execute', csrfProtection, renderTransferExecute)



module.exports = router;
