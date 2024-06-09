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

    realizarVenda(compra: VendaPaes){
        this.vendasList.push(compra);
    }

    pegarPreco(id:number){
        const item = this.estoqueList.find(item => item.id === id);
        return item ? item.precoVenda : undefined;
    }

    calcularTotal(itensComprados: ItemVenda[]){
        let soma = 0;
        for(const item of itensComprados){
            const preco = this.pegarPreco(item.estoqueId)
            if(preco !== undefined){
                soma += (preco * item.quantidade)
            }
        }
        return soma;

    }

    filtrarVendaPorId(id: number): VendaPaes| undefined{
        return this.vendasList.find(VendaPaes => VendaPaes.id === id);
    }
    // venda fim
}