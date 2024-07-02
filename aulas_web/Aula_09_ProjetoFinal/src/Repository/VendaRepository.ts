
import { VendaPaes } from "../Model/vendaPaes";
import { getVenda } from "../global/global";

export class VendaRepository{
    // venda
    vendasList: VendaPaes[] = getVenda();

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }

    getVendas(): VendaPaes[] {
        return this.vendasList;
    }

    

    // venda fim
}

    