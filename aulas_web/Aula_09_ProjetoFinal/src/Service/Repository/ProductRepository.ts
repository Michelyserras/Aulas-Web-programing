import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../../Model/Product";

export class ProductRepository{
   // Modalidade
    modalidadeList: Modalidade[] = [];

    cadastrarModalidade(product: Modalidade){
        this.modalidadeList.push(product);
    }

    filtrarPorId(id: number): Modalidade | undefined{
        return this.modalidadeList.find(Modalidade => Modalidade.id === id);
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

    // Estoque

    estoqueList: EstoquePaes[] = [];

    adicionarEstoque(produto: EstoquePaes){
        this.estoqueList.push(produto);  
    }

    listarEstoque(): EstoquePaes[]{
        return this.estoqueList;
    }
    //Estoque fim
}