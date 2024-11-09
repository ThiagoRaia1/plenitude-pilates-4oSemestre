import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ) {}

  create(createPagamentoDto: CreatePagamentoDto) {
    const pagamento = this.pagamentoRepository.create(createPagamentoDto)
    return this.pagamentoRepository.save(pagamento)
  }

  findAll() {
    return this.pagamentoRepository.find();
  }

  async findOne(id: number) {
    const pagamento = await this.pagamentoRepository.findOneBy({ id });
    if (!pagamento) {
      throw new NotFoundException('Pagamento não encontrado');
    }
    return this.pagamentoRepository.find({where: {id}});
  }

  async update(id: number, updatePagamentoDto: UpdatePagamentoDto) {
    const pagamento = await this.pagamentoRepository.findOneBy({ id });
    if (!pagamento) {
      throw new NotFoundException('Pagamento não encontrado');
    }
    this.pagamentoRepository.merge(pagamento, updatePagamentoDto);
    return this.pagamentoRepository.save(pagamento);
  }

  async remove(id: number) {
    const pagamento = await this.pagamentoRepository.findOneBy({ id });
    if (!pagamento) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.pagamentoRepository.remove(pagamento);
  }
}
