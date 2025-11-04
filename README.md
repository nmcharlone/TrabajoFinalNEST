
## Cliente

### Modelo (`cliente.model.ts`)


ClienteModel {
  id number;
  nombre: string;
  pacientes: PacienteModel[];
  numTel: string;
  mail: string;
}

El modelo representa al cliente (dueño) de uno o varios pacientes (animales).
id representa el id del cliente (generado automaticamente)

Cada cliente posee una lista de pacientes asociados.

registrarCliente(cliente: ClienteModel)

Agrega un nuevo cliente al sistema, asignándole un ID incremental.

### getClientes()

Devuelve la lista completa de clientes registrados.

### getClientePorId(id: number)

Busca y retorna un cliente según su ID.

### añadirPacienteACliente(idCliente: number, pacienteId: number)

Asocia un nuevo paciente a un cliente existente, actualizando su lista de pacientes.

## Paciente
### modelo
PacienteModel {
  id?: number;
  nombre: string;
  idCliente: number;
  historialMedico: turnoModel[];
}

Representa a un animal atendido en la clínica.
Cada paciente pertenece a un cliente y tiene un historial de turnos (tratamientos, chequeos, vacunas, etc.).

### registrarPaciente(paciente: PacienteModel)

Registra un nuevo paciente y lo asocia con su cliente correspondiente.

### getPacientes()

Retorna todos los pacientes registrados en el sistema.

### añadirTurnoAHistorialMedico(idPaciente: number, turno: turnoModel)

Agrega un turno (tratamiento o control) al historial médico del paciente indicado.

### obtenerHistorialMedico(idPaciente: number)

Devuelve el historial médico (lista de turnos) de un paciente específico.

### consultarPacientesConChequeoOVacunaPendiente()

Filtra y devuelve los pacientes que requieren un chequeo anual o una vacuna próxima, basándose en las fechas y tratamientos obligatorios de su historial.
## Tratamiento
### Modelo
TratamientoModel {
  codigoTratamiento?: number;
  nombre: string;
  descripcion: string;
  medicamento: string;
  esObligatorio: boolean;
}
Representa un tratamiento veterinario (operación, chequeo, vacuna, etc.).
El campo esObligatorio indica si requiere seguimiento o controles anuales.

### registrarTratamiento(tratamiento: TratamientoModel)

Registra un nuevo tratamiento con su información completa.

### getTratamientos()

Devuelve todos los tratamientos disponibles en el sistema.


## Turno
### Modelo

turnoModel {
  id?: number;
  idPaciente: number;
  idCliente: number;
  fecha: Date;
  idTratamiento: number;
  descripcion: string;
}

Representa un turno médico, es decir, la cita en la que se atiende a un paciente para un tratamiento o control específico.

### registrarTurno(turno: turnoModel)

Crea un nuevo turno, lo almacena en la lista de turnos y lo agrega al historial médico del paciente correspondiente.

### modificarTurno(id: number, datosModificados: Partial<turnoModel>)

Permite actualizar los datos de un turno existente (por ejemplo, fecha o descripción).
También actualiza el historial médico del paciente para mantener la coherencia.

### getTurnos()

Devuelve todos los turnos registrados en el sistema.