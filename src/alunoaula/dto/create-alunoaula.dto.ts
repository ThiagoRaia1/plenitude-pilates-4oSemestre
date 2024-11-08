import { Aluno } from "src/alunos/entities/aluno.entity"
import { Aula } from "src/aula/entities/aula.entity"

export class CreateAlunoaulaDto {
    id: number
    aluno: Aluno
    aula: Aula
}
