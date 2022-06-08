import { Injectable } from '@nestjs/common';
import { SearchService } from './search.service';

@Injectable()
export class ByUbication extends SearchService<string, string> {
  Search(context?: string): string[] {
    if (context) {
      return ['busqueda por ubicacion'];
    } else {
      return ['busqueda general'];
    }
  }
}
