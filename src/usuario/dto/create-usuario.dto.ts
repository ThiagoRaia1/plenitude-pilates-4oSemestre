import { Instrutor } from "src/instrutor/entities/instrutor.entity"

export class CreateUsuarioDto {
    login: string // email

    senha: string // deve usar hash

    nome: string
    
    status: string

    nivelDeAcesso: number

    instrutor: Instrutor
}
