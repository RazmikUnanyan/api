import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('home/news')
export class NewsController {
  constructor(private readonly newsServise: NewsService ) {
  }
  @Get()
  getAll(): Promise<News[]>
  {
    return this.newsServise.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<News> {
    return this.newsServise.getById(id)
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createHomeDto: CreateNewsDto): Promise<News> {
    return this.newsServise.create(createHomeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<News> {
    return this.newsServise.remove(id)
  }
  @Put(':id')
  update(@Body() updateHomeDto: UpdateNewsDto, @Param('id') id: string): Promise<News> {
    return this.newsServise.update(id, updateHomeDto)
  }
}
