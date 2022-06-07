import { Mapper } from './mapper';
import { PSQLConnection } from 'src/db/psql.connection';

export class SpecialtyDoctorMapper extends Mapper<string, string> {
  constructor() {
    const database = new PSQLConnection();
    database.connect();
    super(database);
  }
  //Traer los doctores de la db segun especialidad dada: TERMINAR IMPLEMENTACION
  find(context?: string): string[] {
    return ['especialidad'];
  }
}
