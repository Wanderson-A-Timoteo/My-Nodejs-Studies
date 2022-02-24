 // Forma de importar em CommonJS
// const Matematica = require('./matematica');

// Forma de importar em ECMAScript 6, destruturando e importando apenas as funções que desejados
// Neste caso o console fica console.log(`SOMA: ${somar(n1, n2)}`);
//import { somar, subtrair } from './matematica';

// Forma de importar padrão como objeto, desta forma o console fica console.log(`SOMA: ${Matematica.somar(n1, n2)}`); onde Matematica conterá todos os objetos exportados.
// import Matematica from './matematica';

// Forma de importar em ECMAScript 6, o * indica que estamos importando tudo e então damos qlqr nome para o import, neste caso foi Matematica
import * as Matematica from './matematica';

let nome: string = 'Wanderson';
let idade: number = 30;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`)

let n1: number = 10;
let n2: number = 2;

console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);
