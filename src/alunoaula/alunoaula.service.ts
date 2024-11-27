import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoaulaDto } from './dto/create-alunoaula.dto';
import { UpdateAlunoaulaDto } from './dto/update-alunoaula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alunoaula } from './entities/alunoaula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoaulaService {
  constructor(
    @InjectRepository(Alunoaula)
    private alunoAulaRepository: Repository<Alunoaula>,
  ) {}

  create(createAlunoAulaDto: CreateAlunoaulaDto) {
    const alunoAula = this.alunoAulaRepository.create(createAlunoAulaDto)
    console.log(alunoAula)
    return this.alunoAulaRepository.save(alunoAula)
  }

  async findAll() {
    return this.alunoAulaRepository
      .createQueryBuilder('alunoAula')
      .leftJoinAndSelect('alunoAula.aluno', 'aluno') // Faz o join com a tabela Aluno
      .leftJoinAndSelect('alunoAula.aula', 'aula')   // Faz o join com a tabela Aula
      .getMany();
  }

  async findByAulaId(aulaId: number) {
    return this.alunoAulaRepository
      .createQueryBuilder('alunoAula')
      .leftJoinAndSelect('alunoAula.aluno', 'aluno')  // Faz join com a tabela Aluno
      .leftJoinAndSelect('alunoAula.aula', 'aula')    // Faz join com a tabela Aula
      .where('alunoAula.aula = :aulaId', { aulaId })  // Filtra pela aulaId específica
      .getMany();  // Retorna todos os registros que correspondem
  }

  async findOne(id: number) {
    const alunoAula = await this.alunoAulaRepository.findOneBy({ id });
    if (!alunoAula) {
      throw new NotFoundException('Aula não encontrada');
    }
    return this.alunoAulaRepository.find({where: {id}});
  }

  async verificaAlunoAula(aluno: number, aula: number): Promise<boolean> {
    const count = await this.alunoAulaRepository
      .createQueryBuilder('alunoaula')
      .where('alunoaula.aluno = :aluno', { aluno })
      .andWhere('alunoaula.aula = :aula', { aula })
      .getCount();

    // Retorna true se count > 0, ou false caso contrário
    return count > 0;
  }

  update(id: number, updateAlunoaulaDto: UpdateAlunoaulaDto) {
    return `This action updates a #${id} alunoaula`;
  }

  remove(id: number) {
    return `This action removes a #${id} alunoaula`;
  }
}
