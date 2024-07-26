import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";


export class ClienteServise{
    clienteRepository: ClienteRepository = new ClienteRepository;

    async addCliente(clientedados: Cliente){

        const {cpf, dataNascimento} = clientedados

        if(cpf == undefined || dataNascimento == undefined){
            throw new Error("Informações incompletas!");
        }

        

    }
}