import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateAlunoDto } from './create-aluno.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Aula } from 'src/aula/entities/aula.entity';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
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

    @IsOptional()
    ultimaAlteracao?: string;

    @IsOptional()
    dataUltimaAlteracao?: Date;

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

    @IsOptional()
    usuario?: Usuario;

    @IsOptional()
    aulas?: Aula[];
}
