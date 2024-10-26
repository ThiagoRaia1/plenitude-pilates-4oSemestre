export class CreateAulaDto {
    data: Date

    horaComeco: Date

    horaFim: Date // ver com o professor se data, horaComeco e horaFim podem ser feitos em um unico atributo

    qtdeVagas: number

    qtdeVagasDisponiveis: number

    status: string
}
