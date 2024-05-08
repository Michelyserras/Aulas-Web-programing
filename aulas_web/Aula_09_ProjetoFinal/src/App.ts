import { CadastrarModalidade,pesquisarModalidade, listaModalidade,  } from "./Service/Controller/ProductController";
import express, {Request, Response} from "express";

const app = express() ;
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo () {
    console.log(` API em execucao no URL: http://localhost:3000`);
}

app.post ("/api/modalidade", CadastrarModalidade );
app.get ("/api/modalidade", pesquisarModalidade);
app.get ("/api/modalidade/todas", listaModalidade );
app.listen(PORT,logInfo);