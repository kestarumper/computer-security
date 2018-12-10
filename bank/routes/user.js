const express = require('express');
const router = express.Router();
const csrf = require('csurf')
const { renderUserPage } = require('../controllers/user')
const { renderNewTransfer, renderTransferList, renderTransferConfirm, renderTransferExecute } = require('../controllers/transfer')
const { acceptTransfer, rejectTransfer } = require('../controllers/admin')

// const csrfProtection = csrf();

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

function checkIfAdmin(req, res, next) {
  if (req.user.type !== 'admin') {
    return res.redirect('/user')
  } else {
    next()
  }
}

router.use(checkIfLogged);

/* GET users listing. */
router.get('/', renderUserPage);
router.get('/logout', logout)
router.get('/transfer/list', renderTransferList);

router.get('/transfer', renderNewTransfer);
// router.get('/transfer', csrfProtection, renderNewTransfer);
router.post('/transfer/confirm', renderTransferConfirm)
// router.post('/transfer/confirm', csrfProtection, renderTransferConfirm)
router.post('/transfer/execute', renderTransferExecute)
// router.post('/transfer/execute', csrfProtection, renderTransferExecute)

router.get('/admin/transfer/accept/:id', checkIfLogged, checkIfAdmin, acceptTransfer)
router.get('/admin/transfer/reject/:id', checkIfLogged, checkIfAdmin, rejectTransfer)



module.exports = router;
