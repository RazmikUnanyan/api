import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeMadule } from './home/home.madule';


@Module({
  imports: [HomeMadule,
    MongooseModule.forRoot(`mongodb+srv://cynops:cynops1234@cluster0.eglkq.mongodb.net/cynops?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
