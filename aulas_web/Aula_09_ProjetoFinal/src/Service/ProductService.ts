import { VendaPaes } from "../Model/vendaPaes";
import { EstoqueRepository } from "../Repository/EstoqueRepository";
import { VendaRepository } from "../Repository/Venda";

 

export class VendaService{
    vendaRepository: VendaRepository= new VendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    // vendas
    cadastrarCompra(compraData: VendaPaes){
        const { cpfCliente, itensComprados, valorTotal} = compraData;

        if(!cpfCliente || !itensComprados){
            throw new Error("Informações incompletas");
        }

        if(this.estoqueRepository.consultaEstoqueId(itensComprados.estoqueId)){

            const novaCompra = new VendaPaes(cpfCliente, valorTotal, itensComprados);
            this.vendaRepository.realizarVenda(novaCompra);
            return novaCompra;

        }
        throw new Error("Estoque insuficiente ou não existente!");
    }

       ProcurarVendaPorID(id: any){
        const numId: number = parseInt(id, 10);
        console.log(numId);
        return this.vendaRepository.filtrarVendaPorId(numId);
    }
    // vendas fim
    
}

    



