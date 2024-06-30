import { VendaPaes } from "../Model/vendaPaes";
import { EstoqueRepository } from "../Repository/EstoqueRepository";
import { VendaRepository } from "../Repository/VendaRepository";
import { EstoqueService } from "./EstoqueService";

 

export class VendaService{
    vendaRepository: VendaRepository= new VendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    estoqueService: EstoqueService = new EstoqueService();

    // vendas
    cadastrarCompra(compraData: VendaPaes){
        const { cpfCliente, itensComprados} = compraData;
        let valorTotal = 0;

        if(!cpfCliente || itensComprados.length == 0){
            throw new Error("Informações incompletas");
        }

      
    // verificando se estoque existe e somando o mesmo;
        for (const item of itensComprados){
            const estoque = this.estoqueService.ProcurarPorID(item.estoqueId);
        
            if( !estoque || estoque.quantidade < item.quantidade){
                throw new Error("Produto fora de estoque");
            }
            valorTotal += estoque.precoVenda * item.quantidade;
        
        }

        const novaCompra = new VendaPaes(cpfCliente, valorTotal, itensComprados);
        this.vendaRepository.realizarVenda(novaCompra);

        for (const item of itensComprados) {
            const estoqueItem = this.estoqueService.ProcurarPorID(item.estoqueId);
            if (estoqueItem) {
                estoqueItem.quantidade -= item.quantidade;
                this.estoqueService.atualizarEstoque(estoqueItem);
            }
        }

        return novaCompra;
    }
    
}

    



