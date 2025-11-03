import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';

@Controller('tratamiento')
export class TratamientoController {
    constructor(private readonly tratamientoService: TratamientoService) {}

    @Get()
    getTratamientos() {
        return this.tratamientoService.getTratamientos();
    }
}
