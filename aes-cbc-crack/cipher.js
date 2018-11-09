const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash("sha256")

const secret = process.argv[4];
hash.update(secret)

const inputFileName = process.argv[2]
const iv = process.argv[3]
const key = hash.digest();

console.log({
    inputFileName,
    iv,
    secret,
    key: key.toString(),
    keyBuffer: key,
    length: key.length
})

const decipher = crypto.createCipheriv('aes-256-cbc', key, iv);

const input = fs.createReadStream(inputFileName);
const output = fs.createWriteStream(inputFileName + '.encoded');

input.pipe(decipher).pipe(output);