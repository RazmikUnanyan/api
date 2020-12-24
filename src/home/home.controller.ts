import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { HomeService } from './home.service';
import { Home } from './schemas/home.schema';

@Controller('home')
export class HomeController {
  constructor(private readonly homeServise: HomeService ) {
  }
  @Get()
  getAll(): Promise<Home[]>
  {
    return this.homeServise.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Home> {
    return this.homeServise.getById(id)
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createHomeDto: CreateHomeDto): Promise<Home> {
    return this.homeServise.create(createHomeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Home> {
    return this.homeServise.remove(id)
  }
  @Put(':id')
  update(@Body() updateHomeDto: UpdateHomeDto, @Param('id') id: string): Promise<Home> {
    return this.homeServise.update(id, updateHomeDto)
  }
}
