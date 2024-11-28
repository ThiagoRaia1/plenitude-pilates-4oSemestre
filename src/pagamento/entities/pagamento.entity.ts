import { Usuario } from 'src/usuario/entities/usuario.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn() // O id será auto-incrementado automaticamente
  id: number;

  @Column()
  aluno: number;

  @Column()
  formaDePagamento: string;

  @Column()
  status: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Para valores monetários, utilize decimal
  valorPago: number;

  @Column()
  data: Date;
  
  @Column()
  ultimaAlteracao: string; // Nome do usuário que fez a última alteração (por exemplo, "usuario_logado")

  @Column()
  dataUltimaAlteracao: Date; // Data da última modificação (data de criação)

  @ManyToOne(() => Usuario, (user) => user.pagamentos) 
  usuario: Usuario // teste
}
