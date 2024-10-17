import { Injectable } from '@nestjs/common';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';

@Injectable()
export class InstrutorService {
  create(createInstrutorDto: CreateInstrutorDto) {
    return 'This action adds a new instrutor';
  }

  findAll() {
    return `This action returns all instrutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrutor`;
  }

  update(id: number, updateInstrutorDto: UpdateInstrutorDto) {
    return `This action updates a #${id} instrutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrutor`;
  }
}
