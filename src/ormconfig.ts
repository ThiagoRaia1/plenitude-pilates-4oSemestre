import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'thiago',
  database: 'PlenitudePilates',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  options: {
    encrypt: true,
    trustServerCertificate: true, // Ignora problemas com certificados autoassinados, nao use em producao
  },
};