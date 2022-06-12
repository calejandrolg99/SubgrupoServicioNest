export interface Repo<E, F> {
  find(context?: E): F;
}
