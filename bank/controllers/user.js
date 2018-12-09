const { ADMIN_TOOLS } = require('../database')

async function renderUserPage(req, res, next) {
    const user = req.user
    if(user.type === 'admin') {
        const transfers = await ADMIN_TOOLS.getAllTransfers();
        return res.render('admin', { title: "Admin panel", user, transfers })
    }
    res.render('user', { title: "Moje konto", user })
}

module.exports = {
    renderUserPage
}