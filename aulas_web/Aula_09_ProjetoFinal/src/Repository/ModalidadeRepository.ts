import { Modalidade } from "../Model/ModalidadePaes";
import { getModalidade } from "../global/global";

export class ModalidadeRepository{
    // Modalidade
     modalidadeList: Modalidade[] = getModalidade();
 
     cadastrarModalidade(product: Modalidade){
         this.modalidadeList.push(product);
     }
 
     filtrarPorId(id: number): Modalidade | undefined{
         return this.modalidadeList.find(Modalidade => Modalidade.id === id);
     }

     filtrarPorNome(id: number): any {
        const modalidade = this.filtrarPorId(id);
        
        if(modalidade){
            return modalidade.nome ;
        }
        else{
            return undefined;
        }
        
    }
 
     exibeTodasModalidade(): Modalidade[]{
         return this.modalidadeList;
     }
 
 
     alterarModalidade(produto: Modalidade): number{
         const index = this.modalidadeList.indexOf(produto);
         if(index !== -1){
             this.modalidadeList[index] = produto;
         }                       
         return index;
     }
 
     deletaModalidade(product: Modalidade){
 
      //this.modalidadeList = this.modalidadeList.filter((item) => item !== product);
 
      const index = this.modalidadeList.indexOf(product);
      if(index !== -1){
         this.modalidadeList.splice(index, 1);
      }
     }
 
     //Modalidade Fim
    }