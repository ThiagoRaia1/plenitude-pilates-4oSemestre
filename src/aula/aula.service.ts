import { Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { Aula } from './entities/aula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AulaService {
  constructor(
    @InjectRepository(Aula)
    private aulaRepository: Repository<Aula>,
  ) {}

  create(createAulaDto: CreateAulaDto) {
    const aula = this.aulaRepository.create(createAulaDto)
    return this.aulaRepository.save(aula)
  }

  findAll() {
    return this.aulaRepository.find();
  }

  async findOne(id: number) {
    const aula = await this.aulaRepository.findOneBy({ id });
    if (!aula) {
      throw new NotFoundException('Aula não encontrada');
    }
    return this.aulaRepository.find({where: {id}});
  }

  async update(id: number, updateAulaDto: UpdateAulaDto) {
    const aula = await this.aulaRepository.findOneBy({ id });
    if (!aula) {
      throw new NotFoundException('Aula não encontrada');
    }
    this.aulaRepository.merge(aula, updateAulaDto);
    return this.aulaRepository.save(aula);
  }

  async remove(id: number) {
    const aula = await this.aulaRepository.findOneBy({ id });
    if (!aula) {
      throw new NotFoundException('Aula não encontrada');
    }
    return this.aulaRepository.remove(aula);
  }
}
