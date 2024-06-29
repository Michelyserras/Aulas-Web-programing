import { Modalidade } from "../Model/ModalidadePaes";
import express, { Request, Response } from "express";
import { ModalidadeService } from "../Service/ModalidadeService";

const  modalidadeService = new ModalidadeService();
 
//Modalidade
export function CadastrarModalidade(req: Request, res: Response){
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
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
        const id = modalidadeService.consultarModalidade(req.query.id);
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
        res.status(200).json(modalidadeService.getModalidades());
    } catch (error: any) {
        res.status(404).json({ message: error.message});
    }
};

export function alterarModalidade(req: Request, res: Response){
    try{
        const modalidadeAtlz = modalidadeService.alterarModalidade(req.body);
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
        modalidadeService.excluirModalidade(req.query.id);
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