import { idText } from "typescript";
import { VendaPaes } from "../Model/vendaPaes";
import { ItemVenda } from "../Model/itemVenda";
import { EstoqueRepository } from "./EstoqueRepository";


  
export class VendaRepository{
    // venda
    vendasList: VendaPaes[] = [];

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }

    getVendas(): VendaPaes[] {
        return this.vendasList;
    }

    

    // venda fim
}

    