import express from 'express';
import { cadastrarLivro, listarTodosLivros, filtrarLivro, atualizarLivro, deletarLivro } from './controller/ProductController';

const app = express();

const PORT = 3500;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
app.get("/api/books", listarTodosLivros);
app.get("/api/books/:", filtrarLivro);
app.put("/api/books/", atualizarLivro);
app.delete("/api/books", deletarLivro);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));