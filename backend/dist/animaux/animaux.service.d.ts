import { UpdateAnimauxDto } from './dto/update-animaux.dto';
import { Repository } from 'typeorm';
import { Animaux } from './entities/animaux.entity';
export declare class AnimauxService {
    private animauxRepository;
    constructor(animauxRepository: Repository<Animaux>);
    create(createAnimauxDto: any): Promise<Animaux[]>;
    findAll(): Promise<Animaux[]>;
    findOne(id: number): Promise<Animaux | null>;
    update(id: number, updateAnimauxDto: UpdateAnimauxDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
