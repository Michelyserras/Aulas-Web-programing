export class Cliente{
    id: number;
    cpf: string;
    dataNascimento:number;

    constructor(id:number, cpf:string, dataNascimento:number){
        this.id = id;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    
}