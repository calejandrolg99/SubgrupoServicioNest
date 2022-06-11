import { Mapper } from './mapper';
import { PSQLConnection } from 'src/db/psql.connection';
import { Repository } from 'typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { DoctorSpecialtyEntity } from '../entities/doctorSpecialty.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from '../domainClass/doctor';
import { Specialty } from '../domainClass/specialty';

@Injectable()
export class DoctorMapper extends Mapper<
  string,
  Promise<any>,
  Promise<any>,
  Doctor<string>
> {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepo: Repository<DoctorEntity>,
  ) {
    const database = new PSQLConnection();
    database.connect();
    super(database);
    this.doctorRepo = doctorRepo;
  }

  //Traer todos los doctores de la db
  find(context?: string): Promise<any> {
    let response: Promise<any>;
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

  convert(data: Promise<any>): Doctor<string>[] {
    const doctorList: Doctor<string>[] = [];
    data.then((doctors) => {
      for (let i = 0; i < doctors.length; i++) {
        const doctor = doctors[i];
        const specialties = this.getDoctorSpecialties(
          doctor.doctor_id,
          doctors,
        );
        const d = new Doctor<string>(
          doctor.doctor_first_name + ' ' + doctor.doctor_last_name,
          doctor.doctor_gender,
          'photo',
          specialties,
        );
        doctorList.push(d);
      }
    });
    return doctorList;
  }

  getDoctorSpecialties(id: string, doctors: any[]): Specialty<string>[] {
    const specialties: Specialty<string>[] = [];
    for (let i = 0; i < doctors.length; i++) {
      const doctor = doctors[i];
      if (id == doctor.doctor_id) {
        const specialty = new Specialty<string>(doctor.specialty);
        specialties.push(specialty);
      }
    }
    return specialties;
  }
}
