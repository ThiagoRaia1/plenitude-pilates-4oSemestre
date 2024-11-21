import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';

@Controller('instrutor')
export class InstrutorController {
  constructor(private readonly instrutorService: InstrutorService) {}

  @Post()
  create(@Body() createInstrutorDto: CreateInstrutorDto) {
    return this.instrutorService.create(createInstrutorDto);
  }

  @Get()
  findAll() {
    return this.instrutorService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.instrutorService.findOne(cpf);
  }

  @Patch(':cpf')
  update(@Param('cpf') cpf: string, @Body() updateInstrutorDto: UpdateInstrutorDto) {
    return this.instrutorService.update(cpf, updateInstrutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrutorService.remove(+id);
  }
}
