import { Model } from 'mongoose';
import { CreateHomeDto } from './dto/create-home.dto';
import { Home, HomeDocument } from './schemas/home.schema';
import { UpdateHomeDto } from './dto/update-home.dto';
export declare class HomeService {
    private homeModel;
    constructor(homeModel: Model<HomeDocument>);
    private home;
    getAll(): Promise<Home[]>;
    getById(id: string): Promise<Home>;
    create(homeDto: CreateHomeDto): Promise<Home>;
    remove(id: string): Promise<Home>;
    update(id: string, homeDto: UpdateHomeDto): Promise<Home>;
}
