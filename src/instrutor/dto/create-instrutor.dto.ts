import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateInstrutorDto {
    @ApiProperty({
        description: 'O nome do instrutor.',
        example: 'Thiago Raia'
    })
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @ApiProperty({
        description: 'A data de nascimento do instrutor. Só aceita valores do tipo Date.',
        example: '2004-09-19'
    })
    @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
    dataNascimento: Date

    @ApiProperty({
        description: 'CPF do instrutor. Só aceita no formato 999.999.999-99.',
        example: '999.999.999-99'
    })
    @IsNotEmpty({ message: 'CPF é obrigatório' })
    cpf: string
  
    @ApiProperty({
        description: 'Rua do instrutor.',
        example: 'Av. Ário Barnabé'
    })
    @IsNotEmpty({ message: 'Rua é obrigatória' })
    rua: string

    @ApiProperty({
        description: 'Telefone do instrutor. Só aceita no formato (99)99999-9999.',
        example: '(99)99999-9999'
    })
    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    telefone: string

    @ApiProperty({
        description: 'O status do instrutor para considerá-lo ou não em queries',
        example: 'Ativo'
    })
    @IsNotEmpty({ message: 'Status é obrigatória' })
    status: string

    @ApiProperty({
        description: 'Email do usuário que realizou a ultima alteração no registro',
        example: 'thiagoraia2004@gmail.com'
    })
    @IsNotEmpty({ message: 'O usuário que realizou a ultima alteração é obrigatório' })
    ultimaAlteracao: string

    @ApiProperty({
        description: 'Data da ultima alteração no registro.',
        example: '2024-11-27 13:20:00.000'
    })
    @IsNotEmpty({ message: 'A data que foi realizada a ultima alteração é obrigatória' })
    dataUltimaAlteracao: Date

    @ApiProperty({
        description: 'Numero da rua do instrutor.',
        example: '27'
    })
    @IsNotEmpty({ message: 'Numero da rua é obrigatório' })
    numeroRua: number;
    
    @ApiProperty({
        description: 'Numero da casa do instrutor.',
        example: '110'
    })
    @IsNotEmpty({ message: 'Numero da casa é obrigatório' })
    numeroCasa: number;
    
    @ApiProperty({
        description: 'Numero da CEP do instrutor. Só aceita no formato 99999-999',
        example: '99999-999'
    })
    @IsNotEmpty({ message: 'CEP é obrigatório' })
    cep: string;
    
    @ApiProperty({
        description: 'Bairro do instrutor',
        example: 'Jardim Morada do Sol'
    })
    @IsNotEmpty({ message: 'Bairro é obrigatório' })
    bairro: string;
    
    @ApiProperty({
        description: 'Cidade do instrutor',
        example: 'Indaiatuba'
    })
    @IsNotEmpty({ message: 'Cidade é obrigatória' })
    cidade: string;

    @ApiProperty({
        description: 'ID do usuário que criou o instrutor',
        example: '1'
    })
    @IsNotEmpty({ message: 'O nome de usuário que fez o cadastro é obrigatório' })
    usuario: Usuario // teste
}
