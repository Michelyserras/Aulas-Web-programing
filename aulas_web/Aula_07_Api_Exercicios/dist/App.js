"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let estoque = []; // variavel global para armazenar os dados dos vetores
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3500; //configurando porta
const app = (0, express_1.default)();
app.use(express_1.default.json());
function appLog() {
    console.log("A API se encontra disponível no URL: http://localhost:3500");
}
function addProduto(req, res) {
    const newP = req.body;
    for (let i = 0; i <= newP.length; i++) {
        estoque.push(newP[i]);
        console.log("Produto novo: ", newP);
        console.log("Estoque atualizado", newP[i]);
    }
    res.status(200).json({
        Mensagem: "Produto adicionado com sucesso!",
        produtos: newP,
    });
}
function filtrarProduto(idNumber) {
    //idNumber = parseInt(req.query.id as string, 10);
    console.log("Procurando id:  ", idNumber);
    return estoque.find((newP) => newP.id === idNumber);
    /* console.log("Produto encontrado! ", pEncontrado);
     return pEncontrado;*/
}
function procurarPorId(req, res) {
    const idNumber = parseInt(req.query.id, 10); // converte o id para number
    /*const pEncontrado = estoque.find((Produto) => Produto.id === idNumber);
    console.log("Produto encontrado! ", pEncontrado);*/
    filtrarProduto(idNumber);
    if (idNumber) {
        res.status(200).json({
            Mensagem: `Você solicitou informacoes do produto com o id: ${idNumber}`,
            produtos: idNumber,
        });
    }
    else {
        res.status(400).json({
            Mensagem: "Produto não encontrado!",
        });
    }
}
app.post('/api/products', addProduto);
app.get('/api/products', procurarPorId);
app.listen(PORT, appLog);
