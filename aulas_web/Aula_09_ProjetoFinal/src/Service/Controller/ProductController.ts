import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../../Model/Product"; 
import { ProductService} from "../ProductService";
import express, { Request, Response } from "express";

const  productService = new ProductService();

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
        res.status(400).json({ message: error.message});
    }
};