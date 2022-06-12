import { DBConnection } from './db.connection';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { DoctorSpecialtyEntity } from '../entities/doctorSpecialty.entity';

export class PSQLConnection implements DBConnection {
  private host: string;
  private name: string;
  private password: string;
  private database: string;
  private port: number;
  private options: TypeOrmModuleOptions;

  public getHost(): string {
    return this.host;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public getDatabase(): string {
    return this.database;
  }

  public getPort(): number {
    return this.port;
  }

  getOptions(): TypeOrmModuleOptions {
    return this.options;
  }

  //DATOS PARA LA CONEXION A POSTGRESQL
  connect() {
    this.host = 'localhost';
    this.name = 'carlos';
    this.password = 'calejandrolg99';
    this.database = 'desarrollo';
    this.port = 5432;

    this.options = {
      type: 'postgres',
      host: this.host,
      username: this.name,
      password: this.password,
      database: this.database,
      port: this.port,
      entities: [DoctorEntity, SpecialtyEntity, DoctorSpecialtyEntity],
    };
  }
}
