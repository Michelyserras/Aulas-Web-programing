import { Modalidade } from "../Model/ModalidadePaes";
import { ModalidadeRepository } from "../Repository/ModalidadeRepository";

export class ModalidadeService{
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();

    //Modalidade
    cadastrarModalidade(ModalidadeData: Modalidade): Modalidade | undefined{
        const { nome, vegano} = ModalidadeData;

        if(!nome || !vegano){
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new Modalidade(nome, vegano);
        this.modalidadeRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    
    }
        
    consultarModalidade(id: any){
        const idNumber: number = parseInt(id, 10);
        console.log(id);
        return this.modalidadeRepository.filtrarPorId(idNumber);
    }

    getModalidades(): Modalidade[]{
        return this.modalidadeRepository.exibeTodasModalidade();
    }

    alterarModalidade(produto: any): Modalidade{
     const {id, nome, vegano} = produto;
        if(!id || !nome || !vegano){
            throw new Error("Informações incompletas");
        }

       let novoP = this.consultarModalidade(id);

       if(!novoP){
        throw new Error(" Modalidade não cadastrada");
       }

       novoP.id = id;
       novoP.nome = nome;
       novoP.vegano = vegano;

       this.modalidadeRepository.alterarModalidade(novoP);
       return novoP;
    }

    excluirModalidade(ModalidadeData: any){
        const produto = this.consultarModalidade(ModalidadeData);
        if(produto){
            return this.modalidadeRepository.deletaModalidade(produto);
        }
        else{
            throw new Error("Modalidade não existe!");
        }

    }
    // Modalidade Fim~
}