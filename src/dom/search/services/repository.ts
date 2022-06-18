export interface ConsultRepository<E, F> {
  find(context?: E): F;
}
