import { Instrutor } from "src/instrutor/entities/instrutor.entity"
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
    @IsEmail({}, { message: 'E-mail inválido' })
    login: string // email

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    senha: string // deve usar hash

    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @IsNotEmpty({ message: 'Nível de acesso é obrigatório' })
    nivelDeAcesso: number

    instrutor: Instrutor // teste
}
