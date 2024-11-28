import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('aula')
export class AulaController {
  constructor(private readonly aulaService: AulaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova aula' })
  @ApiBody({ type: CreateAulaDto })
  @ApiResponse({ status: 201, description: 'Aula criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro na criação da aula.' })
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulaService.create(createAulaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todas as aulas' })
  @ApiResponse({ status: 200, description: 'Lista de aulas retornada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro na requisição.' })
  findAll() {
    return this.aulaService.findAll();
  }

  @Get(':horaComeco')
  @ApiOperation({ summary: 'Buscar aula por hora de início' })
  @ApiParam({ name: 'horaComeco', description: 'Hora de início da aula', type: Date })
  @ApiResponse({ status: 200, description: 'Aula encontrada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aula não encontrada.' })
  findOne(@Param('horaComeco') horaComeco: Date) {
    // console.log("Dentro do controller")
    return this.aulaService.findOne(horaComeco);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar aula por ID' })
  @ApiParam({ name: 'id', description: 'ID da aula a ser atualizada', type: String })
  @ApiBody({ type: UpdateAulaDto })
  @ApiResponse({ status: 200, description: 'Aula atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro na atualização da aula.' })
  update(@Param('id') id: string, @Body() updateAulaDto: UpdateAulaDto) {
    return this.aulaService.update(+id, updateAulaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover aula por ID' })
  @ApiParam({ name: 'id', description: 'ID da aula a ser removida', type: String })
  @ApiResponse({ status: 200, description: 'Aula removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aula não encontrada.' })
  remove(@Param('id') id: string) {
    return this.aulaService.remove(+id);
  }
}
