import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';
export declare class NewsController {
    private readonly newsServise;
    constructor(newsServise: NewsService);
    getAll(): Promise<News[]>;
    getOne(id: string): Promise<News>;
    create(createHomeDto: CreateNewsDto): Promise<News>;
    remove(id: string): Promise<News>;
    update(updateHomeDto: UpdateNewsDto, id: string): Promise<News>;
}
