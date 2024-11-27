import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUsuarioDto {
    @ApiProperty({
        description: 'O login deve ser um email válido.',
        example: 'PlenitudePilates@gmail.com'
    })
    @IsEmail({}, { message: 'E-mail inválido' })
    login: string // email

    @ApiProperty({
        description: 'Senha utilizada para o login. Deve conter uma letra minúscula, uma maiúscula, um número, um símbolo e no mínimo 8 caracteres.',
        example: 'PlenitudePilates1@'
    })
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @IsStrongPassword(
        { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
        { message: 'Senha fraca' },
    )
    senha: string;

    @ApiProperty({
        description: 'O nome do usuário.',
        example: 'Thiago Raia'
    })
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string
    
    @ApiProperty({
        description: 'O status do usuário para considerá-lo ou não em queries',
        example: 'Ativo'
    })
    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: string

    @ApiProperty({
        description: 'Nivel de acesso ao sistema do usuário. Recebe valores de 1 a 3.',
        example: '1'
    })
    @IsNotEmpty({ message: 'Nível de acesso é obrigatório' })
    nivelDeAcesso: number
}
