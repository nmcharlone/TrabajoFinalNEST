import { Injectable } from '@nestjs/common';
import { clienteModel } from './cliente.model';

@Injectable()
export class ClienteService {
    private clientes: clienteModel[] = [];
    constructor() {
        let clienteGet: clienteModel = {
        "id": 1,
        "nombre": "Juan Perez",
        "pacientes": [],
        "numTel": "123456789",
        "mail": "juan.perez@example.com"
        }
        this.clientes.push(clienteGet);
    }
    registrarCliente(cliente: clienteModel) : string{

        let newCliente = {
            "id": this.clientes.length + 1,//cliente.id, //
            "nombre": cliente.nombre,
            "pacientes": [],
            "numTel": cliente.numTel,
            "mail": cliente.mail,
        }
        this.clientes.push(newCliente);
        return "Cliente registrado con éxito";
    }
    
    getClientes() {
        return this.clientes;
    }
}
