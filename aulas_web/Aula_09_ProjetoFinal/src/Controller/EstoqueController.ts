
import express, { Request, Response } from "express";
import { EstoqueService } from "../Service/EstoqueService";
import { ModalidadeService } from "../Service/ModalidadeService";


const  estoqueService = new EstoqueService();

 
// Estoque

export function adicionarAoEstoque(req: Request, res: Response){
    try{
        const novoProduto = estoqueService.adicionarEstoque(req.body);
        res.status(201).json({
                mensagem: "Estoque adicionado com sucesso!",
                estoque: novoProduto,
        })   
    }
     catch (error: any){
        res.status(400).json({message: error.message});
    }
}

export function ListaEstoque(req: Request, res:Response){
    try{
        res.status(200).json({
            estoque: estoqueService.ListaTodoEstoque(),
        })
    }
    catch (error: any){
        res.status(404).json({message: error.message})
    }
}

export function ProcurarId(req: Request, res:Response){
    try{
        const id = estoqueService.ProcurarPorID(req.query.id);
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
        const estoqueAtlz = estoqueService.atualizarEstoque(req.body);
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
        const estoque = estoqueService.deletarEstoque(req.body);
        res.status(200).json({
                mensagem: "Estoque excluído com sucesso!",
                Estoque:  estoque,
        })
    } catch (error: any){
        res.status(400).json({message: error.message});
    }
    
}
// Estoque fim
