import { Module } from '@nestjs/common';
import { SpecialtyController } from '../search/controllers/specialty.controller';
import { UbicationController } from '../search/controllers/ubication.controller';
import { BySpecialty } from '../search/services/bySpecialty.service';
import { ByUbication } from '../search/services/byUbication.service';

@Module({
  providers: [BySpecialty, ByUbication],
  controllers: [SpecialtyController, UbicationController],
})
export class SearchModule {}
