import { DBConnection } from 'src/db/db.connection';
import { Mapper } from './mapper';

export class AllDoctorMapper extends Mapper<string, string> {
  constructor(db: DBConnection) {
    super(db);
  }

  //Traer los doctores de la db segun especialidad dada: TERMINAR IMPLEMENTACION
  findAll(context?: string): string[] {
    return ['aaa'];
  }
}
