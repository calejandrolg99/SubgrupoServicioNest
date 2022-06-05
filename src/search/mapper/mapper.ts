import { Repository } from '../services/repository';
import { DBConnection } from '../../db/db.connection';

export abstract class Mapper<C, L> implements Repository<C, L> {
  protected database: DBConnection;

  constructor(database: DBConnection) {
    this.database = database;
  }

  abstract findAll(context?: C): L[];
}
