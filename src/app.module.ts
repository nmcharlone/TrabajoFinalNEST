import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteController } from './paciente/paciente.controller';
import { PacienteService } from './paciente/paciente.service';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';
import { TratamientoController } from './tratamiento/tratamiento.controller';
import { TratamientoService } from './tratamiento/tratamiento.service';
import { TurnoService } from './turno/turno.service';
import { TurnoController } from './turno/turno.controller';

@Module({
  imports: [],
  controllers: [AppController, PacienteController, ClienteController, TratamientoController, TurnoController],
  providers: [AppService, PacienteService, ClienteService, TratamientoService, TurnoService],
})
export class AppModule {}
