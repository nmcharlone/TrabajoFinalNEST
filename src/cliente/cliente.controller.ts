import { Body, Controller, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { clienteModel } from './cliente.model';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post('registrar')
    registrarCliente(@Body() cliente: clienteModel) : string {
        return this.clienteService.registrarCliente(cliente);
    }
}
