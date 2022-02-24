"use strict";
// Forma de importar em CommonJS
// const Matematica = require('./matematica');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Forma de importar em ECMAScript 6, destruturando e importando apenas as funções que desejados
// Neste caso o console fica console.log(`SOMA: ${somar(n1, n2)}`);
//import { somar, subtrair } from './matematica';
// Forma de importar padrão como objeto, desta forma o console fica console.log(`SOMA: ${Matematica.somar(n1, n2)}`); onde Matematica conterá todos os objetos exportados.
// import Matematica from './matematica';
// Forma de importar em ECMAScript 6, o * indica que estamos importando tudo e então damos qlqr nome para o import, neste caso foi Matematica
const Matematica = __importStar(require("./matematica"));
let nome = 'Wanderson';
let idade = 30;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
let n1 = 10;
let n2 = 2;
console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);
