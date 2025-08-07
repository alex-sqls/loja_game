import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Games } from "../entities/games.entity";
import { DeleteResult, Like, Repository } from "typeorm";
import { MarcadoresService } from "src/marcadores/services/marcadores.service";


// regras de registro
@Injectable()
export class GamesService {

    constructor(
        
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>, 
        
        private marcadoresService: MarcadoresService,

    ) { }

  
    async findAll(): Promise<Games[]> {
        return await this.gamesRepository.find({
           
            relations: {
                marcadores: true,
            },
        });
    }

    async findById(id: number): Promise<Games> {

        const games = await this.gamesRepository.findOne({
            where: {
                id
            },
            relations: {
                marcadores: true
            }
        })

       
        if (!games) throw new HttpException('postagem nao encontrada', HttpStatus.NOT_FOUND)
        return games;
    }

    async findAllByNome(nome: string): Promise<Games[]> {
        return await this.gamesRepository.find({
            where: {
                nome: Like(`%${nome}%`)
            },
            relations: {
                marcadores: true,
            }
        })
    }

    async create(games: Games): Promise<Games> {

        //await this.marcadoresService.findById(games.marcadores.id)

        return await this.gamesRepository.save(games)
    }

    async update(games: Games): Promise<Games> {

        const games_id = await this.findById(games.id);
        if (!games_id) {
            throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND);
        }
    
        await this.marcadoresService.findById(games.marcadores.id);
       
        return await this.gamesRepository.save(games);
    }

    async delete (id: number): Promise < DeleteResult > {
        await this.findById(id)

        return await this.gamesRepository.delete(id)
}

}