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


crear funcion que "conecte" paciente y cliente para modificar la lista de pacientes en un cliente
meter el clientes +1 del id




**TEST**
-
post localhost:3000/cliente/registrar
{
            
            "nombre": "horacio",
            "pacientes": [],
            "numTel": "0000123456",
            "mail": "horacio@mail.com"
}