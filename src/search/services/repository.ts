export interface Repo<E, F, D, L> {
  find(context?: E): F;
  convert(data: D): L[];
}
