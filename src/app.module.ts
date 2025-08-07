import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './games/entities/games.entity';
import { GamesModule } from './games/games.module';
import { Marcadores } from './marcadores/entities/marcadores.entity';
import { MarcadoresModule } from './marcadores/marcadores.module';

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
