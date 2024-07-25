import { TipoConta } from "../model/TipoConta";
import { tipoContaRepository } from "../repository/RepositoryTipoConta";

export class ServiceTipoConta{

    tipoContaRepository: tipoContaRepository = new tipoContaRepository()
    

    async criaTipoConta(typeData: TipoConta): Promise<TipoConta> {
        const { id, descricao} = typeData;
         if(!id || !descricao){
            throw new Error("Informações incompletas");
         }
        
        const tipoContaExiste = await this.tipoContaRepository.filtrarTipoConta(typeData.id);

        if(!tipoContaExiste){
            const novoTipo = await this.tipoContaRepository.criaTipoConta(id, descricao);
            return novoTipo;
        }
        else{
            throw new Error(`Já existe um tipo de conta cadastrada com o id = ${typeData.id} em nossa base de dados`);
        }


         // verificar se já existe um tipo de cont cadastrada no banco

         //inserir
    }

}