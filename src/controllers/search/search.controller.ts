import { Controller, Get, Param } from '@nestjs/common';
import { Book } from 'src/interfaces/book.interface';

@Controller('search')
export class SearchController {
  @Get(':isbn')
  async findBookNameByISBN(@Param('isbn') ISBN: string): Promise<string> {
    let foundBook: Book = { name: '' };
    
    return foundBook.name;
  }
}
