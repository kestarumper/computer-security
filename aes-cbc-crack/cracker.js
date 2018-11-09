const crypto = require('crypto');
const fs = require('fs');

console.log(process.argv)

const totalNumberOfWorkers = process.argv[6];
const cyclicIgnoreHash = process.argv[5];
const inputFileName = process.argv[2]
const iv = Buffer.from(process.argv[3], 'hex');
const strSuffix = process.argv[4];
const encrypted = fs.readFileSync(inputFileName).toString();

function decrypt(key, iv, str) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(str, 'base64', 'utf8');
    try {
        decrypted += decipher.final('utf8');
    } catch (e) {

    }
    return decrypted;
}

function hexStrToBuffer(str) {
    if (str.length % 2) {
        str = '0' + str;
    }
    return Buffer.from(str, 'hex');
}

function calculateRemainingPrefixBuffer(suffix) {
    const size = 32 - suffix.length;
    const prefix = Buffer.alloc(size);
    return Buffer.concat([prefix, suffix], 32);
}

function incrementBuffer(buf, byteOffset, half = 0) {
    for (var i = buf.length - 1 - byteOffset + half; i >= 0; i--) {
        if (buf[i]++ !== 255) break;
    }
    return buf;
}

function containsNormalWord(dict, decrypted) {
    let result = -1;
    decrypted = decrypted.split(' ');
    for (const word of dict) {
        result = decrypted.indexOf(word);
        if (result >= 0) {
            console.log('FOUND ' + word);
            break;
        }
    }
    return result >= 0;
}

function filterOnlyASCII(str) {
    return str.replace(/[^\x20-\x7E]/g, "");
}

const suffix = hexStrToBuffer(strSuffix);
const workinghash = calculateRemainingPrefixBuffer(suffix);
const halfByte = strSuffix.length % 2;

const prefixLen = 32 - suffix.length;
const lastPrefix = Buffer.concat([Buffer.alloc(prefixLen, 255), suffix], 32);

const dictionary = fs.readFileSync('./usedDict.txt').toString().split(',').filter((word) => {
    return word.length > 3;
})

console.log({
    suffix,
    workinghash,
    iv,
    encrypted,
    lastPrefix,
})

let key = workinghash;
let decrypted = ""
while (Buffer.compare(lastPrefix, key) === 1) {
    if(key[key.length - 1 - suffix.length + halfByte] % totalNumberOfWorkers === cyclicIgnoreHash) {
        decrypted = decrypt(key, iv, encrypted);
        if(containsNormalWord(dictionary, decrypted)) {
            console.log(key)
            console.log(decrypted);
            console.log('\n')
        }
    }
    key = incrementBuffer(key, suffix.length, halfByte);
}