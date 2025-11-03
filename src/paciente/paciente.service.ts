import { Injectable } from '@nestjs/common';
import { pacienteModel } from './paciente.model';

@Injectable()
export class PacienteService {
    private pacientes: pacienteModel[] = [];

    /*constructor() {
        let pacienteGet: pacienteModel = {
            "id": 1,
            "nombre": "paciente1",
            "idCliente": 1,
            "historialMedico": []
        }
        this.pacientes.push(pacienteGet);
    }*/
    getPacientes() {

        return this.pacientes;
    }
}