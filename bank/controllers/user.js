async function renderUserPage(req, res, next) {
    const user = req.user
    res.render('user', { title: "Moje konto", user })
}

module.exports = {
    renderUserPage
}