"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
class VendaRepository {
    constructor() {
        // venda
        this.vendasList = [];
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
