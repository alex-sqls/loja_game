import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put} from "@nestjs/common"
import { GamesService } from "../service/games.service";
import { Games } from "../entities/games.entity";



@Controller("/games")
export class GamesController{
    //readonly so para leitura
    constructor(private readonly gamesService: GamesService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    //metodo que acessa a service
    findAll(): Promise<Games[]> {
        return this.gamesService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Games> {
        return this.gamesService.findById(id);
    }

    @Get('/name/:name') 
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('name') name: string): Promise<Games[]> {
        return this.gamesService.findAllByNome(name);
    }

    //cria
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() game: Games) : Promise<Games> {
        return this.gamesService.create(game);
    }

    //atualiza
    @Put()
    @HttpCode(HttpStatus.CREATED)
    update(@Body() game: Games) : Promise<Games> {
        return this.gamesService.update(game);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.gamesService.delete(id)
    }
}