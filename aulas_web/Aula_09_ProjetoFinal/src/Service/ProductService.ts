import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../Model/Product";
import { ProductRepository } from "./Repository/ProductRepository";
import express, {Request, Response, response} from 'express';

export class ProductService{
    productRepository: ProductRepository = new ProductRepository();

    cadastrarModalidade(ModalidadeData: Modalidade): Modalidade | undefined{
        const {id, nome, vegano} = ModalidadeData;

        if(!id || !nome || !vegano){
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new Modalidade(id, nome, vegano);
        this.productRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    
    }
        
        
    /* 
    ESSA PARTE FICA NO CONTROLLER
    if(novaModalidade){
            this.productRepository.cadastrarModalidade(novaModalidade);
            res.status(200).json(
                {
                    Mensagem: "Modalidade criada com sucesso!",
                    modalidade: novaModalidade,
                }
                    
             );
            return novaModalidade;
        }
        else 
            res.status(400).json(
                {
                    Mensagem: "Erro ao criar nova modalidade!"
                }
            )
        
        }
*/
    consultarModalidade(id: any){
        const idNumber: number = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtrarPorId(idNumber);
    }

    getModalidades(): Modalidade[]{
        return this.productRepository.exibeTodasModalidade();
    }
    
}

    



