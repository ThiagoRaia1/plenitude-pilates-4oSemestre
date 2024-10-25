import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cpf: string

    @Column()
    telefone: string

    @Column()
    status: string

    @Column()
    ultimaAlteracao: string

    @Column()
    dataUltimaAlteracao: Date

    @Column()
    numeroRua: number;
    
    @Column()
    numeroCasa: number;
    
    @Column()
    cep: string;
    
    @Column()
    bairro: string;
    
    @Column()
    cidade: string;
}
