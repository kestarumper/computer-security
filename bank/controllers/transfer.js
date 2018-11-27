var { createTransfer, getUserTransfers } = require('../database')

function renderNewTransfer(req, res, next) {
    res.render('transfer', { title: "Nowy przelew", csrfToken: req.csrfToken() });
}

function renderTransferConfirm(req, res, next) {
    const { iban, money } = req.body
    if (!iban || !money) {
        return next(new Error("Brak wymaganych danych."))
    }
    res.render('transfer_confirm', {
        title: "Potwierdź przelew",
        csrfToken: req.csrfToken(),
        confirm: {
            to_id: iban,
            money: money
        },
    })
}

async function renderTransferExecute(req, res, next) {
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
  }

async function renderTransferList(req, res, next) {
    const transfers = await getUserTransfers(req.user.id)
    res.render('transfer_list', { title: "Nowy przelew", transfers });
}

module.exports = {
    renderNewTransfer,
    renderTransferList,
    renderTransferConfirm,
    renderTransferExecute
}