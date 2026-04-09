import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimauxDto } from './dto/create-animaux.dto';
import { UpdateAnimauxDto } from './dto/update-animaux.dto';

@Controller('animaux')
export class AnimauxController {
  constructor(private readonly animauxService: AnimauxService) {}

  @Post()
  create(@Body() createAnimauxDto: CreateAnimauxDto) {
    return this.animauxService.create(createAnimauxDto);
  }

  @Get()
  findAll() {
    return this.animauxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animauxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimauxDto: UpdateAnimauxDto) {
    return this.animauxService.update(+id, updateAnimauxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animauxService.remove(+id);
  }
}
