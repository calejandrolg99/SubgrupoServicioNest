import { SearchService } from './search.service';
import { DoctorMapper } from '../../../dataAccess/mapper/doctor.mapper';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BySpecialty extends SearchService<string, Promise<any>> {
  constructor(
    @Inject(forwardRef(() => DoctorMapper))
    private doctorMapper: DoctorMapper,
  ) {
    super();
  }

  async Search(context?: string): Promise<any> {
    if (context) {
      return await this.doctorMapper.find(context);
    } else {
      return await this.doctorMapper.find();
    }
  }
}
