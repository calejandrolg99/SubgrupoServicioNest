import { Mapper } from './mapper';
import { PSQLConnection } from 'src/db/psql.connection';
import { Repository } from 'typeorm';
import { DoctorEntity } from '../entities/doctor.entity';

export class DoctorMapper extends Mapper<string, string> {
  doctorRepo: Repository<DoctorEntity>;

  constructor(doctorRepo: Repository<DoctorEntity>) {
    const database = new PSQLConnection();
    database.connect();
    super(database);
    this.doctorRepo = doctorRepo;
  }

  //Traer todos los doctores de la db: TERMINAR IMPLEMENTACION
  find(context?: string): any {
    return this.doctorRepo.find();
  }
}
