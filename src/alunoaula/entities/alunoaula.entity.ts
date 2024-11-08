import { Aluno } from 'src/alunos/entities/aluno.entity'; 

import { Aula } from 'src/aula/entities/aula.entity'; 

import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'; 

 

@Entity() 

export class Alunoaula { 

    @PrimaryColumn()
    id: number

    @ManyToOne(() => Aluno, (aluno) => aluno.aulas) 

    @JoinColumn({ name: 'aluno' }) 

    aluno: Aluno; 

 

    @ManyToOne(() => Aula, (aula) => aula.alunos) 

    @JoinColumn({ name: 'aula' }) 

    aula: Aula; 

}
