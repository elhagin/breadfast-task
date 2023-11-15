import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './src/controllers/search/search.controller';
import { SearchService } from './src/services/search/search.service';

@Module({
  imports: [],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
