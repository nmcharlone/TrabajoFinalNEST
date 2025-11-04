import { Controller } from '@nestjs/common';
import { Get, Post, Body, Put, Param } from '@nestjs/common';
import { TurnoService } from './turno.service';
import { turnoModel } from './turno.model';

@Controller('turno')
export class TurnoController {
    constructor(private readonly turnoService: TurnoService) {}

    @Post('registrar')
    registrarTurno(@Body() turno: turnoModel): string {
        return this.turnoService.registrarTurno(turno);
    }


    @Put('modificar/:id')
    modificarTurno(@Param('id') id: number, @Body() datosModificados: Partial<turnoModel>): string {
        return this.turnoService.modificarTurno(Number(id), datosModificados);
    }

    @Get()
    getTurnos() {
        return this.turnoService.getTurnos();
    }
}
