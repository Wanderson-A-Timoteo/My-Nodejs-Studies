"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.subtrair = exports.somar = void 0;
// Forma de exportar utilizando ECMAScript 6, colocamos o export na frente da função
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function subtrair(x, y) {
    return x - y;
}
exports.subtrair = subtrair;
function multiplicar(x, y) {
    return x * y;
}
exports.multiplicar = multiplicar;
// Forma de exportar em CommonJS
// module.exports.somar = somar;
// module.exports.subtrair = subtrair;
// module.exports.multiplicar = multiplicar;
