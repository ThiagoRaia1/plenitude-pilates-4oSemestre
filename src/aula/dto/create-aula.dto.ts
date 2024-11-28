import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Instrutor } from "src/instrutor/entities/instrutor.entity"

export class CreateAulaDto {
    
    @ApiProperty({
        description: 'Data do agendamento.',
        example: '02/04/2001'
    })   
    
    @IsNotEmpty({ message: 'Data é obrigatória' })
    data: Date

    @ApiProperty({
        description: 'Horário de início da aula.',
        example: '08:00'
    })   

    @IsNotEmpty({ message: 'O horário de início da aula é obrigatório' })
    horaComeco: Date

    @ApiProperty({
        description: 'Horário de encerramento da aula.',
        example: '16:00'
    })  

    @IsNotEmpty({ message: 'O horário de encerramento da aula é obrigatório' })
    horaFim: Date // ver com o professor se data, horaComeco/horaFim podem ser feitos em um unico atributo

    @ApiProperty({
        description: 'Numero de vagas em uma aula.',
        example: '18'
    })  

    @IsNotEmpty({ message: 'A quantidade total de vagas para a aula é obrigatória' })
    qtdeVagas: number

    @ApiProperty({
        description: 'Quantidade de vagas disponíveis em uma aula.',
        example: '8'
    })  

    @IsNotEmpty({ message: 'A quantidade de vagas disponíveis é obrigatória' })
    qtdeVagasDisponiveis: number

    @ApiProperty({
        description: 'Status da aula.',
        example: 'Ativa'
    })  

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @ApiProperty({
        description: 'Nome do instrutor.',
        example: 'Rodrigo Faro'
    })  

    @IsNotEmpty({ message: 'O instrutor que fará a aula é obrigatório' })
    instrutor: Instrutor // teste
}
