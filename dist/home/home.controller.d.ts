import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { HomeService } from './home.service';
import { Home } from './schemas/home.schema';
export declare class HomeController {
    private readonly homeServise;
    constructor(homeServise: HomeService);
    getAll(): Promise<Home[]>;
    getOne(id: string): Promise<Home>;
    create(createHomeDto: CreateHomeDto): Promise<Home>;
    remove(id: string): Promise<Home>;
    update(updateHomeDto: UpdateHomeDto, id: string): Promise<Home>;
}
