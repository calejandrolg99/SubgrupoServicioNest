import { Module } from '@nestjs/common';
import { DoctorMapper } from 'src/search/mapper/doctor.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from 'src/search/entities/doctor.entity';
import { SpecialtyEntity } from 'src/search/entities/specialty.entity';
import { DoctorSpecialtyEntity } from 'src/search/entities/doctorSpecialty.entity';

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
