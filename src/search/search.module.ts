import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtyController } from './controllers/specialty.controller';
import { UbicationController } from './controllers/ubication.controller';
import { DoctorEntity } from './entities/doctor.entity';
import { DoctorSpecialtyEntity } from './entities/doctorSpecialty.entity';
import { SpecialtyEntity } from './entities/specialty.entity';
import { BySpecialty } from './services/bySpecialty.service';
import { ByUbication } from './services/byUbication.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoctorEntity,
      SpecialtyEntity,
      DoctorSpecialtyEntity,
    ]),
  ],
  providers: [BySpecialty, ByUbication],
  controllers: [SpecialtyController, UbicationController],
})
export class SearchModule {}
