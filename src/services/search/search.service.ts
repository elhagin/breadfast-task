import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Book } from 'src/interfaces/book.interface';

@Injectable()
export class SearchService {
  async findBookByISBN(ISBN: string): Promise<Book> {
    const response = await axios.get(
      `https://openlibrary.org/isbn/${ISBN}.json`,
    );
    console.log(response);
    const bookObj = {
      name: response.data.title ?? 'Error: Could not retrieve title',
    };
    return bookObj;
  }
}
