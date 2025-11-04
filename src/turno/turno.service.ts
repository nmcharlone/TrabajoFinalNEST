import { Injectable } from '@nestjs/common';
import { turnoModel } from './turno.model';
import { PacienteService } from 'src/paciente/paciente.service';

@Injectable()
export class TurnoService {
    private turnos: turnoModel[] = [];
    constructor(private readonly pacienteService: PacienteService) {
        let turnoGet: turnoModel = {
            "idPaciente": 1,
            "idCliente": 1,
            "fecha": new Date('2025-12-12'),
            "idTratamiento": 1,
            "descripcion": "descripcion1"
        };
        this.registrarTurno(turnoGet);
        turnoGet = {
            "idPaciente": 2,
            "idCliente": 1,
            "fecha": new Date('2025-12-12'),
            "idTratamiento": 1,
            "descripcion": "descripcion2"
        };
        this.registrarTurno(turnoGet);
        turnoGet = {
            "idPaciente": 3,
            "idCliente": 2,
            "fecha": new Date('2025-12-12'),
            "idTratamiento": 1,
            "descripcion": "descripcion3"
        };
        this.registrarTurno(turnoGet);
        turnoGet = {
            "idPaciente": 4,
            "idCliente": 3,
            "fecha": new Date('2025-12-12'),
            "idTratamiento": 1,
            "descripcion": "descripcion4"
        };
        this.registrarTurno(turnoGet);
        turnoGet = {
            "idPaciente": 1,
            "idCliente": 1,
            "fecha": new Date('2025-12-12'),
            "idTratamiento": 2,
            "descripcion": "descripcion5"
        };
        this.registrarTurno(turnoGet);
    }
   registrarTurno(turno: turnoModel): string {
       let newTurno = {
           "id": this.turnos.length + 1,
           "idPaciente": turno.idPaciente,
           //"idCliente": obtenerClienteIdPorPaciente(turno.idPaciente),
           "idCliente": turno.idCliente,
           "fecha": turno.fecha,
           "idTratamiento": turno.idTratamiento,
           //"descripcion": obtenerDescripcionPorTratamiento(turno.idTratamiento),
           "descripcion": turno.descripcion
       };


       const resultado = this.pacienteService.añadirTurnoAHistorialMedico(newTurno.idPaciente, newTurno);
       this.turnos.push(newTurno);
       return "Turno registrado correctamente";
   }

    getTurnos() {
        return this.turnos;
    }

    modificarTurno(id: number, datosModificados: Partial<turnoModel>): string {
        const turno = this.turnos.find(t => t.id === id);
        if (!turno) {
            return "Turno no encontrado";
        }

        if (datosModificados.fecha) turno.fecha = new Date(datosModificados.fecha);
        if (datosModificados.idTratamiento !== undefined) turno.idTratamiento = datosModificados.idTratamiento;
        if (datosModificados.descripcion !== undefined) turno.descripcion = datosModificados.descripcion;

        const paciente = this.pacienteService.getPacientes().find(p => p.id === turno.idPaciente);
        if (paciente && paciente.historialMedico) {
            const turnoEnHistorial = paciente.historialMedico.find(t => t.id === id);
            if (turnoEnHistorial) {
                turnoEnHistorial.fecha = turno.fecha;
                turnoEnHistorial.idTratamiento = turno.idTratamiento;
                turnoEnHistorial.descripcion = turno.descripcion;
            }
        }

        return "Turno modificado correctamente";
    }
}
