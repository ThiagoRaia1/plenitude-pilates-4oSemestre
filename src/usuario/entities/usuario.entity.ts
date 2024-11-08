import { Aluno } from 'src/alunos/entities/aluno.entity'; 
import { Instrutor } from 'src/instrutor/entities/instrutor.entity'; 
import { Pagamento } from 'src/pagamento/entities/pagamento.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'; 

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

    @OneToMany(() => Instrutor, (instrutor) => instrutor.usuario) // perguntar 
    instrutores: Instrutor[] // teste 

    @OneToMany(() => Pagamento, (pagamento) => pagamento.usuario) // perguntar 
    pagamentos: Pagamento[] // teste 

    @OneToMany(() => Aluno, (aluno) => aluno.usuario) // perguntar 
    alunos: Aluno[] // teste 
}