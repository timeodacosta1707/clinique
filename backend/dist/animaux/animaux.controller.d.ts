import { AnimauxService } from './animaux.service';
import { CreateAnimauxDto } from './dto/create-animaux.dto';
import { UpdateAnimauxDto } from './dto/update-animaux.dto';
export declare class AnimauxController {
    private readonly animauxService;
    constructor(animauxService: AnimauxService);
    create(createAnimauxDto: CreateAnimauxDto): Promise<import("./entities/animaux.entity").Animaux[]>;
    findAll(): Promise<import("./entities/animaux.entity").Animaux[]>;
    findOne(id: string): Promise<import("./entities/animaux.entity").Animaux | null>;
    update(id: string, updateAnimauxDto: UpdateAnimauxDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
