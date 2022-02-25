import validator from 'validator';

let email = 'wanderson_timoteo@hotmail.com';
let ip = '192.190.0.12'


// Verifica se é um e-mail valido e retorna true ou false
console.log( validator.isEmail('wanderson_timoteo@hotmail.com'));
console.log( validator.isEmail('gyibufiuybfuy'));

console.log( validator.isEmail(email));

// Verifica se é um endereço de IP valido
console.log( validator.isIP(ip));



