export class Cliente{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento:number;

    constructor(id:number,nome:string, cpf:string, dataNascimento:number){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    
}