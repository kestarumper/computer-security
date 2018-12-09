var { ADMIN_TOOLS } = require('../database')

async function acceptTransfer(req, res, next) {
    const transferId = req.params.id
    const response = ADMIN_TOOLS.markTransferAs(transferId).catch((err) => {
        console.error(err)
        return next(err)
    })
    return res.redirect('/user')
}

async function rejectTransfer(req, res, next) {
    const transferId = req.params.id
    const response = ADMIN_TOOLS.markTransferAs(transferId, 'rejected').catch((err) => {
        console.error(err)
        return next(err)
    })
    console.log(response)
    return res.redirect('/user')
}

module.exports = {
    acceptTransfer,
    rejectTransfer
}