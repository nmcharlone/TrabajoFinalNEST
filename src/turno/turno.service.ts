import { Injectable } from '@nestjs/common';
import { turnoModel } from './turno.model';

@Injectable()
export class TurnoService {
    private turnos: turnoModel[] = [];
    /*constructor() {
        let turnoGet: turnoModel = {
            "id": 1,
            "idPaciente": 1,
            "idCliente": 1,
            "fecha": new Date(),
            "idTratamiento": 1,
            "descripcion": "descripcion1"
        };
        this.turnos.push(turnoGet);
    }*/
   registrarTurno(turno: turnoModel): string {
       let newTurno = {
           "id": this.turnos.length + 1,
           "idPaciente": turno.idPaciente,
           "idCliente": turno.idCliente,
           "fecha": turno.fecha,
           "idTratamiento": turno.idTratamiento,
           "descripcion": turno.descripcion
       };
       this.turnos.push(newTurno);
       return "Turno registrado correctamente";
   }

    getTurnos() {
        return this.turnos;
    }
}
