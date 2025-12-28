const crypto = require('crypto'); // встроенный модуль

function hash(text, alg= 'sha256') {
    return crypto.createHash(alg).update(text).digest('hex');
}

console.log(hash('Hello', 'md5'));
console.log(hash('hello', 'md5'));
console.log(hash('Hello!', 'md5'));
console.log('---------'); 
console.log(hash('Hello'));
console.log(hash('hello'));
console.log(hash('Hello!')); 
