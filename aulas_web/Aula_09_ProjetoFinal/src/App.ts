import { 
    CadastrarModalidade,pesquisarModalidade, listaModalidade, deletarModalidade, alterarModalidade,
    adicionarAoEstoque, ListaEstoque, ProcurarId, atualizaEstoque,

} from "./Service/Controller/ProductController";
import express, {Request, Response} from "express";

const app = express() ;
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo () {
    console.log(` API em execucao no URL: http://localhost:3000`);
}

//Modalidade

app.post("/api/modalidade", CadastrarModalidade );
app.get("/api/modalidade", pesquisarModalidade);
app.get("/api/modalidade/todas", listaModalidade );
app.put("/api/modalidade", alterarModalidade );
app.delete("/api/modalidade", deletarModalidade);

//Modalidade fim

//Estoque 
app.post("/api/estoque", adicionarAoEstoque);
app.get("/api/estoque/todos", ListaEstoque);
app.get("/api/estoque", ProcurarId);
app.put("/api/estoque", atualizaEstoque);

//Estoque fim

app.listen(PORT,logInfo);