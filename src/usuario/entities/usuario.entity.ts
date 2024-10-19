import { Instrutor } from 'src/instrutor/entities/instrutor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(() => Instrutor)
    @JoinColumn()
    instrutor: Instrutor
}
