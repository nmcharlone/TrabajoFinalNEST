import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { TurnoService } from './turno.service';
import { turnoModel } from './turno.model';

@Controller('turno')
export class TurnoController {
    constructor(private readonly turnoService: TurnoService) {}

    @Post('registrar')
    registrarTurno(@Body() turno: turnoModel): string {
        return this.turnoService.registrarTurno(turno);
    }




    @Get()
    getTurnos() {
        return this.turnoService.getTurnos();
    }
}
