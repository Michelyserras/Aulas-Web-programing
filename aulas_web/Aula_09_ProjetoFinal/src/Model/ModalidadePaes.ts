
export class Modalidade{
    
    id: number = 0;
    nome:string;
    vegano: boolean;

    constructor(nome: string, vegano: boolean){
        this.id = this.gerarId();
        this.nome = nome;
        this.vegano = vegano;
    }
   
    private gerarId(){
        return Math.floor(Math.random() * 10000);
    }
}