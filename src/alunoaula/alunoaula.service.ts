import { Injectable } from '@nestjs/common';
import { CreateAlunoaulaDto } from './dto/create-alunoaula.dto';
import { UpdateAlunoaulaDto } from './dto/update-alunoaula.dto';

@Injectable()
export class AlunoaulaService {
  create(createAlunoaulaDto: CreateAlunoaulaDto) {
    return 'This action adds a new alunoaula';
  }

  findAll() {
    return `This action returns all alunoaula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alunoaula`;
  }

  update(id: number, updateAlunoaulaDto: UpdateAlunoaulaDto) {
    return `This action updates a #${id} alunoaula`;
  }

  remove(id: number) {
    return `This action removes a #${id} alunoaula`;
  }
}
