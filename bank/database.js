var mysql = require('promise-mysql')
var argon2 = require('argon2')
const passwordGenerator = require('generate-password')

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mucha6950',
    database: 'bank',
    connectionLimit: 10
});

function insertUser(email, name, surname, password) {
    return pool.query("INSERT INTO `user` (`id_user`, `email`, `name`, `surname`, `password`) VALUES (NULL, ?, ?, ?, ?)", [email, name, surname, password])
}

function findUserById(id) {
    return pool.query('SELECT id_user AS id, email, name, surname, balance, type FROM user WHERE id_user = ?', [id])
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

function hashPassword(pass) {
    const options = {
        timeCost: 4, memoryCost: 2 ** 13, parallelism: 2, type: argon2.argon2d
    };
    return argon2.hash(pass, options)
}

async function setNewGeneratedPassword(email) {
    const newPass = passwordGenerator.generate({ length: 16, numbers: true });
    const newPassHashed = await hashPassword(newPass);
    return pool.query('UPDATE user SET password = ? WHERE email = ?', [newPassHashed, email])
        .then((response) => {
            console.log(`Generated new password for ${email}`);
            console.log(response)
            return newPass
        })
}

async function validateUser(email, challengePassword) {
    const result = await findUserByEmail(email)
    try {
        const { id_user, password } = result;
        if (!id_user) {
            throw Error(`Incorrect credentials`)
        }
        if (await argon2.verify(password, challengePassword)) {
            return await findUserById(id_user)
        } else {
            throw Error(`Incorrect credentials`)
        }
    } catch (err) {
        return null;
    }
}

module.exports = {
    pool,
    findUserById,
    findUserByEmail,
    validateUser,
    insertUser,
    hashPassword,
    setNewGeneratedPassword
};