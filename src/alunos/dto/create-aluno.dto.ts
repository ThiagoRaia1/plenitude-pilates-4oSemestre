import { IsNotEmpty } from "class-validator"

export class CreateAlunoDto {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
    dataNascimento: Date

    @IsNotEmpty({ message: 'CPF é obrigatório' })
    cpf: string
  
    @IsNotEmpty({ message: 'Rua é obrigatória' })
    rua: string

    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    telefone: string

    @IsNotEmpty({ message: 'Status é obrigatória' })
    status: string

    @IsNotEmpty({ message: 'O usuário que realizou a ultima alteração é obrigatório' })
    ultimaAlteracao: string

    @IsNotEmpty({ message: 'A data que foi realizada a ultima alteração é obrigatória' })
    dataUltimaAlteracao: Date

    @IsNotEmpty({ message: 'Numero da rua é obrigatório' })
    numeroRua: number;
    
    @IsNotEmpty({ message: 'Numero da casa é obrigatório' })
    numeroCasa: number;
    
    @IsNotEmpty({ message: 'CEP é obrigatório' })
    cep: string;
    
    @IsNotEmpty({ message: 'Bairro é obrigatório' })
    bairro: string;
    
    @IsNotEmpty({ message: 'Cidade é obrigatória' })
    cidade: string;
}
