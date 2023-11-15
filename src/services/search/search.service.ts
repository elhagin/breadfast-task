import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cache } from 'cache-manager';
import { Book } from 'src/interfaces/book.interface';

@Injectable()
export class SearchService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}
  async findBookByISBN(ISBN: string): Promise<Book> {
    const response = await axios.get(
      `https://openlibrary.org/isbn/${ISBN}.json`,
    );
    
    let bookName: string = await this.cacheService.get(ISBN);
    if (response.data.title !== bookName) {
      await this.cacheService.set(ISBN, response.data.title);
      bookName = response.data.title;
    }
    const bookObj = {
      name: bookName ?? 'Error: Could not retrieve title',
    };
    return bookObj;
  }
}
