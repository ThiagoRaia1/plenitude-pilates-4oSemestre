import { Instrutor } from 'src/instrutor/entities/instrutor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    login: string // email

    @Column()
    senha: string // deve usar hash

    @Column()
    nome: string
    
    @Column()
    status: string

    @Column()
    nivelDeAcesso: number
    
    @OneToOne(() => Instrutor)
    @JoinColumn()
    instrutor: Instrutor // teste
}
