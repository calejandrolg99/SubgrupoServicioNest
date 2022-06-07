import { Repo } from '../services/repository';
import { DBConnection } from '../../db/db.connection';

export abstract class Mapper<E, F> implements Repo<E, F> {
  protected database: DBConnection;

  constructor(database: DBConnection) {
    this.database = database;
  }

  abstract find(context?: E): F[];
}
