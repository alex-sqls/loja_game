import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from "./entities/games.entity";
import { GamesController } from "./controllers/games.controller";
import { GamesService } from "./service/games.service";
import { MarcadoresModule } from "src/Marcadores/marcadores.module";

// tudo o que eu fiz tenho que dispoinibilizar na module
@Module({
  imports: [TypeOrmModule.forFeature([Games]), MarcadoresModule],
  controllers: [GamesController],
  providers: [GamesService], 
  exports:[TypeOrmModule] 
})
export class GamesModule {}