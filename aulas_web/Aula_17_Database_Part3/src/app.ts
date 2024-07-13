import express from 'express';
import { cadastrarProduto } from './controller/ProductController';

const app = express();

const PORT = 3500;

app.use(express.json());

app.post("/api/livros", cadastrarProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));