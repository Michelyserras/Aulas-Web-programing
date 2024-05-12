import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../Model/Product";
import { ProductRepository } from "./Repository/ProductRepository";
import express, {Request, Response, response} from 'express';

export class ProductService{
    productRepository: ProductRepository = new ProductRepository();

    //Modalidade
    cadastrarModalidade(ModalidadeData: Modalidade): Modalidade | undefined{
        const {id, nome, vegano} = ModalidadeData;

        if(!id || !nome || !vegano){
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new Modalidade(id, nome, vegano);
        this.productRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    
    }
        
    consultarModalidade(id: any){
        const idNumber: number = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtrarPorId(idNumber);
    }

    getModalidades(): Modalidade[]{
        return this.productRepository.exibeTodasModalidade();
    }

    alterarModalidade(produto: any): Modalidade{
     const {id, nome, vegano} = produto;
        if(!id || !nome || !vegano){
            throw new Error("Informações incompletas");
        }

       let novoP = this.consultarModalidade(id);

       if(!novoP){
        throw new Error(" Modalidade não cadastrada");
       }

       novoP.id = id;
       novoP.nome = nome;
       novoP.vegano = vegano;

       this.productRepository.alterarModalidade(novoP);
       return novoP;
    }

    excluirModalidade(ModalidadeData: any){
        const produto = this.consultarModalidade(ModalidadeData);
        if(produto){
            return this.productRepository.deletaModalidade(produto);
        }
        else{
            throw new Error("Modalidade não existe!");
        }

    }
    // Modalidade Fim~

    // Estoque 

    adicionarEstoque(Produtodata: EstoquePaes){
        const {id, modalidadeId, quantidade, precoVenda} = Produtodata;

        if(!modalidadeId || !quantidade || !precoVenda){
            throw new Error("Informaações incompletas");
        }
        if(this.productRepository.filtrarPorId(modalidadeId)){
            const novoProduto = new EstoquePaes(id, modalidadeId, quantidade, precoVenda);
            this.productRepository.adicionarEstoque(novoProduto);
            return novoProduto;
        }
        throw new Error("Modalidade informada não existe");   
    }


    ListaTodoEstoque():EstoquePaes[] {
        return this.productRepository.listarEstoque();
    }

    ProcurarPorID(id: any){
        const numId: number = parseInt(id, 10);
        console.log(numId);
        return this.productRepository.consultaEstoqueId(numId);
    }

    // Estoque fim
    
}

    



