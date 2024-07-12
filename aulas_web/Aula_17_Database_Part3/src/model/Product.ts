export class Product{
    id: number;
    title: string;
    author: string;
    publishedDate: string;
    isbn: string;
    pages: number;
    language: string;
    publisher: string;

    constructor(title?:string, author?:string, publishedDate?: string, isbn?: string, pages?: number, language?:string, publisher?:string){
        this.id = this.gerarId() || 0 ;
        this.title = title || '';
        this.author = author || '';
        this.publishedDate = publishedDate || '';
        this.isbn = isbn || '';
        this.pages = pages || 0;
        this.language = language || '';
        this.publisher = publisher || '';

    }

    private gerarId(){
        return Math.floor(Math.random() * 10000);
    }
}