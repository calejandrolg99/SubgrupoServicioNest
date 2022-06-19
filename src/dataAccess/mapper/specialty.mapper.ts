import { Injectable } from '@nestjs/common';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { Mapper } from './mapper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PSQLConnection } from '../db/psql.connection';

@Injectable()
export class SpecialtyMapper extends Mapper<string, Promise<any>> {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private specialtyRepo: Repository<SpecialtyEntity>,
  ) {
    const database = new PSQLConnection();
    database.connect();
    super(database);
    this.specialtyRepo = specialtyRepo;
  }

  find(): Promise<any> {
    const response: Promise<any> = this.specialtyRepo
      .createQueryBuilder('specialty')
      .select('specialty.name')
      .getMany();
    return response;
  }
}
