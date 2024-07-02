import { Modalidade } from "../Model/ModalidadePaes";
import { VendaPaes } from "../Model/vendaPaes";
import { EstoquePaes } from "../Model/estoque";
import { ItemVenda } from "../Model/itemVenda";

const modalidadeList: Modalidade[] = [];
const estoqueList: EstoquePaes[] = [];
const vendaList: VendaPaes[] = [];
const itensList: ItemVenda[] = [];

export function getModalidade(){
    return modalidadeList;
}

export function getEstoque(){
    return estoqueList;
}

export function getVenda(){
    return vendaList;
}

export function getItens(){
    return itensList;
}






