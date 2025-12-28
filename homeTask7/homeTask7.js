const crypto = require('crypto');

function hash(text, alg= 'sha256') {
    return crypto.createHash(alg).update(text).digest('hex');
} 
