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
    }
    res.status(200).json({
        Mensagem: "Produto cadastrado com sucesso!",
        produtos: newP,
    });
}
app.post('/api/Nproduto', addProduto);
app.listen(PORT, appLog);
