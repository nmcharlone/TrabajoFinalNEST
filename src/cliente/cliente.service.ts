import { Injectable } from '@nestjs/common';
import { clienteModel } from './cliente.model';

@Injectable()
export class ClienteService {
    private clientes: clienteModel[] = [];

    registrarCliente(cliente: clienteModel) : any {
        let newCliente = {
            "id": this.clientes.length + 1,
            "nombre": cliente.nombre,
            "pacientes": [],
            "numTel": cliente.numTel,
            "mail": cliente.mail,
        }
        this.clientes.push(newCliente);
        return "Cliente registrado con éxito";
    }
    

}
