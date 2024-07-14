import express from 'express';
import { cadastrarProduto, listarTodosProduto, filtrarProduto, atualizarProduto, deletarProduto } from './controller/ProductController';

const app = express();

const PORT = 3500;

app.use(express.json());

app.post("/api/books", cadastrarProduto);
//app.get("/api/books", listarTodosProduto);
app.get("/api/books/:", filtrarProduto);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));