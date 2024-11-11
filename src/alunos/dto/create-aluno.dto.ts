import { IsNotEmpty } from "class-validator"
import { Aula } from "src/aula/entities/aula.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"

export class CreateAlunoDto {
    @IsNotEmpty({ message: 'CPF é obrigatório' })
    cpf: string

    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    telefone: string

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @IsNotEmpty({ message: 'O usuário que fez a ultima alteração é obrigatório' })
    ultimaAlteracao: string

    @IsNotEmpty({ message: 'A data que o ultimo usuário fez a alteração é obrigatória' })
    dataUltimaAlteracao: Date

    @IsNotEmpty({ message: 'Numero da rua é obrigatório' })
    numeroRua: number;
    
    @IsNotEmpty({ message: 'Numero da casa é obrigatório' })
    numeroCasa: number;
    
    @IsNotEmpty({ message: 'CEP é obrigatório' })
    cep: string;
    
    @IsNotEmpty({ message: 'Bairro é obrigatório' })
    bairro: string;
    
    @IsNotEmpty({ message: 'Cidade é obrigatório' })
    cidade: string;

    usuario: Usuario

    aulas: Aula[]
}
