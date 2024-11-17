import { IsNotEmpty } from "class-validator"

export class CreateAlunoDto {
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    nome: string
    
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    dataNascimento: Date

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    cpf: string

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    telefone: string

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    status: string

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    ultimaAlteracao: string

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    dataUltimaAlteracao: Date

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    numeroRua: number;
    
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    numeroCasa: number;
    
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    cep: string;
    
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    bairro: string;
    
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    cidade: string;
}
