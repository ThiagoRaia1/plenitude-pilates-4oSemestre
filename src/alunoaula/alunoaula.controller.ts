import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunoaulaService } from './alunoaula.service';
import { CreateAlunoaulaDto } from './dto/create-alunoaula.dto';
import { UpdateAlunoaulaDto } from './dto/update-alunoaula.dto';

@Controller('alunoaula')
export class AlunoaulaController {
  constructor(private readonly alunoaulaService: AlunoaulaService) {}

  @Post()
  create(@Body() createAlunoaulaDto: CreateAlunoaulaDto) {
    return this.alunoaulaService.create(createAlunoaulaDto);
  }

  @Get()
  findAll() {
    return this.alunoaulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoaulaService.findOne(+id);
  }

  @Post('verifica')
  async verifica(@Body() body: { aluno: number; aula: number }): Promise<{ existe: boolean }> {
    const existe = await this.alunoaulaService.verificaAlunoAula(body.aluno, body.aula);
    return { existe };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoaulaDto: UpdateAlunoaulaDto) {
    return this.alunoaulaService.update(+id, updateAlunoaulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunoaulaService.remove(+id);
  }
}
