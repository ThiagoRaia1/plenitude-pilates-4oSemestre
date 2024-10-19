import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AlunosModule } from './alunos/alunos.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AulaModule } from './aula/aula.module';
import { InstrutorModule } from './instrutor/instrutor.module';
import { PerfildeAcessoModule } from './perfilde-acesso/perfilde-acesso.module';
import { PagamentoModule } from './pagamento/pagamento.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AlunosModule, UsuarioModule, AulaModule, InstrutorModule, PerfildeAcessoModule, PagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
