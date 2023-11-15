import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchControllerController } from './src/controllers/search-controller/search-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, SearchControllerController],
  providers: [AppService],
})
export class AppModule {}
