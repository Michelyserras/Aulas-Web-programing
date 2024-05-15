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
    itensList: ItemVenda[] = []

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }

    soma(): number {
        let soma: number = 0;
        for (let i = 0; i<= this.itensList.length; i++){
            if(this.estoqueList[i].quantidade === 0){
                throw new Error("Infelizmente o estoque está vazio!");
            }
            soma += this.itensList[i].quantidade * this.estoqueList[i].precoVenda;
        }
        return soma;

    }
    // venda fim
}