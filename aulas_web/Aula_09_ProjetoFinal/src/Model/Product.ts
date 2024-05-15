
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
        this.id = this.gerarId();
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda
    }
    private gerarId(){
        return Date.now();
    }
}

export class ItemVenda{
    estoqueId:number;
    quantidade: number;

    constructor(estoqueId:number, quantidade:number){
        this.estoqueId = estoqueId;
        this.quantidade = quantidade;
    }
}

export class VendaPaes{
    id: number;
    cpfCliente: string;
    itensComprados: Array<ItemVenda>;
    valorTotal: number;
   

    constructor(cpfCliente: string, valorTotal:number, itensComprados: Array<ItemVenda>){
        this.id = this.gerarId(); // como serão realizadas varias vezes é melhor que o id sejam numeros aleatorios
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados
    }

    private gerarId(): number{
        return Date.now();
    }

   
}
