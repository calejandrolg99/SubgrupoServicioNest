import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { DoctorSpecialtyEntity } from '../entities/doctorSpecialty.entity';
import { Mapper } from './mapper';
import { PSQLConnection } from 'src/dataAccess/db/psql.connection';

@Injectable()
export class DoctorMapper extends Mapper<string, Promise<any[]>> {
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
  find(context?: string): Promise<any[]> {
    let response: Promise<any[]>;
    let data: Promise<any[]>;
    if (context) {
      response = this.doctorRepo
        .createQueryBuilder('doctor')
        .select('doctor.id')
        .addSelect('doctor.first_name')
        .addSelect('doctor.last_name')
        .addSelect('doctor.gender')
        .addSelect('doctor.photo')
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
      data = this.convert(response);
      return data;
    } else {
      response = this.doctorRepo
        .createQueryBuilder('doctor')
        .select('doctor.id')
        .addSelect('doctor.first_name')
        .addSelect('doctor.last_name')
        .addSelect('doctor.gender')
        .addSelect('doctor.photo')
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
      data = this.convert(response);
      return data;
    }
  }

  async convert(data: Promise<any[]>): Promise<any[]> {
    let doctorList: any[];
    await data.then((d) => {
      const doctors: any[] = [];
      for (let i = 0; i < d.length; i++) {
        const doctor = d[i];
        const specialties = this.getDoctorSpecialties(doctor.doctor_id, d);
        const doc = {
          name: doctor.doctor_first_name + ' ' + doctor.doctor_last_name,
          gender: doctor.doctor_gender,
          photo: doctor.doctor_photo,
          specialty: specialties,
        };
        doctors.push(doc);
      }
      const doctorAux = doctors.filter(
        (doctor, i, list) =>
          i ==
          list.findIndex(
            (d) =>
              d.name == doctor.name &&
              d.gender == doctor.gender &&
              d.photo == doctor.photo,
          ),
      );
      doctorList = doctorAux;
    });

    return doctorList;
  }

  getDoctorSpecialties(id: string, doctors: any[]): string[] {
    const specialties: string[] = [];
    for (let i = 0; i < doctors.length; i++) {
      const doctor = doctors[i];
      if (id == doctor.doctor_id) {
        const specialty = doctor.specialty;
        specialties.push(specialty);
      }
    }
    return specialties;
  }
}
