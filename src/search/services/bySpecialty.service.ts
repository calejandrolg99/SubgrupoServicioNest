import { SearchService } from './search.service';
import { SpecialtyDoctorMapper } from '../mapper/specialty.doctor.mapper';
import { AllDoctorMapper } from '../mapper/all.doctor.mapper';

export class BySpecialty extends SearchService<string, string> {
  constructor() {
    super();
  }

  Search(context?: string): string[] {
    if (context) {
      const specialtyDoctorMapper = new SpecialtyDoctorMapper();
      return specialtyDoctorMapper.find(context);
    } else {
      const allDoctorMapper = new AllDoctorMapper();
      return allDoctorMapper.find(context);
    }
  }
}
