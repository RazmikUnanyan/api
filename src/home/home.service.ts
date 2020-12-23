import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHomeDto } from './dto/create-home.dto';
import { Home, HomeDocument } from './schemas/home.schema';
import { UpdateHomeDto } from './dto/update-home.dto';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class HomeService {

  constructor(@InjectModel(Home.name) private homeModel: Model<HomeDocument>) {
  }

  private home = [];

  async getAll(): Promise<Home[]> {
    return this.homeModel.find().exec();
  }

  async getById(id: string): Promise<Home> {
    return this.homeModel.findById(id).exec();
  }

  async create(homeDto: CreateHomeDto): Promise<Home> {
   const newHome = new this.homeModel(homeDto)
    return newHome.save()
  }
  async remove(id: string): Promise<Home>{
    return this.homeModel.findByIdAndRemove(id)
  }

  async update(id: string, homeDto: UpdateHomeDto): Promise<Home>{
    return this.homeModel.findByIdAndUpdate(id, homeDto, { new: true})
  }
}
