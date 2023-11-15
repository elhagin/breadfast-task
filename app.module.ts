import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './src/controllers/search/search.controller';
import { SearchService } from './src/services/search/search.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
