import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';
import { Instrutor } from './entities/instrutor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutor])],
  controllers: [InstrutorController],
  providers: [InstrutorService],
})
export class InstrutorModule {}
