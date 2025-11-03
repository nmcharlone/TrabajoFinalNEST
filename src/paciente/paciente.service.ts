import { Injectable } from '@nestjs/common';
import { pacienteModel } from './paciente.model';

@Injectable()
export class PacienteService {
    private pacientes: pacienteModel[] = [];

    registrarPaciente(paciente: pacienteModel): string {
        let newPaciente = {
        "id": this.pacientes.length + 1,
        "nombre": paciente.nombre,
        "idCliente": paciente.idCliente,
        "historialMedico": []
        };
        this.pacientes.push(newPaciente);
        return "Paciente registrado correctamente";
    }

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