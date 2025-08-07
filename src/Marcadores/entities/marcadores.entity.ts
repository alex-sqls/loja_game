import { IsNotEmpty } from "class-validator";
import { Games } from "src/games/entities/games.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_marcadores"})
export class Marcadores {

    
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    MarcadoresPopulares: string

    @OneToMany(() => Games, (games) => games.marcadores) postagem: Games[];
    game: any;
}