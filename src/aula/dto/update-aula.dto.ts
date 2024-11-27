import { PartialType } from '@nestjs/mapped-types';
import { CreateAulaDto } from './create-aula.dto';
import { IsOptional } from 'class-validator';

export class UpdateAulaDto extends PartialType(CreateAulaDto) {
    @IsOptional()
    qtdeVagasDisponiveis?: number;
}
