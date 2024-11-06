import { Module } from '@nestjs/common';
import { AlunoaulaService } from './alunoaula.service';
import { AlunoaulaController } from './alunoaula.controller';

@Module({
  controllers: [AlunoaulaController],
  providers: [AlunoaulaService],
})
export class AlunoaulaModule {}
