import { SearchService } from './search.service';
import { Repository } from './repository';

export class BySpecialty extends SearchService<string, string> {
  Search(repo: Repository<string, string>, context?: string): string[] {
    if (context) {
      return ['busqueda por una especialidad'];
    } else {
      return ['busqueda general'];
    }
  }
}
