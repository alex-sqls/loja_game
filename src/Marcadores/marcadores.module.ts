import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marcadores } from "./entities/marcadores.entity";
import { MarcadoresService } from "./services/marcadores.service";
import { MarcadoresController } from "./controllers/marcadores.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Marcadores])],
    providers: [MarcadoresService],
    controllers: [MarcadoresController],
    exports: [MarcadoresService]
})
export class MarcadoresModule {}