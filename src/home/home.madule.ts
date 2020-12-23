import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Home, HomeSchema } from './schemas/home.schema';


@Module({
  providers: [HomeService],
  controllers: [HomeController],
  imports:[
    MongooseModule.forFeature([
      {name: Home.name, schema: HomeSchema}
    ])
  ]
})

export class HomeMadule {}
