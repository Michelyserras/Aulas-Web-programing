import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta"; 

class tipoContaRepository{
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

}