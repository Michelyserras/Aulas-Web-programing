"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itensRepository = void 0;
const global_1 = require("../global/global");
class itensRepository {
    constructor() {
        this.itensList = (0, global_1.getItens)();
    }
    adicionarItens(itens) {
        return this.itensList.push(itens);
    }
}
exports.itensRepository = itensRepository;
