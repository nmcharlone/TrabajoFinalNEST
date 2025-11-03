export class pacienteModel {
    id?: number;
    nombre: string;
    idCliente: number;
    // va en un get nombreCliente: string;
    historialMedico?: any[]; //lista de turnos
}
