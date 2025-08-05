import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Marcadores } from "../entities/marcadores.entity";

@Injectable()
export class MarcadoresService {
    constructor(
        @InjectRepository(Marcadores)
        private marcadoresRepository: Repository<Marcadores>
    ) { }

    async findAll(): Promise<Marcadores[]> {
        return await this.marcadoresRepository.find({
        
            relations: {
                postagem: true
            }
        });
    }

    async findById(id: number): Promise<Marcadores> {

        let marcadores = await this.marcadoresRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if (!marcadores)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return marcadores;
    }

    async findAllByMarcadores(marcadores: string): Promise<Marcadores[]> {
        return await this.marcadoresRepository.find({
            where: {
                MarcadoresPopulares: ILike(`%${marcadores}%`)
            },
            relations: {
                postagem: true
            }
        })
    }

    async create(marcadores: Marcadores): Promise<Marcadores> {
        return await this.marcadoresRepository.save(marcadores);
    }

    async update(marcadores: Marcadores): Promise<Marcadores> {

        await this.findById(marcadores.id);

        return await this.marcadoresRepository.save(marcadores);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.marcadoresRepository.delete(id);

    }

}