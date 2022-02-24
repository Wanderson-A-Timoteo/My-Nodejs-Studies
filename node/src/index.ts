const Matematica = require('./matematica')

let nome: string = 'Wanderson';
let idade: number = 30;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`)

let n1: number = 10;
let n2: number = 2;

console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);
