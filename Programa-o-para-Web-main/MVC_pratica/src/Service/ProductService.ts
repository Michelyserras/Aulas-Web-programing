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

    consultarProduto(id:any): Product|undefined{
        const idNumber: number = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtrarProdutoPorID(idNumber);
    }

    getProducts(): Product[]{
        return this.productRepository.filtraTodosProdutos();

    }

}