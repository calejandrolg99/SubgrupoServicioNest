import { Injectable } from '@nestjs/common';
import { SearchService } from './search.service';
import { Inject } from '@nestjs/common';
import { DoctorMapper } from '../../../dataAccess/mapper/doctor.mapper';
import { forwardRef } from '@nestjs/common';

@Injectable()
export class ByUbication extends SearchService<string, Promise<any>> {
  constructor(
    @Inject(forwardRef(() => DoctorMapper))
    private doctorMapper: DoctorMapper,
  ) {
    super();
  }

  Search(context?: string): Promise<any> {
    if (context) {
      return this.doctorMapper.find(context);
    } else {
      return this.doctorMapper.find();
    }
  }
}
