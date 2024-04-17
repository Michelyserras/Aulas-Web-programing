import express, {Request, Response} from "express";
import { Produto } from "./Produto";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

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
        console.log("Produto novo: ", newP);
        console.log("Estoque atualizado", newP[i]);
    }

    

    res.status(200).json(
        {
            Mensagem: "Produto adicionado com sucesso!",
            produtos: newP,
        }
            
     )

      
}

function filtrarProduto(idNumber: number): Produto| undefined{
    //idNumber = parseInt(req.query.id as string, 10);
    console.log("Procurando id:  ", idNumber);
    return estoque.find((newP) => newP.id === idNumber);

   /* console.log("Produto encontrado! ", pEncontrado);
    return pEncontrado;*/
   
}

function procurarPorId(req: Request, res: Response){
    const idNumber = parseInt(req.query.id as string, 10); // converte o id para number

    /*const pEncontrado = estoque.find((Produto) => Produto.id === idNumber);
    console.log("Produto encontrado! ", pEncontrado);*/
     filtrarProduto(idNumber);
        if(idNumber){
            res.status(200).json(
            {
                    Mensagem: `Você solicitou informacoes do produto com o id: ${idNumber}`,
                    produtos: idNumber,
                    
                }
                    
            )
        } else{
            res.status(400).json(
                {
                    Mensagem: "Produto não encontrado!",
                }
            )
        }
            
}


app.post('/api/products', addProduto);
app.get('/api/products', procurarPorId);

app.listen(PORT, appLog);

