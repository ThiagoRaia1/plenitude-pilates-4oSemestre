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

  async findOne(cpf: string) {
    const aluno = await this.alunoRepository.findOneBy({ cpf }); // Busca apenas um registro
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    console.log(aluno)
    return aluno; // Retorna o aluno encontrado
  }

  async findOneById(id: number) {
    const aluno = await this.alunoRepository.findOneBy({ id }); // Busca apenas um registro
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    console.log(aluno)
    return aluno; // Retorna o aluno encontrado
  }

  async update(cpf: string, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await this.alunoRepository.findOneBy({ cpf });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrada');
    }
    updateAlunoDto.dataUltimaAlteracao = new Date(updateAlunoDto.dataUltimaAlteracao)
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

