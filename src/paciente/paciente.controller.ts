import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacientesService: PacienteService) {
    
    }
    
    @Get()
    getPacientes(){
       return this.pacientesService.getPacientes();
     }
}