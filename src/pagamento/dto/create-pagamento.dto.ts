import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePagamentoDto {

  @ApiProperty({
    description: 'O nome do cliente.',
    example: 'Julio Onofre'
})   

  @IsNotEmpty({ message: 'O cliente é obrigatório' })
  cliente: string;

  @ApiProperty({
    description: 'Nome do usuário que fez a ultima alteração.',
    example: 'Bryan Vinicius'
})   

  @IsNotEmpty({ message: 'O usuário que fez a última alteração é obrigatório' })
  ultimaAlteracao: string;

  @ApiProperty({
    description: 'Data que a ultima alteração foi realizada.',
    example: '02/04/2001'
})   

  @IsNotEmpty({ message: 'A data da última alteração é obrigatória' })
  dataUltimaDeclaracao: Date;

  @ApiProperty({
    description: 'Status do pagamento.',
    example: 'cancelado'
})   

  @IsNotEmpty({ message: 'Status é obrigatório' })
  status: string;

  @ApiProperty({
    description: 'Forma de pagamento.',
    example: 'Dinheiro'
})   

  @IsNotEmpty({ message: 'A forma de pagamento é obrigatória' })
  formaDePagamento: string;

  @ApiProperty({
    description: 'Data da realização do pagamento.',
    example: '02/04/2001'
})   

  @IsNotEmpty({ message: 'A data do pagamento é obrigatória' })
  data: Date;

  @ApiProperty({
    description: 'Valor do pagamento.',
    example: '100'
})   

  @IsNotEmpty({ message: 'O valor pago é obrigatório' })
  valorpago: number;
}
