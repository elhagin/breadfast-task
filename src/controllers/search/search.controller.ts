import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { Book } from 'src/interfaces/book.interface';
import { SearchService } from 'src/services/search/search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
  @Get(':isbn')
  async findBookNameByISBN(@Param('isbn') ISBN: string): Promise<string> {
    let foundBook: Book = { name: '' };
    foundBook = await this.searchService.findBookByISBN(ISBN);
    return foundBook.name;
  }
}
