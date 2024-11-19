import { Usuario } from 'src/usuario/entities/usuario.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'; 

@Entity() 
export class Pagamento { 
    @PrimaryGeneratedColumn() 
    id: number 

    @Column() 
    ultimaAlteracao: string 

    @Column() 
    dataUltimaDeclaracao: Date 

    @Column() 
    status: string 

    @Column() 
    formaDePagamento: string 

    @Column() 
    data: Date 

    @ManyToOne(() => Usuario, (user) => user.pagamentos) 
    usuario: Usuario // teste
}