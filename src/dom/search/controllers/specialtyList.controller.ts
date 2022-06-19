import { Controller, Get } from '@nestjs/common';
import { SpecialtyListService } from '../services/specialtyList.service';

@Controller('specialties')
export class SpecialtyListController {
  constructor(private specialtyListService: SpecialtyListService) {}

  @Get()
  Find(): Promise<any> {
    return this.specialtyListService.Search();
  }
}
