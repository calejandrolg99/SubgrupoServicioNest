import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from './search.module';
import { PSQLConnection } from '../dataAccess/db/psql.connection';

const psql = new PSQLConnection();
psql.connect();

@Module({
  imports: [SearchModule, TypeOrmModule.forRoot(psql.getOptions())],
})
export class AppModule {}
