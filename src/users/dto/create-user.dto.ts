export class CreateUserDto {
    nome: string;
    cpf: string;
    email: string;
    funcao: string;
    telefone: string;
    cep: string;
    cidade: string;
    rua: string;
    bairro: string;
    usuario: string;
    senha: string; // deve usar hash
    nivelDeAcesso: number;
}