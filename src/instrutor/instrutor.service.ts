import { Injectable } from '@nestjs/common';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { Instrutor } from './entities/instrutor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class InstrutorService {
  constructor(
    @InjectRepository(Instrutor)
    private instrutorRepository: Repository<Instrutor>,
  ) {}

  create(createInstrutorDto: CreateInstrutorDto) {
    const instrutor = this.instrutorRepository.create(createInstrutorDto)
    return this.instrutorRepository.save(instrutor)
  }

  findAll() {
    return this.instrutorRepository.find();
  }

  async findOne(id: number) {
    const instrutor = await this.instrutorRepository.findOneBy({ id });
    if (!instrutor) {
      throw new NotFoundException('Instrutor não encontrado');
    }
    return this.instrutorRepository.find({where: {id}});
  }

  async update(id: number, updateInstrutorDto: UpdateInstrutorDto) {
    const instrutor = await this.instrutorRepository.findOneBy({ id });
    if (!instrutor) {
      throw new NotFoundException('instrutor não encontrado');
    }
    this.instrutorRepository.merge(instrutor, updateInstrutorDto);
    return this.instrutorRepository.save(instrutor);
  }

  async remove(id: number) {
    const instrutor = await this.instrutorRepository.findOneBy({ id });
    if (!instrutor) {
      throw new NotFoundException('instrutor não encontrado');
    }
    return this.instrutorRepository.remove(instrutor);
  }
}
