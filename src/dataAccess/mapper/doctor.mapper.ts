import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { DoctorSpecialtyEntity } from '../entities/doctorSpecialty.entity';
import { Mapper } from './mapper';
import { PSQLConnection } from 'src/dataAccess/db/psql.connection';



@Injectable()
export class DoctorMapper extends Mapper<string,Promise<any[]>> {

  constructor(@InjectRepository(DoctorEntity) private doctorRepo: Repository<DoctorEntity>) {

    const database = new PSQLConnection();
    database.connect();
    super(database);
    this.doctorRepo = doctorRepo;
  }

  //Traer todos los doctores de la db
  find(context?: string): Promise<any[]> {
    let response: Promise<any[]>;
    if (context) {
      response = this.doctorRepo
        .createQueryBuilder('doctor')
        .select('doctor.id')
        .addSelect('doctor.first_name')
        .addSelect('doctor.last_name')
        .addSelect('doctor.gender')
        .addSelect('specialty.name', 'specialty')
        .innerJoin(
          DoctorSpecialtyEntity,
          'doctor_specialty',
          'doctor.id=doctor_specialty.id_doctor',
        )
        .innerJoin(
          SpecialtyEntity,
          'specialty',
          'specialty.id=doctor_specialty.id_specialty',
        )
        .where('specialty.name=:specialty_name', { specialty_name: context })
        .getRawMany();
      return response;
    } else {
      response = this.doctorRepo
        .createQueryBuilder('doctor')
        .select('doctor.id')
        .addSelect('doctor.first_name')
        .addSelect('doctor.last_name')
        .addSelect('doctor.gender')
        .addSelect('specialty.name', 'specialty')
        .innerJoin(
          DoctorSpecialtyEntity,
          'doctor_specialty',
          'doctor.id=doctor_specialty.id_doctor',
        )
        .innerJoin(
          SpecialtyEntity,
          'specialty',
          'specialty.id=doctor_specialty.id_specialty',
        )
        .getRawMany();
      return response;
    }
  }
}
