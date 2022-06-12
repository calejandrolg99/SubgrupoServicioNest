import { Module } from '@nestjs/common';
import { SpecialtyController } from '../dom/search/controllers/specialty.controller';
import { BySpecialty } from '../dom/search/services/bySpecialty.service';
import { MapperModule } from './mapper.module';

@Module({
  imports: [MapperModule],
  providers: [BySpecialty],
  controllers: [SpecialtyController],
})
export class SearchModule {}
