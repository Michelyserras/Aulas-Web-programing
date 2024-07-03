import { ModalidadeRepository} from "../Repository/ModalidadeRepository";
import { EstoquePaes } from "../Model/estoque";
import { EstoqueRepository } from "../Repository/EstoqueRepository";


 

export class EstoqueService{
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();

    // Estoque 

adicionarEstoque(produtoData: EstoquePaes): EstoquePaes | undefined{
    const {modalidadeId, quantidade, precoVenda} = produtoData;
    

    if(!modalidadeId || !quantidade || !precoVenda){
        throw new Error("Informações incompletas");
    }

    const novoEstoque = new EstoquePaes(modalidadeId, quantidade, precoVenda); //instanciando novo estoque;
    const modalidadeExiste = this.modalidadeRepository.filtrarPorId(novoEstoque.modalidadeId); // verificando se a modalidade existe antes de add novo estoque;
    console.log("Verificando modalidade: ", modalidadeExiste);
    

    if(modalidadeExiste){
        const estoqueExiste = this.estoqueRepository.consultaEstoquePorMOD(novoEstoque.modalidadeId); // verificando se existe um estoque com a mesma modalidade;
        console.log("Verificando se estoque existe", estoqueExiste);

        if(estoqueExiste){
            throw new Error("Estoque já existe! Tente atualizar a quantidade... utilizando put");
        }
        this.estoqueRepository.adicionarEstoque(novoEstoque);
        return novoEstoque;
    }
    throw new Error("Modalidade não existe!");
    }



    ListaTodoEstoque():EstoquePaes[] {
        const listaTamanho = this.estoqueRepository.estoqueList.length;
        if(listaTamanho > 0){
            return this.estoqueRepository.listarEstoque();
        }
        else{
            throw new Error("Não há nenhum estoque cadastrado!");
        }
       
    }

    ProcurarPorID(id: any){
        const numId: number = parseInt(id, 10);
        console.log(numId);
        return this.estoqueRepository.consultaEstoqueId(numId);
    }

    atualizarEstoque(estoqueData: any): EstoquePaes{
        const {id, quantidade, precoVenda} = estoqueData;
        
        
        if(!id || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        }

       let novoP = this.ProcurarPorID(id);

       if(!novoP){
        throw new Error(" Estoque não cadastrado");
       }

       novoP.id = id;
       novoP.quantidade += quantidade;
       novoP.precoVenda = precoVenda;

       this.estoqueRepository.alterarEstoque(novoP);
       return novoP;

    }

    
    deletarEstoque(estoqueData: EstoquePaes){

        const estoqueExiste = this.estoqueRepository.consultaEstoqueId(estoqueData.id);
        
        const lista = this.estoqueRepository.estoqueList; 
        let i = 0;

        if(estoqueExiste){
            for(i=0; i < lista.length; i++){
    
                    if(estoqueData.quantidade <= lista[i].quantidade){
    
                        lista[i].quantidade -= estoqueData.quantidade;
    
                        if(lista[i].quantidade === 0){
                            lista.splice(i,1);
                        }
    
                        return lista[i];
                    }else{
                        throw new Error("O estoque não possui quantidade suficiente para ser removido.")
                    }
                }
        }
        else{
            throw new Error("Estoque informado não existe!");
        }
    }

   /* retirarEstoque(estoqueData: any): any{
        const estoque = this.ProcurarPorID(estoqueData);

        if(estoque){
            return this.estoqueRepository.deletarQtd(estoque);
        }else{
            throw new Error("Estoque informado não existe!");
        }
    }
*/
    }
