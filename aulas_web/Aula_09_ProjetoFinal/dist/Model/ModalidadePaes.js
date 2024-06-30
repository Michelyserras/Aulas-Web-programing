"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modalidade = void 0;
class Modalidade {
    constructor(nome, vegano) {
        this.id = 0;
        this.id = this.gerarId();
        this.nome = nome;
        this.vegano = vegano;
    }
    gerarId() {
        return Math.floor(Math.random() * 10000);
    }
}
exports.Modalidade = Modalidade;
