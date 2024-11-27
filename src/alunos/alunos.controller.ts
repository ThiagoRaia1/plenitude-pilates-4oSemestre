import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) { }

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get('cpf/:cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.alunosService.findOne(cpf);
  }

  // Rota para encontrar aluno por ID
  @Get('id/:id')
  findOneById(@Param('id') id: string) {
    return this.alunosService.findOneById(+id);
  }

  @Patch(':cpf')
  update(@Param('cpf') cpf: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(cpf, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }
}
