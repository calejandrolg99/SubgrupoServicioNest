import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from '../services/search.service';

@Controller('search')
export class SearchController<E, F> {
  protected searchService: SearchService<E, F>;

  //Consultas
  @Get(':context?')
  FindAll(@Param('context') Context: E): F[] {
    return this.searchService.Search(Context);
  }
}
