import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcadoresModule } from "src/marcadores/marcadores.module";
import { Games } from "./entities/games.entity";
import { GamesController } from "./controllers/games.controller";
import { GamesService } from "./service/games.service";


// tudo o que eu fiz tenho que dispoinibilizar na module
@Module({
  imports: [TypeOrmModule.forFeature([Games]), MarcadoresModule],
  controllers: [GamesController],
  providers: [GamesService], 
  exports:[TypeOrmModule] 
})
export class GamesModule {}