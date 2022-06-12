import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from '../services/search.service';

@Controller('search')
export class SearchController<E, F> {
  constructor(protected searchService: SearchService<E, F>) {}

  //Consultas
  @Get(':context?')
  Find(@Param('context') Context: E): F {
    return this.searchService.Search(Context);
  }
}
