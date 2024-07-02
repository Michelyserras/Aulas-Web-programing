
export class ItemVenda{
    nome: string;
    estoqueId:number;
    quantidade: number;
    

    constructor(nome: string, estoqueId: number, quantidade:number){
        this.nome = nome;
        this.estoqueId = estoqueId;
        this.quantidade = quantidade;
    }


}
