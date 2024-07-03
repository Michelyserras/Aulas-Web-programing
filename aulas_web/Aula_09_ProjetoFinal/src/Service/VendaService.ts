
import { VendaPaes } from "../Model/vendaPaes";
import { EstoqueRepository } from "../Repository/EstoqueRepository";
import { VendaRepository } from "../Repository/VendaRepository";
import { ModalidadeRepository } from "../Repository/ModalidadeRepository";

 

export class VendaService {
    vendaRepository: VendaRepository= new VendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository()

    

    // vendas
    cadastrarCompra(compraData: VendaPaes){
        const { cpfCliente, itensComprados} = compraData;
        let total = 0;

        if(!cpfCliente || !itensComprados){
            throw new Error("Informações incompletas");
        }

        for(let i = 0; i < itensComprados.length; i++){ // loop usado para percorrer a lista de itens 

            const estoque = this.estoqueRepository.consultaEstoqueId(itensComprados[i].estoqueId); //verificando se o estoque existe

            if(estoque){ // a compra apenas sera realizada se houver um estoque disponivel

                if(estoque.quantidade < itensComprados[i].quantidade){ // se o a quantidade disponivel de produtos for menor que a quantidade comprada
                    throw new Error("Estoque insuficiente...");
                }
                else{
                   // caso contrário a venda será realizada

                    itensComprados[i].nome = this.modalidadeRepository.buscarPorNome(estoque.modalidadeId); // adicionando o nome do produto na venda

                    console.log("estoque atual", estoque);
                    total += itensComprados[i].quantidade * estoque.precoVenda; // somando valor total
                    console.log("somando valores", total);

                    
                    estoque.quantidade -= itensComprados[i].quantidade; //atualizando quantidade de itens no estoque
                    console.log("estoque depois da compra", estoque);  
                    
                }
            }
            else{
                throw new Error("Produto não existe!");
            }

        } 
        const produtos = itensComprados;

        const novaCompra = new VendaPaes(cpfCliente, total, produtos);
        this.vendaRepository.realizarVenda(novaCompra);
        console.log("Compra realizada com sucesso!", novaCompra); 
        
        return novaCompra;
    }


    procurarCompras(idNum: any){
        const id = parseInt(idNum, 10);
        console.log(idNum);
        return this.vendaRepository.consultaCompraId(id);
    }

    listarCompras():VendaPaes[] {
        if(this.vendaRepository.vendasList.length > 0){
            return this.vendaRepository.listarCompras();
        }
        else{
            throw new Error("Não há nenhuma venda cadastrada!");
        }
        
    }

}