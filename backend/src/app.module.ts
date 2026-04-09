import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { AnimauxModule } from './animaux/animaux.module';
import { Client } from './clients/entities/client.entity';
import { Animaux } from './animaux/entities/animaux.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'veterinaire.sqlite',
      entities: [Client, Animaux]
    }),
    ClientsModule,
    AnimauxModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}