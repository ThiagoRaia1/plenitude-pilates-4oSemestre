import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AlunosModule } from './alunos/alunos.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AulaModule } from './aula/aula.module';
import { InstrutorModule } from './instrutor/instrutor.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { AlunoaulaModule } from './alunoaula/alunoaula.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config), 
    AlunosModule, 
    UsuarioModule, 
    AulaModule, 
    InstrutorModule,
    PagamentoModule, 
    AlunoaulaModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
