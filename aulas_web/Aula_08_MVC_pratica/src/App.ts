import express, {Request, Response} from "express";
import {cadastrarProduto, pesquisarProdutoPorID, listaProdutos } from "./Service/controller/productController";

const app = express() ;
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo () {
    console.log(` API em execucao no URL: http://localhost:3000`);
}

app.post ("/api/product", cadastrarProduto );
app.get ("/api/product", pesquisarProdutoPorID );
app.get ("/api/products", listaProdutos );
app.listen(PORT,logInfo);