import { Body, Controller, Post, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { clienteModel } from './cliente.model';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post('registrar')
    registrarCliente(@Body() cliente: clienteModel) : string {
        return this.clienteService.registrarCliente(cliente);
    }

    @Get()
    getClientes() {
        return this.clienteService.getClientes();
    }
}
