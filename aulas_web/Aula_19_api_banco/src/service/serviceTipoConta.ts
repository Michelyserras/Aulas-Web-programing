import { TipoConta } from "../model/TipoConta";
import { tipoContaRepository } from "../repository/RepositoryTipoConta";

export class ServiceTipoConta{

    tipoContaRepository: tipoContaRepository = new tipoContaRepository()
    

    async criaTipoConta(typeData: TipoConta): Promise<TipoConta> {
        const { descricao, codigoTipoConta} = typeData;
         if(!descricao || !codigoTipoConta){
            throw new Error("Informações incompletas");
         }
        
        const tipoContaExiste = this.tipoContaRepository.filtrarTipoConta(typeData.codigoTipoConta);

        if(!tipoContaExiste){
            const novoTipo = await this.tipoContaRepository.criaTipoConta(descricao, codigoTipoConta);
            return novoTipo;
        }
        else{
            throw new Error(`Já existe um tipo de conta cadastrada com o id = ${typeData.codigoTipoConta} em nossa base de dados`);
        }


         // verificar se já existe um tipo de cont cadastrada no banco

         //inserir
    }

}