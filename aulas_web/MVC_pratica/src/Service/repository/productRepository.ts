import { Product } from "../../Model/product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtrarProdutoPorIDeNome(id:number, nome: string): Product|undefined{
        return this.productList.find(product => product.id === id &&  product.name === nome);
    }

    filtrarProdutoPorID(id:number): Product|undefined{
        return this.productList.find(product => product.id === id);
    }

    filtrarProdutoPorNome(nome:string): Product|undefined{
        return this.productList.find(product => product.name === nome);
    }


    filtraTodosProdutos(): Product[]{
        return this.productList;
    }
}