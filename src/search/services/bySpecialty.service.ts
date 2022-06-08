import { SearchService } from './search.service';
import { DoctorMapper } from '../mapper/doctor.mapper';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DoctorEntity } from '../entities/doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BySpecialty extends SearchService<string, string> {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepo: Repository<DoctorEntity>,
  ) {
    super();
  }

  Search(context?: string): string[] {
    const doctorMapper = new DoctorMapper(this.doctorRepo);
    if (context) {
      return doctorMapper.find(context);
    } else {
      return doctorMapper.find();
    }
  }
}
