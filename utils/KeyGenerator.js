const crypto = require('crypto');

// Class to generate a secure random key
class KeyGenerator {
    static generateKey(length = 32) {
        return crypto.randomBytes(length).toString('hex');
    }
}

module.exports = { KeyGenerator }