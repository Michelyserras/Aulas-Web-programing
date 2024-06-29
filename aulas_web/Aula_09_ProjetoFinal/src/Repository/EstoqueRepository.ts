import { EstoquePaes} from "../Model/estoque";

export class EstoqueRepository{

    estoqueList: EstoquePaes[] = [];

    adicionarEstoque(produto: EstoquePaes){
        this.estoqueList.push(produto);  
    }

    listarEstoque(): EstoquePaes[]{
        return this.estoqueList;
    }

    consultaEstoqueId(idNum: number): EstoquePaes | undefined{
        return this.estoqueList.find(Estoque => Estoque.id === idNum);
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