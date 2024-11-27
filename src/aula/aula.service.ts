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
    console.log(aula)
    return this.aulaRepository.save(aula)
  }

  findAll() {
    return this.aulaRepository.find();
  }

  async findOne(horaComeco: Date) {
    // console.log("Comeco")
    // console.log("data: "+horaComeco)
    // console.log("Tipo de horaComeco:", typeof horaComeco);
    if (!(horaComeco instanceof Date)) {
      horaComeco = new Date(horaComeco); // Converte string ou número para Date
    }
    // console.log("Tipo de horaComeco:", typeof horaComeco);
    const aula = await this.aulaRepository.findOneBy({ horaComeco });
    // console.log("Antes do if")
    if (!aula) {
      // console.log("Dentro do if")
      throw new NotFoundException('Aula não encontrada');
    }
    // console.log("Depois do if")
    // console.log(aula.instrutor)
    return aula;
  }

  async update(id: number, updateAulaDto: UpdateAulaDto) {
    const aula = await this.aulaRepository.findOneBy({ id });
    if (!aula) {
      throw new NotFoundException('Aula não encontrada');
    }
    this.aulaRepository.merge(aula, updateAulaDto);
    console.log("Atualizado")
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
