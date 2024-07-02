


export class EstoquePaes{
    id: number;
    modalidadeId: number;
    quantidade: number;
    precoVenda: number;

    constructor(modalidadeId:number, quantidade:number, precoVenda:number){
        this.id = this.gerarId();
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda
    }
    private gerarId(): number{
        return Math.floor(Math.random() * 10000);
    }


}




