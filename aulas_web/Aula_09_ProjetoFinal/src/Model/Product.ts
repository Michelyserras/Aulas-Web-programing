import { ListFormat } from "typescript";


export class Modalidade{
    id: number;
    nome:string;
    vegano: boolean;

    constructor(id:number, nome: string, vegano: boolean){
        this.id = id;
        this.nome = nome;
        this.vegano = vegano;
    }
}

export class EstoquePaes{
    id: number;
    modalidadeId: number;
    quantidade: number;
    precoVenda: number;

    constructor(id:number, modalidadeId:number, quantidade:number, precoVenda:number){
        this.id = id;
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda
    }

}

export interface ItemVenda{
    estoqueId:number;
    quantidade: number;
}


export class VendaPaes{
    id: number;
    cpfCliente: string;
    itensComprados:  ItemVenda;
    valorTotal: number;
   

    constructor(cpfCliente: string, valorTotal:number, itensComprados: ItemVenda){
        this.id = this.gerarId(); // como serão realizadas varias vezes é melhor que o id sejam numeros aleatorios
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }

    private gerarId(): number{
        return Date.now();
    }


}
