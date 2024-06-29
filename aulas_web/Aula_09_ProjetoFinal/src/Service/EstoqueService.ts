import { ModalidadeRepository} from "../Repository/ModalidadeRepository";
import { EstoquePaes } from "../Model/estoque";
import { EstoqueRepository } from "../Repository/EstoqueRepository";
 

export class EstoqueService{
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();

    // Estoque 

    adicionarEstoque(Produtodata: EstoquePaes){
        const { modalidadeId, quantidade, precoVenda} = Produtodata;

        if(!modalidadeId || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        }
        const modalidade = this.modalidadeRepository.filtrarPorId(modalidadeId);
        
        if(modalidade){

            const novoProduto = new EstoquePaes( modalidadeId, quantidade, precoVenda);
            this.estoqueRepository.adicionarEstoque(novoProduto);

            return novoProduto;
        }
        throw new Error("Modalidade informada não existe");   
    }


    ListaTodoEstoque():EstoquePaes[] {
        return this.estoqueRepository.listarEstoque();
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

    deletarEstoque(estoqueData: any){
        const estoque = this.ProcurarPorID(estoqueData);
        if(estoque){
            return this.estoqueRepository.deletarEstoque(estoque);
        }else{
            throw new Error("Estoque informado não existe!");
        }
    }

    }
