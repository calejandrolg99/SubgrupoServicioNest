import { SearchService } from './search.service';
import { DoctorMapper } from '../mapper/doctor.mapper';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BySpecialty extends SearchService<string, string> {
  constructor(
    @Inject(forwardRef(() => DoctorMapper))
    private doctorMapper: DoctorMapper,
  ) {
    super();
  }

  Search(context?: string): string[] {
    if (context) {
      return this.doctorMapper.find(context);
    } else {
      return this.doctorMapper.find();
    }
  }
}
