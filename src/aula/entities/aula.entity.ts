import { Alunoaula } from 'src/alunoaula/entities/alunoaula.entity';
import { Aluno } from 'src/alunos/entities/aluno.entity'; 
import { Instrutor } from 'src/instrutor/entities/instrutor.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, OneToMany } from 'typeorm'; 

@Entity()    
export class Aula {
    @PrimaryGeneratedColumn() 
    id: number 

    @Column() 
    data: Date 

    @Column({ type: 'datetime' }) 
    horaComeco: Date 

    @Column() 
    horaFim: Date // ver com o professor se data e horaFim podem ser feitos em um unico atributo 

    @Column() 
    qtdeVagas: number 

    @Column() 
    qtdeVagasDisponiveis: number 

    @Column() 
    status: string 

    @ManyToOne(() => Instrutor, (instrutor) => instrutor.aulas, { eager: true }) 
    instrutor: Instrutor // teste 

    @ManyToMany(() => Aluno) 
    @JoinColumn() 
    alunos: Aluno[]

    @OneToMany(() => Alunoaula, (alunoAula) => alunoAula.aula)
    alunoAulas: Alunoaula[];
}