"use strict";
const Matematica = require('./matematica'); // Forma de importar em CommonJS
let nome = 'Wanderson';
let idade = 30;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
let n1 = 10;
let n2 = 2;
console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);
