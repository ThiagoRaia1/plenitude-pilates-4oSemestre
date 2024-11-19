import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateInstrutorDto {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string;
  
    @IsNotEmpty({ message: 'CPF é obrigatório' })
    cpf: string;

    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    telefone: string;

    @IsNotEmpty({ message: 'O usuário que fez a ultima alteração é obrigatório' })
    ultimaAlteracao: string;

    @IsNotEmpty({ message: 'A data da ultima alteração é obrigatória' })
    dataUltimaAlteracao: Date;

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string;

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

    @IsNotEmpty({ message: 'O nome de usuário que fez o cadastro é obrigatório' })
    usuario: Usuario // teste
}
