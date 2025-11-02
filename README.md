**cliente**
- 
id (num)
nombre (texto)
lista de pacientes ...
  idpaciente  (idpaciente)
  nombre paciente (texto)
num tel (texto)
mail (texto)

**paciente**
- 
id (num)
nombre (texto)
idcliente  (idpaciente)
nombre cliente (texto)
historial tratamientos (lista)

**turno**
- 
id (num)
fecha (fecha)
paciente (id pac)
nom pac (texto)
cliente (id clien)
nom cliente (texto)
tratamiento (id trat)
nom tratamiento (texto)

**tratamiento**
- 
codigo trat (num)
nombre (texto)
descrip (texto)
medicamento (texto)
obligatorio  si/no (bool)