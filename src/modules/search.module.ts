import { Module } from '@nestjs/common';
import { SpecialtyController } from '../dom/search/controllers/specialty.controller';
import { BySpecialty } from '../dom/search/services/bySpecialty.service';
import { MapperModule } from './mapper.module';
import { SpecialtyListController } from 'src/dom/search/controllers/specialtyList.controller';
import { SpecialtyListService } from 'src/dom/search/services/specialtyList.service';

@Module({
  imports: [MapperModule],
  providers: [BySpecialty, SpecialtyListService],
  controllers: [SpecialtyController, SpecialtyListController],
})
export class SearchModule {}
