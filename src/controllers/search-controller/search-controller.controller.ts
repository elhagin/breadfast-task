import { Controller } from '@nestjs/common';
import axios from 'axios';

@Controller('search')
export class SearchController {
  @Get()
  findBookNameByISBN(ISBN: string): string {
    let foundBookName: string = '';
    
    return foundBookName;
  }
}
