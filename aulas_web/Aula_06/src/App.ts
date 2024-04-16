import express, {Request, Response} from "express";

const PORT = process.env.PORT ?? 3000; //configurando porta

const app = express();
app.use(express.json());

function appLog(){
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}

function hello(req: Request, res: Response){
    res.send("Hello World");
}
app.get("/api/hello",hello);

app.listen(PORT, appLog); 