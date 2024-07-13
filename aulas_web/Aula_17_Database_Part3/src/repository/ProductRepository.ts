import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livros.livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL, 
            publishedDate VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertProduct( title:string, author:string, publishedDate: string, isbn: string, pages: number, language:string, publisher:string) :Promise<Product>{

        
        try{
            const checkQuery = "select * from livros.livro where isbn = ?"; // constante para fazer o comando sql
            const query = "INSERT INTO livros.livro (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)" ;
            
            const [rows] = await executarComandoSQL(checkQuery, [isbn]);

            // Se já existe um livro com esse ISBN, lança um erro
            if (rows.length > 0) {
                throw new Error("Esse livro já existe na base de dados.");
            }
            

            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);

            const product = new Product(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })

        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }

    async filterProduct(id: number) :Promise<Product>{
        const query = "SELECT * FROM livros.livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return new Promise<Product>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterAllProduct() :Promise<Product[]>{
        const query = "SELECT * FROM livros.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Product[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os produtos gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateProduct(id: number,  title:string, author:string, publishedDate: string, isbn: string, pages: number, language:string, publisher:string) :Promise<Product>{
        const query = "UPDATE vendas.product set name = ?, price = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id, title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            const product = new Product(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteProduct(id: number,  title:string, author:string, publishedDate: string, isbn: string, pages: number, language:string, publisher:string) :Promise<Product>{
        const query = "DELETE FROM livros.livro where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto deletado com sucesso, ID: ', resultado);
            const product = new Product(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

}