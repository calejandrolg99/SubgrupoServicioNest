import { DBConnection } from 'src/db/db.connection';
import { Mapper } from './mapper';

export class DoctorMapper extends Mapper<string, string> {
  constructor(db: DBConnection) {
    super(db);
  }

  //Traer todos los doctores de la db: TERMINAR IMPLEMENTACION
  findAll(context?: string): string[] {
    return ['aaa'];
  }

  //Traer doctores por especialidad: TERMINAR IMPLEMENTACION
  findBySpecialty(specialty: string, cotext?: string): string[] {
    return ['aaa'];
  }
}
