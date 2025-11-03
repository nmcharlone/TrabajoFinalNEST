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
        
        //this.clientes.push(clienteGet);
        this.registrarCliente(clienteGet);

        clienteGet = {
        "id": 2,
        "nombre": "Maria Gomez",
        "pacientes": [],
        "numTel": "987654321",
        "mail": "maria.gomez@example.com"
        }
        //this.clientes.push(clienteGet);
        this.registrarCliente(clienteGet);
        clienteGet = {
        "id": 3,
        "nombre": "Carlos Sanchez",
        "pacientes": [],
        "numTel": "555666777",
        "mail": "carlos.sanchez@example.com"   
        }
        //this.clientes.push(clienteGet);
        this.registrarCliente(clienteGet);
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
    añadirPacienteACliente(idCliente: number, idPaciente: number): string {
        let clienteModel = this.clientes.find(c => c.id === idCliente);
        if (clienteModel) {
            if (!clienteModel.pacientes) {
                clienteModel.pacientes = [];
            }
            clienteModel.pacientes.push(idPaciente);
            return "Paciente añadido al cliente correctamente";
        } else {
            return "Cliente no encontrado";
        }
    }
    
    getClientes() {
        return this.clientes;
    }
}
