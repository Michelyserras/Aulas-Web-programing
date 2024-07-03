
import { VendaPaes } from "../Model/vendaPaes";
import { getVenda } from "../global/global";

export class VendaRepository{
    // venda
    vendasList: VendaPaes[] = getVenda();

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }

   
    consultaCompraId(idNum: number): VendaPaes | undefined{
        return this.vendasList.find(Vendas =>Vendas.id === idNum);
    }

    listarCompras(): VendaPaes[]{
        return this.vendasList;
    }
    

    // venda fim
}

    