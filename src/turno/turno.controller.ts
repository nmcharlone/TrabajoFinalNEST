import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TurnoService } from './turno.service';

@Controller('turno')
export class TurnoController {
    constructor(private readonly turnoService: TurnoService) {}

    @Get()
    getTurnos() {
        return this.turnoService.getTurnos();
    }
}
