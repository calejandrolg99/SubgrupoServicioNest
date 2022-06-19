import { Controller } from '@nestjs/common';
import { SpecialtyListService } from '../services/specialtyList.service';
import { SearchController } from './search.controller';

@Controller('search/specialties')
export class SpecialtyListController extends SearchController<
  string,
  Promise<any>
> {
  constructor(private specialtyListService: SpecialtyListService) {
    super(specialtyListService);
  }
}
