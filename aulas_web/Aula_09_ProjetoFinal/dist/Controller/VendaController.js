"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realizarVenda = realizarVenda;
exports.pesquisarVenda = pesquisarVenda;
exports.ListaCompras = ListaCompras;
const VendaService_1 = require("../Service/VendaService");
const vendaService = new VendaService_1.VendaService();
// vendas 
function realizarVenda(req, res) {
    try {
        const novaCompra = vendaService.cadastrarCompra(req.body);
        res.status(200).json({
            mensagem: "Venda realizada com sucesso!",
            Venda: novaCompra
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
function pesquisarVenda(req, res) {
    try {
        const id = vendaService.procurarCompras(req.query.id);
        if (id) {
            res.status(200).json({
                mensagem: "Venda encontrada com sucesso!",
                Venda: id,
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
function ListaCompras(req, res) {
    try {
        res.status(200).json({
            estoque: vendaService.listarCompras(),
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// vendas fim
// controler conversa direto com o service
//service é a regra de negócioo
//repository parte de tratamento com o banco de dados
// model é a representação da entidade
