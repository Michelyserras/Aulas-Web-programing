"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverterSentenca = ReverterSentenca;
exports.exibeFrase = exibeFrase;
function ReverterSentenca(palavra, callback) {
    const op = palavra.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}
function exibeFrase(frase) {
    return `A INVERSÃO DA SENTENÇA RESULTOU EM: ${frase.toLocaleUpperCase()}`;
}
