import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../Model/Product"; 
import { ProductService} from "../Service/ProductService";
import express, { Request, Response } from "express";

const  productService = new ProductService();
 
//Modalidade
export function CadastrarModalidade(req: Request, res: Response){
    try {
        const novaModalidade = productService.cadastrarModalidade(req.body);
        res.status(201).json(
            {
                mensagem:"Modalidade adicionada com sucesso!",
                produto:novaModalidade
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function pesquisarModalidade (req: Request, res: Response){
    try {
        const id = productService.consultarModalidade(req.query.id);
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

export function listaModalidade(req: Request, res: Response){
    try {
        res.status(200).json(productService.getModalidades());
    } catch (error: any) {
        res.status(404).json({ message: error.message});
    }
};

export function alterarModalidade(req: Request, res: Response){
    try{
        const modalidadeAtlz = productService.alterarModalidade(req.body);
            res.status(201).json({
                mensagem: "Modalidade alterada com sucesso!",
                modalidade: modalidadeAtlz,
            });

    }catch (error: any){
        res.status(400).json({message: error.message});
    }

}

export function deletarModalidade(req: Request, res: Response){
    try{
        productService.excluirModalidade(req.query.id);
            res.status(202).json({
                mensagem: "Modalidade deletada com sucesso!",
             }
            )
        }
     catch (error: any){
        res.status(400).json({message: error.message})
    }
}

// Modalidade fim

// Estoque

export function adicionarAoEstoque(req: Request, res: Response){
    try{
        const novoProduto = productService.adicionarEstoque(req.body);
        res.status(201).json({
            mensagem: "Estoque adicionado com sucesso!",
            estoque: novoProduto,
        })
    } catch (error: any){
        res.status(400).json({message: error.message});
    }
}

export function ListaEstoque(req: Request, res:Response){
    try{
        res.status(200).json({
            estoque: productService.ListaTodoEstoque(),
        })
    }
    catch (error: any){
        res.status(404).json({message: error.message})
    }
}

export function ProcurarId(req: Request, res:Response){
    try{
        const id = productService.ProcurarPorID(req.query.id);
        if(id){
            res.status(200).json({
                message: "Id encontrado com sucesso",
                Estoque: id,

            })
        }


    }catch (error:any){
        res.status(400).json({message: error.message})
    }

}

export function atualizaEstoque(req: Request, res: Response){
    try{
        const estoqueAtlz = productService.atualizarEstoque(req.body);
            res.status(201).json({
                mensagem: "Estoque atualizado com sucesso!",
                modalidade: estoqueAtlz,
            });

    }catch (error: any){
        res.status(400).json({message: error.message});
    }
}

export function deletarEstoque(req: Request, res:Response){
    try{
        productService.deletarEstoque(req.query.id);
        res.status(200).json({
                mensagem: "Estoque excluído com sucesso!",
        })
    } catch (error: any){
        res.status(400).json({message: error.message});
    }
    
}
// Estoque fim

// vendas 
export function realizarVenda(req:Request, res:Response){
    try{
        const novaCompra = productService.cadastrarCompra(req.body);
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
        const id = productService.ProcurarVendaPorID(req.query.id);
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