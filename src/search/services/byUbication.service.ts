import { SearchService } from './search.service';
import { Repository } from './repository';

export class ByUbication extends SearchService<string, string> {
  Search(repo: Repository<string, string>, context?: string): string[] {
    if (context) {
      return ['busqueda por ubicacion'];
    } else {
      return ['busqueda general'];
    }
  }
}
