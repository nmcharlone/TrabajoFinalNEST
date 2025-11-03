import { Injectable } from '@nestjs/common';
import { turnoModel } from './turno.model';

@Injectable()
export class TurnoService {
    private turnos: turnoModel[] = [];
    constructor() {
        let turnoGet: turnoModel = {
            "id": 1,
            "idPaciente": 1,
            "idCliente": 1,
            "fecha": new Date(),
            "idTratamiento": 1,
            "descripcion": "descripcion1"
        };
        this.turnos.push(turnoGet);
    }

    getTurnos() {
        return this.turnos;
    }
}
