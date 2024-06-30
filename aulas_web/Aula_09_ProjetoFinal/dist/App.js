"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const EstoqueController_1 = require("./Controller/EstoqueController");
const ModalidadeController_1 = require("./Controller/ModalidadeController");
const VendaController_1 = require("./Controller/VendaController");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(` API em execucao no URL: http://localhost:3000`);
}
//Modalidade
app.post("/api/modalidade", ModalidadeController_1.CadastrarModalidade);
app.get("/api/modalidade", ModalidadeController_1.pesquisarModalidade);
app.get("/api/modalidade/todas", ModalidadeController_1.listaModalidade);
app.put("/api/modalidade", ModalidadeController_1.alterarModalidade);
app.delete("/api/modalidade", ModalidadeController_1.deletarModalidade);
//Modalidade fim
//Estoque 
app.post("/api/estoque", EstoqueController_1.adicionarAoEstoque);
app.get("/api/estoque/todos", EstoqueController_1.ListaEstoque);
app.get("/api/estoque", EstoqueController_1.ProcurarId);
app.put("/api/estoque", EstoqueController_1.atualizaEstoque);
app.delete("/api/estoque", EstoqueController_1.deletarEstoque);
//Estoque fim
//venda
app.post("/api/venda", VendaController_1.realizarVenda);
/*app.get("/api/vendas", pesquisarVenda);
//venda fim/*/
app.listen(PORT, logInfo);
