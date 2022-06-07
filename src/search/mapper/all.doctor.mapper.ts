import { Mapper } from './mapper';
import { PSQLConnection } from 'src/db/psql.connection';
import { DoctorEntity } from '../entities/doctor.entity';
import { DataSource } from 'typeorm';

const psql = new PSQLConnection();
psql.connect();

const ds = new DataSource({
  type: 'postgres',
  host: psql.getHost(),
  port: psql.getPort(),
  username: psql.getName(),
  password: psql.getPassword(),
  database: psql.getDatabase(),
  entities: [DoctorEntity],
});

export class AllDoctorMapper extends Mapper<string, string> {
  constructor() {
    const database = new PSQLConnection();
    database.connect();
    super(database);
  }

  //Traer todos los doctores de la db: TERMINAR IMPLEMENTACION
  find(context?: string): any[] {
    let doctors: any[] = [];
    doctors = [ds.manager.find(DoctorEntity)];
    return doctors;
  }
}
