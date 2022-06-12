import { Controller } from '@nestjs/common';
import { BySpecialty } from '../services/bySpecialty.service';
import { SearchController } from './search.controller';

@Controller('search/spe')
export class SpecialtyController extends SearchController<string,Promise<any>> {
  constructor(private bySpecialty: BySpecialty) {
    super(bySpecialty);
  }
}
