import { TipoConta } from "../model/TipoConta";
import { tipoContaRepository } from "../repository/RepositoryTipoConta";

export class ServiceTipoConta{

    tipoConta: tipoContaRepository = new tipoContaRepository()
    

    async criaTipoConta(typeData: TipoConta): Promise<TipoConta> {
        const { descricao, codigoTipoConta} = typeData;
         if(!descricao || !codigoTipoConta){
            throw new Error("Informações incompletas");
         }

         // verificar se já existe um tipo de cont cadastrada no banco

         //inserir
    }

}