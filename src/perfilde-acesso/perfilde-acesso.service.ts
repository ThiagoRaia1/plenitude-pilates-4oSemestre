import { Injectable } from '@nestjs/common';
import { CreatePerfildeAcessoDto } from './dto/create-perfilde-acesso.dto';
import { UpdatePerfildeAcessoDto } from './dto/update-perfilde-acesso.dto';

@Injectable()
export class PerfildeAcessoService {
  create(createPerfildeAcessoDto: CreatePerfildeAcessoDto) {
    return 'This action adds a new perfildeAcesso';
  }

  findAll() {
    return `This action returns all perfildeAcesso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfildeAcesso`;
  }

  update(id: number, updatePerfildeAcessoDto: UpdatePerfildeAcessoDto) {
    return `This action updates a #${id} perfildeAcesso`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfildeAcesso`;
  }
}
