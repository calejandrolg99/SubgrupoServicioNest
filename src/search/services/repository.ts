export interface Repository<E, F> {
  findAll(context?: E): F[];
}
