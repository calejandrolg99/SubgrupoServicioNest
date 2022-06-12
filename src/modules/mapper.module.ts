import { Module } from '@nestjs/common';
import { DoctorMapper } from '../dataAccess/mapper/doctor.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from '../dataAccess/entities/doctor.entity';
import { SpecialtyEntity } from '../dataAccess/entities/specialty.entity';
import { DoctorSpecialtyEntity } from '../dataAccess/entities/doctorSpecialty.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoctorEntity,
      SpecialtyEntity,
      DoctorSpecialtyEntity,
    ]),
  ],
  providers: [DoctorMapper],
  exports: [DoctorMapper],
})
export class MapperModule {}
