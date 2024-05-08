"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../Model/Product");
const ProductRepository_1 = require("./Repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    cadastrarModalidade(ModalidadeData) {
        const { id, nome, vegano } = ModalidadeData;
        if (!id || !nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new Product_1.Modalidade(id, nome, vegano);
        this.productRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    }
    /*
    ESSA PARTE FICA NO CONTROLLER
    if(novaModalidade){
            this.productRepository.cadastrarModalidade(novaModalidade);
            res.status(200).json(
                {
                    Mensagem: "Modalidade criada com sucesso!",
                    modalidade: novaModalidade,
                }
                    
             );
            return novaModalidade;
        }
        else
            res.status(400).json(
                {
                    Mensagem: "Erro ao criar nova modalidade!"
                }
            )
        
        }
*/
    consultarModalidade(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtrarPorId(idNumber);
    }
    getModalidades() {
        return this.productRepository.exibeTodasModalidade();
    }
}
exports.ProductService = ProductService;
