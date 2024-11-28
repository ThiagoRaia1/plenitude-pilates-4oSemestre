import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrutorDto } from './create-instrutor.dto';
import { IsOptional } from 'class-validator';

export class UpdateInstrutorDto extends PartialType(CreateInstrutorDto) {
    @IsOptional()
    nome?: string;
    
    @IsOptional()
    dataNascimento?: Date;

    @IsOptional()
    cpf?: string;
  
    @IsOptional()
    rua?: string;

    @IsOptional()
    telefone?: string;

    @IsOptional()
    status?: string;

    ultimaAlteracao: string;

    dataUltimaAlteracao: Date;

    @IsOptional()
    numeroRua?: number;
    
    @IsOptional()
    numeroCasa?: number;
    
    @IsOptional()
    cep?: string;
    
    @IsOptional()
    bairro?: string;
    
    @IsOptional()
    cidade?: string;
}
