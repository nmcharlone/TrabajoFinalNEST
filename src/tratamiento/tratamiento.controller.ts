import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { tratamientoModel } from './tratamiento.model';

@Controller('tratamiento')
export class TratamientoController {
    constructor(private readonly tratamientoService: TratamientoService) {}


    @Post('registrar')
        registrarTratamiento(@Body() tratamiento: tratamientoModel): string {
        return this.tratamientoService.registrarTratamiento(tratamiento);
    }




    @Get()
    getTratamientos() {
        return this.tratamientoService.getTratamientos();
    }
}
