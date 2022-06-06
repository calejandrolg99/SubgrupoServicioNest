import { DBConnection } from 'src/db/db.connection';
import { Mapper } from './mapper';

export class AllDoctorMapper extends Mapper<string, string> {
  constructor(db: DBConnection) {
    super(db);
  }

  //Traer todos los doctores de la db: TERMINAR IMPLEMENTACION
  findAll(context?: string): string[] {
    return ['aaa'];
  }
}
