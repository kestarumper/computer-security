var mysql = require('promise-mysql')
var argon2 = require('argon2')

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mucha6950',
    database: 'bank',
    connectionLimit: 10
});

function findUserById(id) {
    return pool.query('SELECT id_user AS id, email, name, surname, balance FROM user WHERE id_user = ?', [id])
        .then((users) => {
            return users[0]
        })
}

function findUserByEmail(email) {
    return pool.query('SELECT id_user, password FROM user WHERE email = ?', [email])
        .then((users) => {
            return users[0]
        })
}

async function validateUser(email, password) {
    const {id_user, password} = findUserByEmail(email);
    if(!userDbPwd) {
        throw Error(`User with email ${email} not found.`)
    }
    try {
        const userHashPwd = await argon2.hash(password);
        if(userDbPwd === userHashPwd) {
            return await findUserById(id_user)
        }
    } catch (err) {
        throw Error('Argon Error while hashing')
    }
    return null;
}

module.exports = {
    pool,
    findUserById,
    validateUser
};