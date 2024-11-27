import { Usuario } from 'src/usuario/entities/usuario.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'; 

import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('pagamentos')
export class Pagamento {
  @PrimaryGeneratedColumn() // O id será auto-incrementado automaticamente
  id: number;

  @Column()
  cliente: string;

  @Column()
  formaDePagamento: string;

  @Column({ default: 'Aprovado' })
  status: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Para valores monetários, utilize decimal
  valorPago: number;

  @Column()
  data: Date;

  @CreateDateColumn()
  dataUltimaDeclaracao: Date; // Data da última modificação (data de criação)

  @Column()
  ultimaAlteracao: string; // Nome do usuário que fez a última alteração (por exemplo, "usuario_logado")

  @UpdateDateColumn()
  ultimaAlteracaoData: Date; // Data e hora da última alteração (automático)

  @ManyToOne(() => Usuario, (user) => user.pagamentos) 
  usuario: Usuario // teste

}
