import { Module } from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { AnimauxController } from './animaux.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animaux } from './entities/animaux.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animaux])],
  controllers: [AnimauxController],
  providers: [AnimauxService],
})
export class AnimauxModule {}
