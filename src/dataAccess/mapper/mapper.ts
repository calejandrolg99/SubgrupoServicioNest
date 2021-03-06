import { ConsultRepository } from '../../dom/search/services/repository';
import { DBConnection } from '../../dataAccess/db/db.connection';

export abstract class Mapper<E, F> implements ConsultRepository<E, F> {
  protected database: DBConnection;

  constructor(database: DBConnection) {
    this.database = database;
  }

  abstract find(context?: E): F;
}
