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

    pegarPreco(id:number): any{
        const item = EstoqueRepository.find(item => item.id === id);
        return item ? item.precoVenda : undefined;
    }

    calcularTotal(itensComprados: ItemVenda[]){
        let soma = 0;
        for(const item of itensComprados){
            const preco = this.pegarPreco(item.estoqueId)
            if(preco !== undefined){
                soma += (preco * item.quantidade)
            }
        }
        return soma;

    }

    filtrarVendaPorId(id: number): VendaPaes| undefined{
        return this.vendasList.find(VendaPaes => VendaPaes.id === id);
    }
    // venda fim
}

    