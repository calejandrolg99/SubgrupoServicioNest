import { Repository } from './repository';

export abstract class SearchService<E, F> {
  abstract Search(repo: Repository<E, F>, context?: E): F[];
}
