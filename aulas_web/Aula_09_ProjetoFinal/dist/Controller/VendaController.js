"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realizarVenda = realizarVenda;
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
/*export function pesquisarVenda (req: Request, res: Response){
    try {
        const id = vendaService.ProcurarVendaPorID(req.query.id);
        if(id){
        res.status(200).json(
            {
                mensagem:"Modalidade encontrada com sucesso!",
                modalidade: id,
            }
            );
        }else{
            res.status(404).json({mensagem:"Modalidade não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

// vendas fim
// controler conversa direto com o service
//service é a regra de negócioo
//repository parte de tratamento com o banco de dados
// model é a representação da entidade
*/ 
