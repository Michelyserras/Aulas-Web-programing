"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("./Service/Controller/ProductController");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(` API em execucao no URL: http://localhost:3000`);
}
//Modalidade
app.post("/api/modalidade", ProductController_1.CadastrarModalidade);
app.get("/api/modalidade", ProductController_1.pesquisarModalidade);
app.get("/api/modalidade/todas", ProductController_1.listaModalidade);
app.put("/api/modalidade", ProductController_1.alterarModalidade);
app.delete("/api/modalidade", ProductController_1.deletarModalidade);
//Modalidade fim
//Estoque 
app.post("/api/estoque", ProductController_1.adicionarAoEstoque);
app.get("/api/estoque/todos", ProductController_1.ListaEstoque);
app.get("/api/estoque", ProductController_1.ProcurarId);
app.put("/api/estoque", ProductController_1.atualizaEstoque);
app.delete("/api/estoque", ProductController_1.deletarEstoque);
//Estoque fim
//venda
app.post("/api/venda", ProductController_1.realizarVenda);
//venda fim
app.listen(PORT, logInfo);
