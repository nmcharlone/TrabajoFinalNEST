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



    getTratamientos() {
        
        return this.tratamientos;
    }
}
