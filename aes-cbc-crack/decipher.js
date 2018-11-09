const crypto = require('crypto');
const fs = require('fs');

function decrypt(key, iv, encrypted) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const inputFileName = process.argv[2]
const iv = Buffer.from(process.argv[3], 'hex');
const encrypted = fs.readFileSync(inputFileName).toString();
const key = Buffer.from('8b6011371154c3afd9fa4cc37e7387b7f60e717b4b213dc8043b10778c882393', 'hex');

console.log(decrypt(key, iv, encrypted));