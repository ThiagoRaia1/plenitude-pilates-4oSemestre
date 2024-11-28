import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Aluno } from "src/alunos/entities/aluno.entity"
import { Aula } from "src/aula/entities/aula.entity"

export class CreateAlunoaulaDto {
    @ApiProperty({
        description: 'O nome do Aluno.',
        example: 'Bryan Vinicius'
    })   

    @IsNotEmpty({ message: 'Aluno é obrigatório' })
    aluno: Aluno

    @ApiProperty({
        description: 'O nome da Aula.',
        example: 'Aula 07'
    })   
    
    @IsNotEmpty({ message: 'Aula é obrigatório' })
    aula: Aula

    @ApiProperty({
        description: 'O tipo de Aula.',
        example: 'Experimental'
    })   
    
    @IsNotEmpty({ message: 'Tipo de aula é obrigatório' })
    tipoDeAula: string
}
