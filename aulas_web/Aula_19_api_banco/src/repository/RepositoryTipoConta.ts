import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta"; 

export class tipoContaRepository{
    constructor(){
        this.createTable();
    }

    private async createTable(){
       const query = ` 
       CREATE TABLE IF NOT EXISTS banco.tipo_Conta (
        id int primary key,
        descricao varchar(255),
        codigo_tipo_conta varchar(50)
       );`;

       try {
        const resultado =  await executarComandoSQL(query, []);
        console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async criaTipoConta(id:number, descricao:string): Promise<TipoConta>{
        try{
            const query = `INSERT INTO banco.tipo_Conta(id, descricao) VALUES (?, ?);`;
            const resultado = await executarComandoSQL(query, [id, descricao]);
            console.log(`Novo tipo de conta criada com sucesso! Id = ${resultado.codigoTipoConta}`);

            const novoTipo = new TipoConta(id, descricao, resultado.codigoTipoConta);

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
            const query = `select * from banco.tipo_Conta where id = ?;`;
            const resultado = await executarComandoSQL(query, [id]);
            console.log("tipo de conta localizado com sucesso", resultado);

            if(resultado.lenght > 0){
                console.log("Esse tipo de conta já existe na base de dados", resultado);
                return resultado[0] as TipoConta; 
            }
            else{
                return undefined;
            }

        } catch(err){
            console.error('Erro ao buscar tipo de conta pelo codigo');
        }
    }

}