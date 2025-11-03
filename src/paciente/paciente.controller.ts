import { Body, Controller, Param } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { pacienteModel } from './paciente.model';

@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacientesService: PacienteService) {
    
    }
    
    @Post('registrar')
    registrarPaciente(@Body() paciente: pacienteModel): string {
       return this.pacientesService.registrarPaciente(paciente);
    }


    @Get('historialMedico/:idPaciente')
    obtenerHistorialMedico(@Param('idPaciente') idPaciente: number): any[] {
       return this.pacientesService.obtenerHistorialMedico(idPaciente);
    }

    @Get()
    getPacientes(){
       return this.pacientesService.getPacientes();
     }
}