import { Product } from "../Model/product";
import { ProductRepository } from "./repository/productRepository";
export class ProductService{
    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product{
        const {name, description, price} = produtoData;
        if(!name || !description || !price){
            throw new Error("Informacoes incompletas");
        }
        const novoProduto = new Product(name,description,price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    
    consultarProduto(id:any, name:any): Product|undefined{
        if(id && name){
            const idNumber: number = parseInt(id, 10);
            console.log("Com id e name", id, name);
            console.log(id);
            return this.productRepository.filtrarProdutoPorIDeNome(idNumber, name);
        }
        else if(id){
            const idNumber: number = parseInt(id, 10);
            console.log("Apenas id: ")
            // parse int define um numero inteiro com 10 casas decimais.
            return this.productRepository.filtrarProdutoPorID(id);
        }
        else if(name){
            return this.productRepository.filtrarProdutoPorID(name);
        }
        console.log(id);
        return undefined
    }

    getProducts(): Product[]{
        return this.productRepository.filtraTodosProdutos();

    }

}