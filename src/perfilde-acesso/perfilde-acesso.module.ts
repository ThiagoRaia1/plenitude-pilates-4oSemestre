import { Module } from '@nestjs/common';
import { PerfildeAcessoService } from './perfilde-acesso.service';
import { PerfildeAcessoController } from './perfilde-acesso.controller';

@Module({
  controllers: [PerfildeAcessoController],
  providers: [PerfildeAcessoService],
})
export class PerfildeAcessoModule {}
