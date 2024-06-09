import { idText } from "typescript";
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

    // venda
    vendasList: VendaPaes[] = [];
    itensList: ItemVenda[] = [];

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }


    totalCompra(): any{
        let total = 0;
        for(let i = 0; i <= this.itensList.length; i++){
            const itens = this.itensList[i];
            const estoque = this.consultaEstoqueId(itens.estoqueId);
            if(estoque){
                total += itens.quantidade * estoque.precoVenda; 
            }
            return total;
    }
    // venda fim
    }

}