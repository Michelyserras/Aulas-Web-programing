"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const global_1 = require("../global/global");
class VendaRepository {
    constructor() {
        // venda
        this.vendasList = (0, global_1.getVenda)();
        // venda fim
    }
    realizarVenda(compra) {
        this.vendasList.push(compra);
    }
    getVendas() {
        return this.vendasList;
    }
}
exports.VendaRepository = VendaRepository;
