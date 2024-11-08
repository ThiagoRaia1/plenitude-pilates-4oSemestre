import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { Aula } from './entities/aula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Aula])],
  controllers: [AulaController],
  providers: [AulaService],
})
export class AulaModule {}
