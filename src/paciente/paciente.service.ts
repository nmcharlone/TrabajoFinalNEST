import { Injectable } from '@nestjs/common';
import { pacienteModel } from './paciente.model';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class PacienteService {
    private pacientes: pacienteModel[] = [];
    constructor(private readonly clienteService: ClienteService) {
        let pacienteGet: pacienteModel = {
            "id": 1,
            "nombre": "Kuro",
            "idCliente": 1,
            "historialMedico": []
        }
        this.registrarPaciente(pacienteGet);
        pacienteGet = {
            "id": 2,
            "nombre": "Shiro",
            "idCliente": 1,
            "historialMedico": []
        }
        this.registrarPaciente(pacienteGet);
        pacienteGet = {
            "id": 3,
            "nombre": "Ru",
            "idCliente": 2,
            "historialMedico": []
        }
        this.registrarPaciente(pacienteGet);
        pacienteGet = {
            "id": 4,
            "nombre": "Sein",
            "idCliente": 3,
            "historialMedico": []
        }
        this.registrarPaciente(pacienteGet);
    }
    
    registrarPaciente(paciente: pacienteModel): string {
        let newPaciente = {
        "id": this.pacientes.length + 1,
        "nombre": paciente.nombre,
        "idCliente": paciente.idCliente,
        "historialMedico": []
        
        };
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
        let pacienteModel = this.pacientes.find(p => p.id == idPaciente);
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

    consultarPacientesConChequeoAnual(): any[] {
        const hoy = new Date();
        const pacientesPendientes: pacienteModel[] = [];

        for (const paciente of this.pacientes) {
            for (const turno of paciente.historialMedico || []) {
                if ([2, 3].includes(turno.idTratamiento)) {
                    const fechaTurno = new Date(turno.fecha);
                    const diferenciaAnios = hoy.getFullYear() - fechaTurno.getFullYear();

                    if (diferenciaAnios >= 1) {
                        pacientesPendientes.push(paciente);
                        break;
                    }
                }
            }
        }

        return pacientesPendientes;
    }
}