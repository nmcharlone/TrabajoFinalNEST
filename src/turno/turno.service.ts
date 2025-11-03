import { Injectable } from '@nestjs/common';
import { turnoModel } from './turno.model';
import { PacienteService } from 'src/paciente/paciente.service';

@Injectable()
export class TurnoService {
    private turnos: turnoModel[] = [];
    constructor(private readonly pacienteService: PacienteService) {
        let turnoGet: turnoModel = {
            //"id": 1,
            "idPaciente": 1,
            "idCliente": 1,
            //"fecha": new Date(),
            "fecha": 12122025,
            "idTratamiento": 1,
            "descripcion": "descripcion1"
        };
        //this.turnos.push(turnoGet);
        this.registrarTurno(turnoGet);
        turnoGet = {
            //"id": 2,
            "idPaciente": 2,
            "idCliente": 1,
            "fecha": 12122025,
            "idTratamiento": 1,
            "descripcion": "descripcion2"
        };
        //this.turnos.push(turnoGet);
        this.registrarTurno(turnoGet);
        turnoGet = {
            //"id": 3,
            "idPaciente": 3,
            "idCliente": 2,
            "fecha": 12122025,
            "idTratamiento": 1,
            "descripcion": "descripcion3"
        };
        //this.turnos.push(turnoGet);
        this.registrarTurno(turnoGet);
        turnoGet = {
            //"id": 4,
            "idPaciente": 4,
            "idCliente": 3,
            "fecha": 12122025,
            "idTratamiento": 1,
            "descripcion": "descripcion4"
        };
        //this.turnos.push(turnoGet);
        this.registrarTurno(turnoGet);
        turnoGet = {
            //"id": 5,
            "idPaciente": 1,
            "idCliente": 1,
            "fecha": 12122025,
            "idTratamiento": 2,
            "descripcion": "descripcion5"
        };
        //this.turnos.push(turnoGet);
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
}
