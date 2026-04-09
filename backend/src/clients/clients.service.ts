import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>
  ) {}

  create(createClientDto: CreateClientDto) {
    const newClient = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(newClient)
  }

  findAll() {
    return this.clientsRepository.find({
      relations: ['animaux']
    })
  }

  findOne(id: number) {
    return this.clientsRepository.findOne({
      where: { id },
      relations: ['animaux']
    })
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientsRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientsRepository.delete(id);
  }
}
