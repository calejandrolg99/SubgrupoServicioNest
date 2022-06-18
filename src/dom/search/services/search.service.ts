import { ConsultRepository } from "./repository";

export abstract class SearchService<E, F> {
  protected repository: ConsultRepository<E,F>;

  abstract Search(context?: E): F;
}
