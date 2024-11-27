import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  // Rota para criar um pagamento
  @Post()
  async create(@Body() createPagamentoDto: CreatePagamentoDto) {
    try {
      // Verificar se a forma de pagamento é válida
      const pagamento = await this.pagamentoService.create(createPagamentoDto);
      return pagamento;
    } catch (error) {
      throw new BadRequestException('Erro ao criar pagamento');
    }
  }

  // Rota para encontrar todos os pagamentos
  @Get()
  async findAll() {
    try {
      return await this.pagamentoService.findAll();
    } catch (error) {
      throw new BadRequestException('Erro ao buscar pagamentos');
    }
  }

  // Rota para encontrar um pagamento específico por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pagamentoId = parseInt(id, 10);  // Garantir que o ID é um número
    if (isNaN(pagamentoId)) {
      throw new BadRequestException('ID inválido');
    }
    return this.pagamentoService.findOne(pagamentoId);
  }

  // Rota para atualizar um pagamento
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePagamentoDto: UpdatePagamentoDto) {
    const pagamentoId = parseInt(id, 10);  // Garantir que o ID é um número
    if (isNaN(pagamentoId)) {
      throw new BadRequestException('ID inválido');
    }
    try {
      return await this.pagamentoService.update(pagamentoId, updatePagamentoDto);
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar pagamento');
    }
  }

  // Rota para remover um pagamento
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const pagamentoId = parseInt(id, 10);  // Garantir que o ID é um número
    if (isNaN(pagamentoId)) {
      throw new BadRequestException('ID inválido');
    }
    try {
      return await this.pagamentoService.remove(pagamentoId);
    } catch (error) {
      throw new BadRequestException('Erro ao remover pagamento');
    }
  }
}
