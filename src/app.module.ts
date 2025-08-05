import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './Games/entities/games.entity';
import { GamesModule } from './Games/games.module';
import { Marcadores } from './Marcadores/entities/marcadores.entity';
import { MarcadoresModule } from './Marcadores/marcadores.module';

@Module({
  imports: [
    TypeOrmModule .forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojagames',
      entities: [Games, Marcadores],
      synchronize: true,
      logging: true
    }),
    GamesModule,
    MarcadoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
