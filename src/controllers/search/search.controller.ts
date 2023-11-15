import { Controller, Get, Param } from '@nestjs/common';
import { Book } from 'src/interfaces/book.interface';
import { SearchService } from 'src/services/search/search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}
  
  @Get(':isbn')
  async findBookNameByISBN(@Param('isbn') ISBN: string): Promise<string> {
    let foundBook: Book = { name: '' };
    
    return foundBook.name;
  }
}
