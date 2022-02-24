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

/*
Lembrando que desta forma não podemos declarar o export na frente das funções
Forma de exportar padrão como um objeto
O primeiro é a propriedade e o segundo a função 
export default {
    somar: somar,
    subtrair: subtrair,
    multiplicar: multiplicar
};

Quando temos o nome da propriedade igual ao da função podemos declarar a função diretamente
export default {
    somar,
    subtrair,
    multiplicar
};

*/