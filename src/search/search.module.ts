import { Module } from '@nestjs/common';
import { SpecialtyController } from './controllers/specialty.controller';
import { UbicationController } from './controllers/ubication.controller';

@Module({
  controllers: [SpecialtyController, UbicationController],
})
export class SearchModule {}
