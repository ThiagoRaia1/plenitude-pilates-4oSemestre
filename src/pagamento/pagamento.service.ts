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
    // Criando diretamente o pagamento e salvando no banco de dados
    return this.pagamentoRepository.save(createPagamentoDto); 
  }

  findAll() {
    return this.pagamentoRepository.find();
  }

  async findOne(id: number) {
    const pagamento = await this.pagamentoRepository.findOneBy({ id });
    if (!pagamento) {
      throw new NotFoundException('Pagamento não encontrado');
    }
    return pagamento;  // Retorna o pagamento diretamente
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
      throw new NotFoundException('Pagamento não encontrado');
    }
    return this.pagamentoRepository.remove(pagamento);
  }
}

