import { Repository } from '../services/repository';
import { DBConnection } from '../../db/db.connection';

export abstract class Mapper<E, F> implements Repository<E, F> {
  protected database: DBConnection;

  constructor(database: DBConnection) {
    this.database = database;
  }

  abstract findAll(context?: E): F[];
}
