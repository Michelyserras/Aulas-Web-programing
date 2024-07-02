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
        const index = this.estoqueList.indexOf(produto);
        if(index !== -1){
            this.estoqueList.splice(index, 1);
        }
    }

    
    //Estoque fim
}