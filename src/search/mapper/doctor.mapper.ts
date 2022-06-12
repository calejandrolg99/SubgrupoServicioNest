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
import { MedicineSpecialties } from '../domainClass/enums';

@Injectable()
export class DoctorMapper extends Mapper<
  string,
  Promise<DoctorEntity[]>,
  DoctorEntity[],
  Doctor<MedicineSpecialties>
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
  async find(context?: string): Promise<DoctorEntity[]> {
    let response: DoctorEntity[];
    if (context) {
      response = await this.doctorRepo
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
      response = await this.doctorRepo
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
      this.convert(response);
      return response;
    }
  }

  convert(data: any[]): Doctor<MedicineSpecialties>[] {
    const doctorList: Doctor<MedicineSpecialties>[] = [];

    for (let i = 0; i < data.length; i++) {
      const doctor = data[i];
      const specialties = this.getDoctorSpecialties(doctor.doctor_id, data);
      const d = new Doctor<MedicineSpecialties>(
        doctor.doctor_first_name + ' ' + doctor.doctor_last_name,
        doctor.doctor_gender,
        'photo',
        specialties,
      );
      doctorList.push(d);
    }

    return doctorList;
  }

  getDoctorSpecialties(
    id: number,
    doctors: any[],
  ): Specialty<MedicineSpecialties>[] {
    const specialties: Specialty<MedicineSpecialties>[] = [];
    for (let i = 0; i < doctors.length; i++) {
      const doctor = doctors[i];
      if (id == doctor.doctor_id) {
        const specialty = new Specialty<MedicineSpecialties>(doctor.specialty);
        specialties.push(specialty);
      }
    }
    return specialties;
  }
}
