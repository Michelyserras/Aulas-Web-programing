import { EstoquePaes} from "../Model/estoque";
import { getEstoque } from "../global/global";

export class EstoqueRepository{

    estoqueList: EstoquePaes[] = getEstoque();

    adicionarEstoque(produto: EstoquePaes){
        this.estoqueList.push(produto);  
    }

    listarEstoque(): EstoquePaes[]{
        return this.estoqueList;
    }

    consultaEstoqueId(idNum: number): EstoquePaes | undefined{
        return this.estoqueList.find(Estoque => Estoque.id === idNum);
    }

    consultaEstoquePorMOD(idNum: number): EstoquePaes | undefined{
        return this.estoqueList.find(Estoque => Estoque.modalidadeId === idNum);
    }

  
    
    alterarEstoque(produto: EstoquePaes): number{
        const index = this.estoqueList.indexOf(produto);
        if(index !== -1){
            this.estoqueList[index] = produto;
        }                       
        return index;
    }

    deletarEstoque(produto: EstoquePaes){
        let i = 0;
        const lista = this.estoqueList;

        for(i=0; i < lista.length; i++){
            
            if(produto.id === lista[i].id){

                if(produto.quantidade <= lista[i].quantidade){

                    lista[i].quantidade -= produto.quantidade;

                    if(lista[i].quantidade === 0){
                        lista.splice(i,1);
                    }

                    return lista[i];
                }
            }

        }
    }

    
    //Estoque fim
}