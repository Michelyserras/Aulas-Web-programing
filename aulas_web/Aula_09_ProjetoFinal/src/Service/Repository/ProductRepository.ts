import { Modalidade, EstoquePaes, ItemVenda, VendaPaes } from "../../Model/Product";

export class ProductRepository{
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
}