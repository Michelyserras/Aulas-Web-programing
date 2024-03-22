import express, {Request, Response} from "express";
import { Produto } from "./Produto";

let estoque: Produto[] = []; // variavel global para armazenar os dados dos vetores

const PORT = process.env.PORT ?? 3500; //configurando porta

const app = express();
app.use(express.json());

function appLog(){
    console.log("A API se encontra disponível no URL: http://localhost:3500");
}

function addProduto(req: Request, res: Response){
    const newP: Produto[] = req.body;

    for(let i = 0; i<=newP.length; i++){
        estoque.push(newP[i]);
    }

    res.status(200).json(
        {
            Mensagem: "Produto cadastrado com sucesso!",
            produtos: newP,
        }
            
    )

}

app.post('/api/Nproduto', addProduto);

app.listen(PORT, appLog);

