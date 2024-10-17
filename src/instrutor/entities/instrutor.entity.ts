import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instrutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  cpf: string;

  @Column()
  email: string;
  
  @Column()
  funcao: string;
  
  @Column()
  telefone: string;
  
  @Column()
  cep: string;
  
  @Column()
  cidade: string;
  
  @Column()
  rua: string;
  
  @Column()
  bairro: string;
  
  @Column()
  usuario: string;
  
  @Column()
  senha: string; // deve usar hash
  
  @Column()
  nivelDeAcesso: number;
}
