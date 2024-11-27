import { IsNotEmpty } from "class-validator";

export class CreatePagamentoDto {
  @IsNotEmpty({ message: 'O cliente é obrigatório' })
  cliente: string;

  @IsNotEmpty({ message: 'O usuário que fez a última alteração é obrigatório' })
  ultimaAlteracao: string;

  @IsNotEmpty({ message: 'A data da última alteração é obrigatória' })
  dataUltimaDeclaracao: Date;

  @IsNotEmpty({ message: 'Status é obrigatório' })
  status: string;

  @IsNotEmpty({ message: 'A forma de pagamento é obrigatória' })
  formaDePagamento: string;

  @IsNotEmpty({ message: 'A data do pagamento é obrigatória' })
  data: Date;

  @IsNotEmpty({ message: 'O valor pago é obrigatório' })
  valorpago: number;
}
