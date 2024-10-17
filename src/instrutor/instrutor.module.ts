import { Module } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { InstrutorController } from './instrutor.controller';

@Module({
  controllers: [InstrutorController],
  providers: [InstrutorService],
})
export class InstrutorModule {}
