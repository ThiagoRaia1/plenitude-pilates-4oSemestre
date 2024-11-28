import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) { }

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os alunos' })
  @ApiResponse({ status: 200, description: 'Lista de alunos retornada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro na requisição.' })
  findAll() {
    return this.alunosService.findAll();
  }

  @Get('cpf/:cpf')
  @ApiOperation({ summary: 'Buscar aluno por CPF' })
  @ApiParam({ name: 'cpf', description: 'CPF do aluno', type: String })
  @ApiResponse({ status: 200, description: 'Aluno encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  findOne(@Param('cpf') cpf: string) {
    return this.alunosService.findOne(cpf);
  }

  // Rota para encontrar aluno por ID
  @Get('id/:id')
  @ApiOperation({ summary: 'Buscar aluno por ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno', type: String })
  @ApiResponse({ status: 200, description: 'Aluno encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  findOneById(@Param('id') id: string) {
    return this.alunosService.findOneById(+id);
  }

  @Patch(':cpf')
  @ApiOperation({ summary: 'Atualizar aluno por CPF' })
  @ApiParam({ name: 'cpf', description: 'CPF do aluno a ser atualizado', type: String })
  @ApiResponse({ status: 200, description: 'Aluno atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro na requisição.' })
  update(@Param('cpf') cpf: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(cpf, updateAlunoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover aluno por ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno a ser removido', type: String })
  @ApiResponse({ status: 200, description: 'Aluno removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aluno não encontrado.' })
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }
}
