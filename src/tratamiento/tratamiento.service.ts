import { Injectable } from '@nestjs/common';
import { tratamientoModel } from './tratamiento.model';

@Injectable()
export class TratamientoService {
    private tratamientos: tratamientoModel[] = [];
    constructor() {

        let tratamientoGet: tratamientoModel = {
            "nombre": "Revision general",
            "descripcion": "No obligatorio",
            "medicamento": "Sin medicamentos",
            "esObligatorio": false
        }
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            "nombre": "Revision anual",
            "descripcion": "Obligatorio",
            "medicamento": "Sin medicamentos",
            "esObligatorio": true
        }
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            "nombre": "Vacunacion antirrabica",
            "descripcion": "Obligatorio",
            "medicamento": "Vacuna antirrabica",
            "esObligatorio": true
        }
        this.registrarTratamiento(tratamientoGet);
        tratamientoGet = {
            
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
