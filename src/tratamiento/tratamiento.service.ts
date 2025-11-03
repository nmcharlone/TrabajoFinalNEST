import { Injectable } from '@nestjs/common';
import { tratamientoModel } from './tratamiento.model';

@Injectable()
export class TratamientoService {
    private tratamientos: tratamientoModel[] = [];
    constructor() {

        let tratamientoGet: tratamientoModel = {
            //"codigoTratamiento": 1,
            "nombre": "Revision general",
            "descripcion": "No obligatorio",
            "medicamento": "Sin medicamentos",
            "esObligatorio": false
        }
        //this.tratamientos.push(tratamientoGet);
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            //"codigoTratamiento": 2,
            "nombre": "Revision anual",
            "descripcion": "Obligatorio",
            "medicamento": "Sin medicamentos",
            "esObligatorio": true
        }
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            //"codigoTratamiento": 3,
            "nombre": "Vacunacion antirrabica",
            "descripcion": "Obligatorio",
            "medicamento": "Vacuna antirrabica",
            "esObligatorio": true
        }
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            //"codigoTratamiento": 4,
            "nombre": "Castracion",
            "descripcion": "No obligatorio",
            "medicamento": "Anestesia general",
            "esObligatorio": false
        }
        this.registrarTratamiento(tratamientoGet);
    }
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
