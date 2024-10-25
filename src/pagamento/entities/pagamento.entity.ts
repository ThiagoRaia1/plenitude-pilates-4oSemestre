import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
