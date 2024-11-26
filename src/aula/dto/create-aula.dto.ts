import { IsNotEmpty } from "class-validator"
import { Instrutor } from "src/instrutor/entities/instrutor.entity"

export class CreateAulaDto {
    @IsNotEmpty({ message: 'Data é obrigatória' })
    data: Date

    @IsNotEmpty({ message: 'O horário de início da aula é obrigatório' })
    horaComeco: Date

    @IsNotEmpty({ message: 'O horário de encerramento da aula é obrigatório' })
    horaFim: Date // ver com o professor se data, horaComeco/horaFim podem ser feitos em um unico atributo

    @IsNotEmpty({ message: 'A quantidade total de vagas para a aula é obrigatória' })
    qtdeVagas: number

    @IsNotEmpty({ message: 'A quantidade de vagas disponíveis é obrigatória' })
    qtdeVagasDisponiveis: number

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @IsNotEmpty({ message: 'O instrutor que fará a aula é obrigatório' })
    instrutor: Instrutor // teste
}
