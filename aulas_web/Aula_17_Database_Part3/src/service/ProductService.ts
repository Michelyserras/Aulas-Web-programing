import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Promise<Product>{
        const {title, author, publishedDate, isbn, pages, language, publisher } = produtoData;
        if( !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const novoProduto = this.productRepository.insertProduct(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service ", novoProduto);
        return novoProduto;
    }

}