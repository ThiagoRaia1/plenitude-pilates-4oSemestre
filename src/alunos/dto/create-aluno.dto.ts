import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Aula } from "src/aula/entities/aula.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"

export class CreateAlunoDto {
    
    @ApiProperty({
        description: 'O nome do aluno.',
        example: 'Julio Onofre'
    })   

    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @ApiProperty({
        description: 'Data de nascimento do aluno.',
        example: '02/04/2001'
    })   

    @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
    dataNascimento: Date

    @ApiProperty({
        description: 'Cpf do aluno.',
        example: '466.863.758-02'
    })   

    @IsNotEmpty({ message: 'CPF é obrigatório' })
    cpf: string

    @ApiProperty({
        description: 'Nome da rua do aluno.',
        example: 'Rua São Matheus'
    })   
  
    @IsNotEmpty({ message: 'Rua é obrigatória' })
    rua: string

    @ApiProperty({
        description: 'Telefone do aluno.',
        example: '(19)98818-8626'
    })   

    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    telefone: string

    @ApiProperty({
        description: 'Status do aluno.',
        example: 'Ativo'
    })   

    @IsNotEmpty({ message: 'Status é obrigatório.' })
    status: string

    @ApiProperty({
        description: 'Nome do usuário que realizou ultima alteração.',
        example: 'Bryan Vinicius'
    })   

    @IsNotEmpty({ message: 'O usuário que realizou a ultima alteração é obrigatório' })
    ultimaAlteracao: string

    @ApiProperty({
        description: 'Data de realização da ultima alteração.',
        example: 'Júlio Onofre'
    })   

    @IsNotEmpty({ message: 'A data que foi realizada a ultima alteração é obrigatória' })
    dataUltimaAlteracao: Date

    @ApiProperty({
        description: 'Numero da rua do aluno.',
        example: '04'
    })   

    @IsNotEmpty({ message: 'Numero da rua é obrigatório' })
    numeroRua: number;

    @ApiProperty({
        description: 'Numero da casa do aluno.',
        example: '10'
    })   
    
    @IsNotEmpty({ message: 'Numero da casa é obrigatório' })
    numeroCasa: number;

    @ApiProperty({
        description: 'CEP do endereço do aluno.',
        example: '13349-057'
    })   
    
    @IsNotEmpty({ message: 'CEP é obrigatório' })
    cep: string;

    @ApiProperty({
        description: 'Nome do bairro do aluno.',
        example: 'Campo Bonito'
    })   
    
    @IsNotEmpty({ message: 'Bairro é obrigatório' })
    bairro: string;

    @ApiProperty({
        description: 'Nome da cidade do Aluno.',
        example: 'Indaiatuba'
    })   
    
    @IsNotEmpty({ message: 'Cidade é obrigatória' })
    cidade: string;

    @ApiProperty({
        description: 'Nome do usuario atual.',
        example: 'Bryan'
    })   

    @IsNotEmpty({ message: 'Usuario é obrigatória' })
    usuario: Usuario

    aulas: Aula[]
}
