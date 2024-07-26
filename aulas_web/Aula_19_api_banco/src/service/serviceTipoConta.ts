import { TipoConta } from "../model/TipoConta";
import { tipoContaRepository } from "../repository/RepositoryTipoConta";

export class ServiceTipoConta{

    tipoContaRepository: tipoContaRepository = new tipoContaRepository()
    

    async criaTipoConta(typeData: TipoConta): Promise<TipoConta> {
        const { id, descricao, codigoTipoConta} = typeData;
         if(!id || !descricao){
            throw new Error("Informações incompletas");
         }
        
        const tipoContaExiste = await this.tipoContaRepository.filtrarTipoConta(descricao);
        if(tipoContaExiste){
            throw new Error(`Já existe um tipo de conta cadastrada com a descrição ${typeData.descricao} em nossa base de dados`);    
        }
        
        const novoTipo = await this.tipoContaRepository.criaTipoConta(id, descricao);
        return novoTipo;
    }


         // verificar se já existe um tipo de cont cadastrada no banco

         //inserir
    }
