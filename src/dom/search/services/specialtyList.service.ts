import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { SearchService } from './search.service';
import { SpecialtyMapper } from 'src/dataAccess/mapper/specialty.mapper';

@Injectable()
export class SpecialtyListService extends SearchService<string, Promise<any>> {
  constructor(
    @Inject(forwardRef(() => SpecialtyMapper))
    private specialtyMapper: SpecialtyMapper,
  ) {
    super();
  }

  async Search(): Promise<any> {
    return await this.specialtyMapper.find();
  }
}
