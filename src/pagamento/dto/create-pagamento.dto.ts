import { IsNotEmpty } from "class-validator"

export class CreatePagamentoDto {
    @IsNotEmpty({ message: 'O usuário que fez a ultima alteração é obrigatório' })
    ultimaAlteracao: string

    @IsNotEmpty({ message: 'A data da ultima alteração é obrigatória' })
    dataUltimaDeclaracao: Date

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @IsNotEmpty({ message: 'A forma de pagamento é obrigatório' })
    formaDePagamento: string

    @IsNotEmpty({ message: 'A data do pagamento é obrigatória' })
    data: Date
}
