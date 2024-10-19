import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Instrutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  ultimaAlteracao: string;
  
  @Column()
  dataUltimaAlteracao: Date;
  
  @Column()
  status: string;
  
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

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario // teste
}
