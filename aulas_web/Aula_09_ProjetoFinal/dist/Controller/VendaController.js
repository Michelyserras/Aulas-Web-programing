"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pesquisarVenda = exports.realizarVenda = void 0;
// vendas 
function realizarVenda(req, res) {
    try {
        const novaCompra = productService.cadastrarCompra(req.body);
        res.status(200).json({
            mensagem: "Venda realizada com sucesso!",
            Venda: novaCompra
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.realizarVenda = realizarVenda;
function pesquisarVenda(req, res) {
    try {
        const id = productService.ProcurarVendaPorID(req.query.id);
        if (id) {
            res.status(200).json({
                mensagem: "Modalidade encontrada com sucesso!",
                modalidade: id,
            });
        }
        else {
            res.status(404).json({ mensagem: "Modalidade não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarVenda = pesquisarVenda;
;
// vendas fim
// controler conversa direto com o service
//service é a regra de negócioo
//repository parte de tratamento com o banco de dados
// model é a representação da entidade
