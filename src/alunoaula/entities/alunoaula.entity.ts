import { Aluno } from 'src/alunos/entities/aluno.entity'; 
import { Aula } from 'src/aula/entities/aula.entity'; 
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column } from 'typeorm'; 

@Entity() 
export class Alunoaula { 
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Aluno, (aluno) => aluno.aulas) 
    @JoinColumn({ name: 'aluno' }) 
    aluno: Aluno; 

    @ManyToOne(() => Aula, (aula) => aula.alunos) 
    @JoinColumn({ name: 'aula' }) 
    aula: Aula; 

    @Column()
    tipoDeAula: string
}
