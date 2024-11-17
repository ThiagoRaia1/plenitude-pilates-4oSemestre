import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
  ) {}

  create(createAlunoDto: CreateAlunoDto) {
    const aluno = this.alunoRepository.create(createAlunoDto)
    return this.alunoRepository.save(aluno)
  }

  findAll() {
    return this.alunoRepository.find();
  }

  async findOne(id: number) {
    const aluno = await this.alunoRepository.findOneBy({ id });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrada');
    }
    return this.alunoRepository.find({where: {id}});
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await this.alunoRepository.findOneBy({ id });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrada');
    }
    this.alunoRepository.merge(aluno, updateAlunoDto);
    return this.alunoRepository.save(aluno);
  }

  async remove(id: number) {
    const aluno = await this.alunoRepository.findOneBy({ id });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    return this.alunoRepository.remove(aluno);
  }
}

