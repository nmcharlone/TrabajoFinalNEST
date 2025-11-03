import { Injectable } from '@nestjs/common';
import { pacienteModel } from './paciente.model';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class PacienteService {
    private pacientes: pacienteModel[] = [];
    constructor(private readonly clienteService: ClienteService) {}
    /*constructor() {
        let pacienteGet: pacienteModel = {
            "id": 1,
            "nombre": "paciente1",
            "idCliente": 1,
            "historialMedico": []
        }
        this.pacientes.push(pacienteGet);
    }*/
    registrarPaciente(paciente: pacienteModel): string {
        let newPaciente = {
        "id": this.pacientes.length + 1,
        "nombre": paciente.nombre,
        "idCliente": paciente.idCliente,
        "historialMedico": []
        
        };
        //cliente.pacientes.push(newPaciente.id);

        //const clienteService = new ClienteService();
        //clienteService.añadirPacienteACliente(newPaciente.idCliente, newPaciente.id);
        const resultado = this.clienteService.añadirPacienteACliente(newPaciente.idCliente, newPaciente.id);
        this.pacientes.push(newPaciente);
        return "Paciente registrado correctamente";
    }

    
    añadirTurnoAHistorialMedico(idPaciente: number, turno: any): string {
       let pacienteModel = this.pacientes.find(p => p.id === idPaciente);
       if (pacienteModel) {
            if (!pacienteModel.historialMedico) {
                pacienteModel.historialMedico = [];
            }
           pacienteModel.historialMedico.push(turno);
           return "Turno añadido al historial médico del paciente correctamente";
       } else {
           return "Paciente no encontrado";
       }
    }

    obtenerHistorialMedico(idPaciente: number): any[] {
        let pacienteModel = this.pacientes.find(p => p.id === idPaciente);
        if (pacienteModel) {
            if (!pacienteModel.historialMedico) {
                pacienteModel.historialMedico = [];
            }
           return pacienteModel.historialMedico;
        } else {
           return [];
        }
            
        
    }

    getPacientes() {

        return this.pacientes;
    }
}