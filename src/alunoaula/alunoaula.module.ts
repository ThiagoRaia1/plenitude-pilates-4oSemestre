import { Module } from '@nestjs/common';
import { AlunoaulaService } from './alunoaula.service';
import { AlunoaulaController } from './alunoaula.controller';
import { Alunoaula } from './entities/alunoaula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Alunoaula])],
  controllers: [AlunoaulaController],
  providers: [AlunoaulaService],
})
export class AlunoaulaModule {}
