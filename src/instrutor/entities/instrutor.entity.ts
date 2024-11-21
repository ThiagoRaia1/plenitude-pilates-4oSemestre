import { Aula } from 'src/aula/entities/aula.entity'; 
import { Usuario } from 'src/usuario/entities/usuario.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'; 

@Entity() 
export class Instrutor { 
  @PrimaryGeneratedColumn() 
  id: number; 

  @Column() 
  nome: string; 

  @Column()
  dataNascimento: Date

  @Column() 
  cpf: string;

  @Column()
  rua: string

  @Column() 
  telefone: string;

  @Column() 
  status: string; 

  @Column() 
  ultimaAlteracao: string; 

  @Column() 
  dataUltimaAlteracao: Date; 

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

  @ManyToOne(() => Usuario, (user) => user.instrutores) 
  usuario: Usuario // teste 

  @OneToMany(() => Aula, (aula) => aula.instrutor) // perguntar 
  aulas: Aula[] // teste 
}