import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{

    async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livros.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL, 
            publishedDate VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL
            pages INT NOT NULL
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL,
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertProduct( title:string, author:string, publishedDate: string, isbn: string, pages: number, language:string, publisher:string) :Promise<Product>{
        const query = "INSERT INTO vendas.Product ( title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            const product = new Product( title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }
    
}