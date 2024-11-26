import { IsNotEmpty } from "class-validator"
import { Aluno } from "src/alunos/entities/aluno.entity"
import { Aula } from "src/aula/entities/aula.entity"

export class CreateAlunoaulaDto {
    @IsNotEmpty({ message: 'Aluno é obrigatório' })
    aluno: Aluno
    
    @IsNotEmpty({ message: 'Aula é obrigatório' })
    aula: Aula
}
