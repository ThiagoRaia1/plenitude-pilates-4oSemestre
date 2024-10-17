import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfildeAcessoService } from './perfilde-acesso.service';
import { CreatePerfildeAcessoDto } from './dto/create-perfilde-acesso.dto';
import { UpdatePerfildeAcessoDto } from './dto/update-perfilde-acesso.dto';

@Controller('perfilde-acesso')
export class PerfildeAcessoController {
  constructor(private readonly perfildeAcessoService: PerfildeAcessoService) {}

  @Post()
  create(@Body() createPerfildeAcessoDto: CreatePerfildeAcessoDto) {
    return this.perfildeAcessoService.create(createPerfildeAcessoDto);
  }

  @Get()
  findAll() {
    return this.perfildeAcessoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfildeAcessoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfildeAcessoDto: UpdatePerfildeAcessoDto) {
    return this.perfildeAcessoService.update(+id, updatePerfildeAcessoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfildeAcessoService.remove(+id);
  }
}
