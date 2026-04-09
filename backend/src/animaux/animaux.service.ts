import { Injectable } from '@nestjs/common';
import { UpdateAnimauxDto } from './dto/update-animaux.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animaux } from './entities/animaux.entity';

@Injectable()
export class AnimauxService {
  constructor(
    @InjectRepository(Animaux)
    private animauxRepository: Repository<Animaux>
  ) { }
  create(createAnimauxDto: any) {
    const animalData: any = { ...createAnimauxDto };
    if (createAnimauxDto.clientId) {
      animalData.client = { id: Number(createAnimauxDto.clientId) };
    } else {
      delete animalData.client;
    }
    const nouvelAnimal = this.animauxRepository.create(animalData);
    return this.animauxRepository.save(nouvelAnimal);
  }

  findAll() {
    return this.animauxRepository.find({
      relations: ['client']
    })
  }

  findOne(id: number) {
    return this.animauxRepository.findOne({
      where: { id },
      relations: ['client']
    })
  }

  update(id: number, updateAnimauxDto: UpdateAnimauxDto) {
    return this.animauxRepository.update(id, updateAnimauxDto);
  }

  remove(id: number) {
    return this.animauxRepository.delete(id)
  }
}
