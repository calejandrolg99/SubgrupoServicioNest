import { Repository } from './repository';

export abstract class SearchService<E, F> {
  protected repo: Repository<E, F>;

  constructor(repo: Repository<E, F>) {
    this.repo = repo;
  }

  abstract Search(context?: E): F[];
}
