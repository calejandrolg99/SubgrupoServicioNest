import { Controller } from '@nestjs/common';
import { ByUbication } from '../services/byUbication.service';
import { SearchController } from './search.controller';

@Controller('search/ubi')
export class UbicationController extends SearchController<
  string,
  Promise<any>
> {
  constructor(private byUbication: ByUbication) {
    super(byUbication);
  }
}
