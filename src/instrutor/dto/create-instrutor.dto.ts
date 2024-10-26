import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateInstrutorDto {
    nome: string;
  
    cpf: string;

    telefone: string;

    ultimaAlteracao: string;

    dataUltimaAlteracao: Date;

    status: string;

    numeroRua: number;

    numeroCasa: number;

    cep: string;

    bairro: string;

    cidade: string;

    usuario: Usuario // teste
}
