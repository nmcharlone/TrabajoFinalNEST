import { Injectable } from '@nestjs/common';
import { tratamientoModel } from './tratamiento.model';

@Injectable()
export class TratamientoService {
    private tratamientos: tratamientoModel[] = [];
    /*constructor() {

        let tratamientoGet: tratamientoModel = {
            "codigoTratamiento": 1,
            "nombre": "tratamiento1",
            "descripcion": "descripcion1",
            "medicamento": "medicamento1",
            "esObligatorio": false
        }
        this.tratamientos.push(tratamientoGet);
    }*/
    registrarTratamiento(tratamiento: tratamientoModel): string {
        let newTratamiento = {
            "codigoTratamiento": this.tratamientos.length + 1,
            "nombre": tratamiento.nombre,
            "descripcion": tratamiento.descripcion,
            "medicamento": tratamiento.medicamento,
            "esObligatorio": tratamiento.esObligatorio
        };
        this.tratamientos.push(newTratamiento);
        return "Tratamiento registrado correctamente";
    }


    getTratamientos() {
        return this.tratamientos;
    }
}
