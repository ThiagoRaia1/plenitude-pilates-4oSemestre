import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoaulaDto } from './create-alunoaula.dto';

export class UpdateAlunoaulaDto extends PartialType(CreateAlunoaulaDto) {}
