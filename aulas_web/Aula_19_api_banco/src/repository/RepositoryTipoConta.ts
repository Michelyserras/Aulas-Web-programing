import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta"; 

export class tipoContaRepository{
    constructor(){
        this.createTable();
    }

    private async createTable(){
       const query = ` 
       CREATE TABLE IF NOT EXIST banco.tipo_Conta (
        id int primary key,
        descricapo varchar(255),
        codigo_tipo_conta varchar(50) UNIQUE
       ) `;
    }

    async criaTipoConta( descricao:string, codigo_tipo_conta: number): Promise<TipoConta>{
        try{
            const query = `INSERT INTO tipo_conta(descricao, codigo_tipo_conta) VALUES (?, ?)`
            const resultado = await executarComandoSQL(query, [descricao, codigo_tipo_conta]);
            console.log("Novo tipo de conta criada com sucesso", resultado.id);

            const novoTipo = new TipoConta(resultado.id, descricao, codigo_tipo_conta);

            return new Promise<TipoConta>((resolve)=>{
                resolve(novoTipo);
            })


        }
        catch (err){
            console.error('Erro ao adicionar um novo tipo de conta', err);
            throw err;
        }

        

    }

    async filtrarTipoConta(id:number): Promise<TipoConta | undefined> {
        try{

            const query = `selectc * from banco.tipo_conta where codigo_tipo_conta = ?`
            const resultado = await executarComandoSQL(query, [id]);
            console.log("tipo de conta localizado com sucesso", resultado);

            if(!resultado){
                throw new Error("Esse tipo de conta já existe na base de dados");
            }

            return new Promise<TipoConta>((resolve)=>{
                resolve(resultado);
            })

        } catch(err){
            console.error('Erro ao buscar tipo de conta pelo codigo');
        }
    }

}