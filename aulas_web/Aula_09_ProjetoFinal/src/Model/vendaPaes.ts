
import { ItemVenda } from "./itemVenda";

export class VendaPaes{
    id: number;
    cpfCliente: string;
    itensComprados: ItemVenda[];
    valorTotal: number;
   

    constructor(cpfCliente: string, valorTotal:number, itensComprados: ItemVenda[]){
        this.id = this.gerarId(); // como serão realizadas varias vezes é melhor que o id sejam numeros aleatorios
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }

    private gerarId(): number{ 
        return Math.floor(Math.random() * 10000);
    }


}