import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfildeAcessoDto } from './create-perfilde-acesso.dto';

export class UpdatePerfildeAcessoDto extends PartialType(CreatePerfildeAcessoDto) {}
