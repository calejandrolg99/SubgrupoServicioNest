import { Module } from '@nestjs/common';
import { SpecialtyController } from '../dom/search/controllers/specialty.controller';
import { UbicationController } from '../dom/search/controllers/ubication.controller';
import { BySpecialty } from '../dom/search/services/bySpecialty.service';
import { ByUbication } from '../dom/search/services/byUbication.service';
import { MapperModule } from './mapper.module';

@Module({
  imports: [MapperModule],
  providers: [BySpecialty, ByUbication],
  controllers: [SpecialtyController, UbicationController],
})
export class SearchModule {}
