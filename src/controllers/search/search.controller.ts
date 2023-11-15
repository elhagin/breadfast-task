import { Controller, Param } from '@nestjs/common';
import axios from 'axios';
import { Book } from 'src/interfaces/book.interface';

@Controller('search')
export class SearchController {
  @Get(':isbn')
  async findBookNameByISBN(@Param params: any): Promise<Book[]> {
    const ISBN: string = params.isbn;
    let foundBook: Book = { name: '' };
    
    return foundBookName;
  }
}
