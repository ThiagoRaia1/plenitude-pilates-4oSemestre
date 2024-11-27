import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUsuarioDto {
    @IsEmail({}, { message: 'E-mail inválido' })
    login: string // email

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @IsStrongPassword(
        { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
        { message: 'Senha fraca' },
    )
    senha: string;

    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @IsNotEmpty({ message: 'Nível de acesso é obrigatório' })
    nivelDeAcesso: number
}
