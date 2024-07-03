import { VendaPaes } from "../Model/vendaPaes";
import { EstoqueService } from "../Service/EstoqueService";
import { VendaService} from "../Service/VendaService";
import express, { Request, Response } from "express";

const vendaService = new VendaService();



// vendas 
export function realizarVenda(req:Request, res:Response){
    try{
        const novaCompra = vendaService.cadastrarCompra(req.body);
    
        res.status(200).json({
            mensagem: "Venda realizada com sucesso!",
            Venda: novaCompra
        })
        
    } catch (error: any){
        res.status(400).json({message: error.message});
    }
}

export function pesquisarVenda (req: Request, res: Response){
    try {

        const id:any = vendaService.procurarCompras(req.query.id);

        if(id){
            res.status(200).json(
                {
                    mensagem:"Venda encontrada com sucesso!",
                    modalidade: id,
                })
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function ListaCompras(req: Request, res:Response){
    try{
        res.status(200).json({
            estoque: vendaService.listarCompras(),
        })
    }
    catch (error: any){
        res.status(404).json({message: error.message})
    }
}


// vendas fim
// controler conversa direto com o service
//service é a regra de negócioo
//repository parte de tratamento com o banco de dados
// model é a representação da entidade
