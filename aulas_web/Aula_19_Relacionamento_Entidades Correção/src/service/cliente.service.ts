import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";


export class ClienteServise{
    clienteRepository: ClienteRepository = new ClienteRepository;

    async addCliente(clienteDados: Cliente){

        const {cpf, dataNascimento} = clienteDados

        if(cpf == undefined || dataNascimento == undefined){
            throw new Error("Informações incompletas!");
        }



    }
}