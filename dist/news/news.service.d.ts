import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News, HomeDocument } from './schemas/news.schema';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsService {
    private homeModel;
    constructor(homeModel: Model<HomeDocument>);
    private home;
    getAll(): Promise<News[]>;
    getById(id: string): Promise<News>;
    create(homeDto: CreateNewsDto): Promise<News>;
    remove(id: string): Promise<News>;
    update(id: string, homeDto: UpdateNewsDto): Promise<News>;
}
