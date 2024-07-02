
import { ItemVenda } from "../Model/itemVenda";
import { getItens } from "../global/global";

export class itensRepository{
    itensList: ItemVenda[] = getItens();

    adicionarItens(itens: ItemVenda){
        return this.itensList.push(itens);
    }

  
}