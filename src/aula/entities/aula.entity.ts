import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()   
export class Aula {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date

    @Column()
    horaComeco: Date

    @Column()
    horaFim: Date // ver com o professor se data, horaComeco e horaFim podem ser feitos em um unico atributo

    @Column()
    qtdeVagas: number

    @Column()
    qtdeVagasDisponiveis: number

    @Column()
    status: string
}