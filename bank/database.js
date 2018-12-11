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

const ADMIN_TOOLS = {
    getAllTransfers: function() {
        return pool.query("SELECT id_transfer, status, CONCAT(user1.name, ' ', user1.surname) AS fromname, CONCAT(user2.name, ' ', user2.surname) AS toname, id_user_from AS `from`, id_user_to AS `to`, value FROM ((transfer JOIN user AS user1 ON transfer.id_user_from = user1.id_user) JOIN user AS user2 ON transfer.id_user_to = user2.id_user)")
    },

    markTransferAs: function(id, status = 'accepted') {
        return pool.query("UPDATE transfer SET status = ? WHERE id_transfer = ?", [status, id])
    }
}

function getUserTransfers(id) {
    return pool.query("SELECT CONCAT(user1.name, ' ', user1.surname) AS fromname, CONCAT(user2.name, ' ', user2.surname) AS toname, id_user_from AS `from`, id_user_to AS `to`, value FROM ((transfer JOIN user AS user1 ON transfer.id_user_from = user1.id_user) JOIN user AS user2 ON transfer.id_user_to = user2.id_user) WHERE id_user_from = ? OR id_user_to = ?", [id, id])
}

function createTransfer(from_id, to_id, value) {
    return pool.query("INSERT INTO `transfer` (`id_transfer`, `id_user_from`, `id_user_to`, `value`, `datetime`, `status`) VALUES (NULL, "+from_id+", "+to_id+", "+value+", CURRENT_TIMESTAMP, 'pending');");
}

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
            if(response.affectedRows === 0) {
                throw new Error("That email doesn't exist")
            }
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
    setNewGeneratedPassword,
    createTransfer,
    getUserTransfers,
    ADMIN_TOOLS
};