import { CadastrarModalidade,pesquisarModalidade, listaModalidade, deletarModalidade, alterarModalidade } from "./Service/Controller/ProductController";
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


//Estoque fim

app.listen(PORT,logInfo);