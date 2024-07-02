
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

            if(estoque){
                if(estoque.quantidade < itensComprados[i].quantidade){
                    throw new Error("Estoque insuficiente...");
                }
                else{
                   
                    itensComprados[i].nome = this.modalidadeRepository.filtrarPorNome(estoque.modalidadeId);

                    console.log("estoque atual", estoque);
                    total += itensComprados[i].quantidade * estoque.precoVenda;
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


    //     this.vendaRepository.vendasList.forEach(itensComprados => {
    //         this.itensRepository.itensList.forEach(produto => {
    //             const itens = new ItemVenda(produto.estoqueId, produto.quantidade);
    //             const estoqueExiste = this.estoqueRepository.consultaEstoqueId(produto.estoqueId); // constante que vai verificar se o estoque existe
    //             console.log("Estoque existe", estoqueExiste);
                
    
            
    //             if(estoqueExiste){
    
    //                 if(produto.quantidade > estoqueExiste.quantidade){ // verificando se há estoque suficiente para realizar a venda
    //                     throw new Error("Estoque do produto é insuficiente para realizar a venda!" + estoqueExiste);
    
    //                 } 
    //                 else if(produto.quantidade < estoqueExiste.quantidade){// caso haja, vamos adicionar os produtos a lista de itens;
    //                      // adicionando produtos na lista
    //                     console.log("Adicionando itens a compra", itens);
    
    //                 }
    //                 this.itensRepository.adicionarItens(itens);
    
    //             } 
            
                
    
    //         });

    //     }
       
    //     const produtos = this.itensRepository.itensList;
        
    //    
       
    // }
      
    // // verificando se estoque existe e somando o mesmo;
    //     for (const item of itensComprados){
    //         const estoque = this.estoqueService.ProcurarPorID(item.estoqueId);
        
    //         if( !estoque || estoque.quantidade < item.quantidade){
    //             throw new Error("Produto fora de estoque");
    //         }
    //         valorTotal += estoque.precoVenda * item.quantidade;
        
    //     }

    //     const novaCompra = new VendaPaes(cpfCliente, valorTotal, itensComprados);
    //     this.vendaRepository.realizarVenda(novaCompra);

    //     for (const item of itensComprados) {
    //         const estoqueItem = this.estoqueService.ProcurarPorID(item.estoqueId);
    //         if (estoqueItem) {
    //             estoqueItem.quantidade -= item.quantidade;
    //             this.estoqueService.atualizarEstoque(estoqueItem);
    //         }
    //     }

    //     return novaCompra;
    // 
    }