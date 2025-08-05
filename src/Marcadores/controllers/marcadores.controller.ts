import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Marcadores } from "../entities/marcadores.entity";
import { MarcadoresService } from "../services/marcadores.service";

@Controller("/marcadores")
export class MarcadoresController {
  constructor(private readonly marcadoresService: MarcadoresService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Marcadores[]> {
    return this.marcadoresService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Marcadores> {
    return this.marcadoresService.findById(id);
  }

  @Get('/marcadores/:marcadores')
  @HttpCode(HttpStatus.OK)
  findAllByMarcadores(@Param("marcadores") marcadores: string): Promise<Marcadores[]> {
    return this.marcadoresService.findAllByMarcadores(marcadores);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() marcadores: Marcadores): Promise<Marcadores> {
    return this.marcadoresService.create(marcadores);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() marcadores: Marcadores): Promise<Marcadores> {
    return this.marcadoresService.update(marcadores);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.marcadoresService.delete(id);
  }

}