import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";


const productService = new ProductService();

export async function cadastrarLivro(req: Request, res: Response){
    try {
        const novoLivro = await productService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                mensagem:"Produto adicionado com sucesso!",
                livro: novoLivro
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarLivro(req: Request, res: Response){
    try {
        const livroExiste = await productService.filtrarProduto(req.query.id);
        if(livroExiste){
            const livro = await productService.atualizarProduto(req.body);
            res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                livro: livro,
            }
        );
        }
        else{
            throw new Error("Esse Livro não existe")
        }
        
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};


export async function filtrarLivro(req: Request, res: Response){
    try {
        const livroExiste = await productService.filtrarProduto(req.query.id);
        if(livroExiste){
            res.status(200).json(
                {
                    mensagem:"Livro encontrado com sucesso!",
                    produto:livroExiste
                }
            );

        }
        else{
            throw new Error("Livro não encontrado em nossa base de dados!")
        }
       
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosLivros(req: Request, res: Response){
    try {
        const livros = await productService.listarTodosProdutos();
        res.status(200).json(
            {
                mensagem:"Livros listados com sucesso!",
                Livros:livros
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarLivro(req: Request, res: Response){
    try {
        const livroExiste =  await productService.filtrarProduto(req.query.id);
        if(livroExiste){
             const livro = await productService.deletarProduto(req.body);
            res.status(200).json(
                {
                    mensagem:"Livro deletado com sucesso!",
                    Livro: livro,
                }
            );
        }
       
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

