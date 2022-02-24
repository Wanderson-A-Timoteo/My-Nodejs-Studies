// Forma de exportar utilizando ECMAScript 6, colocamos o export na frente da função
export function somar(x: number, y: number): number {
    return x + y;
}

export function subtrair(x: number, y: number): number {
    return x - y;
}

export function multiplicar(x: number, y: number): number {
    return x * y;
}

// Forma de exportar em CommonJS
// module.exports.somar = somar;
// module.exports.subtrair = subtrair;
// module.exports.multiplicar = multiplicar;
