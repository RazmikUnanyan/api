import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News, HomeDocument } from './schemas/news.schema';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class NewsService {

  constructor(@InjectModel(News.name) private homeModel: Model<HomeDocument>) {
  }

  private home = [];

  async getAll(): Promise<News[]> {
    return this.homeModel.find().exec();
  }

  async getById(id: string): Promise<News> {
    return this.homeModel.findById(id).exec();
  }

  async create(homeDto: CreateNewsDto): Promise<News> {
   const newHome = new this.homeModel(homeDto)
    return newHome.save()
  }
  async remove(id: string): Promise<News>{
    return this.homeModel.findByIdAndRemove(id)
  }

  async update(id: string, homeDto: UpdateNewsDto): Promise<News>{
    return this.homeModel.findByIdAndUpdate(id, homeDto, { new: true})
  }
}
