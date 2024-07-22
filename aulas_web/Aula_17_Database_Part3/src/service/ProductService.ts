import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    async cadastrarProduto(produtoData: any): Promise<Product>{
        const {title, author, publishedDate, isbn, pages, language, publisher } = produtoData;

        if( !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }    
       
        const produtoExiste = await this.productRepository.findProduct(isbn);

        if(produtoExiste){
            throw new Error("Esse livro já existe na base de dados");
        }
        else{
            const novoProduto = await this.productRepository.insertProduct(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service ", novoProduto);
            return novoProduto;  
            
           
        }
        
    }

    
    async listarTodosProdutos(): Promise<Product[]> {
        const produto =  await this.productRepository.filterAllProduct();

        if(produto.length == 0){
            throw new Error("Não há nenhum livro cadastrado na base de dados");
        }
        else{
            console.log("Service - Filtrar Todos", produto);
            return produto;
        }
        
    }

    async filtrarProduto(produtoData: any): Promise<Product | undefined>{

        const id = parseInt(produtoData, 10);
        const livroExiste = await this.productRepository.findProductPorID(id);

        if(!livroExiste){
            throw new Error("Esse livro não existe em nossa base de dados");
        }
        const produto =  await this.productRepository.filterProduct(id);
        console.log("Service - Filtrar", produto);
        return produto;  
    }

    async atualizarProduto(produtoData: any): Promise<Product> {

        const { id, title, author, publishedDate, isbn, pages, language, publisher } = produtoData;

        if( !title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.updateProduct(id,title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", produto);

        return produto;
    }


    async deletarProduto(produtoData: any): Promise<Product> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = produtoData;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.deleteProduct(id,title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", produto);
        return produto;
    }


  


}

