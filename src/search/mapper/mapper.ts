import { Repo } from '../services/repository';
import { DBConnection } from '../../db/db.connection';

export abstract class Mapper<E, F, D, L> implements Repo<E, F, D, L> {
  protected database: DBConnection;

  constructor(database: DBConnection) {
    this.database = database;
  }

  abstract find(context?: E): F;
  abstract convert(data: D): L[];
}
