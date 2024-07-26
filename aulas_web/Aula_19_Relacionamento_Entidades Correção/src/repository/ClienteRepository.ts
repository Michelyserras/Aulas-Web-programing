import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ClienteRepository{
    constructor(){
        this.createTable();
    }


    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS banco.cliente (
            ID AUTO_INCREMENT INT PRIMARY KEY,
            CPF VARCHAR(11) NOT NULL,
            DATANASCIMENTO DATE NOT NULL
        );
        `
        try{
            const resultado = await executarComandoSQL(query, []);
        }
        catch(err){
            console.error()
        }
    }

    async addCliente(clienteData: Cliente): Promise<Cliente>{
        const query = `INSERT INTO banco.cliente (id, cpf, datanascimento) VALUES (?,?,?);`;

        try{
            const resultado = await executarComandoSQL(query, [clienteData.id, clienteData.cpf, clienteData.dataNascimento]);
            clienteData.id = resultado.insertId;

            return clienteData;
            
        } catch(err){
            console.error("Erro ao adicionar cliente");
            throw err;
        }


    }
   
}